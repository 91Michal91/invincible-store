import type {
  CalculatedShippingOptionPrice,
  CalculateShippingOptionPriceContext,
  CreateFulfillmentResult,
  CreateShippingOptionDTO,
  FulfillmentItemDTO,
  FulfillmentOption,
  FulfillmentOrderDTO,
  IFulfillmentProvider,
  ValidateFulfillmentDataContext,
} from "@medusajs/framework/types"

import { createCourierClient } from "./clients"
import type {
  CourierFulfillmentOptions,
  CourierShipmentRequest,
} from "./types"

type InjectedDependencies = Record<string, unknown>

export default class CourierFulfillmentProviderService
  implements IFulfillmentProvider
{
  static identifier = "courier"

  protected readonly options_: CourierFulfillmentOptions

  constructor(
    _container: InjectedDependencies,
    options: CourierFulfillmentOptions = {}
  ) {
    this.options_ = {
      provider: options.provider || "furgonetka",
      defaultService: options.defaultService || "standard",
      defaultPackageWeightKg: options.defaultPackageWeightKg || 1,
      defaultPackageLengthCm: options.defaultPackageLengthCm || 30,
      defaultPackageWidthCm: options.defaultPackageWidthCm || 25,
      defaultPackageHeightCm: options.defaultPackageHeightCm || 5,
      ...options,
    }
  }

  getIdentifier(): string {
    return CourierFulfillmentProviderService.identifier
  }

  async getFulfillmentDocuments(..._args: unknown[]): Promise<any[]> {
    return []
  }

  async retrieveDocuments(..._args: unknown[]): Promise<any[]> {
    return []
  }

  async getReturnDocuments(..._args: unknown[]): Promise<any[]> {
    return []
  }

  async getShipmentDocuments(..._args: unknown[]): Promise<any[]> {
    return []
  }

  async getFulfillmentOptions(): Promise<FulfillmentOption[]> {
    return [
      {
        id: "courier_standard",
      },
    ]
  }

  async validateOption(
    _data: Record<string, unknown>
  ): Promise<boolean> {
    return true
  }

  async validateFulfillmentData(
    _optionData: Record<string, unknown>,
    data: Record<string, unknown>,
    _context: ValidateFulfillmentDataContext
  ): Promise<Record<string, unknown>> {
    return data
  }

  async canCalculate(
    _data: CreateShippingOptionDTO
  ): Promise<boolean> {
    return false
  }

  async calculatePrice(
    _optionData: Record<string, unknown>,
    _data: Record<string, unknown>,
    _context: CalculateShippingOptionPriceContext
  ): Promise<CalculatedShippingOptionPrice> {
    return {
      calculated_amount: 0,
      is_calculated_price_tax_inclusive: false,
    }
  }

  async createFulfillment(
    data: Record<string, unknown>,
    items: Partial<Omit<FulfillmentItemDTO, "fulfillment">>[],
    order: Partial<FulfillmentOrderDTO> | undefined
  ): Promise<CreateFulfillmentResult> {
    const client = createCourierClient(this.options_)

    const shipment: CourierShipmentRequest = {
      orderId: String(order?.id || data.order_id || "unknown-order"),
      recipient: {
        firstName: order?.shipping_address?.first_name,
        lastName: order?.shipping_address?.last_name,
        company: order?.shipping_address?.company,
        phone: order?.shipping_address?.phone,
        street: order?.shipping_address?.address_1,
        city: order?.shipping_address?.city,
        postalCode: order?.shipping_address?.postal_code,
        countryCode: order?.shipping_address?.country_code,
      },
      sender: {
        company: this.options_.senderName,
        email: this.options_.senderEmail,
        phone: this.options_.senderPhone,
        street: this.options_.senderStreet,
        city: this.options_.senderCity,
        postalCode: this.options_.senderPostalCode,
        countryCode: this.options_.senderCountry || "pl",
      },
      parcel: {
        weightKg: this.options_.defaultPackageWeightKg || 1,
        lengthCm: this.options_.defaultPackageLengthCm || 30,
        widthCm: this.options_.defaultPackageWidthCm || 25,
        heightCm: this.options_.defaultPackageHeightCm || 5,
      },
      service: this.options_.defaultService,
      metadata: {
        data,
        items,
      },
    }

    const result = await client.createShipment(shipment)

    return {
      data: {
        provider: this.options_.provider,
        external_shipment_id: result.externalShipmentId,
        tracking_number: result.trackingNumber,
        tracking_url: result.trackingUrl,
        label_url: result.labelUrl,
        raw: result.raw,
      },
      labels: result.trackingNumber
        ? [
            {
              tracking_number: result.trackingNumber,
              tracking_url: result.trackingUrl || "",
              label_url: result.labelUrl || "",
            },
          ]
        : [],
    }
  }

  async cancelFulfillment(
    fulfillment: Record<string, unknown>
  ): Promise<Record<string, unknown>> {
    return {
      cancelled: true,
      fulfillment,
    }
  }

  async createReturnFulfillment(
    fromData: Record<string, unknown>
  ): Promise<CreateFulfillmentResult> {
    return {
      data: {
        provider: this.options_.provider,
        return: true,
        fromData,
      },
      labels: [],
    }
  }
}
