import type { CourierClient } from "./base"
import type {
  CourierFulfillmentOptions,
  CourierShipmentRequest,
  CourierShipmentResult,
} from "../types"

export class FurgonetkaCourierClient implements CourierClient {
  constructor(private readonly options: CourierFulfillmentOptions) {}

  async createShipment(
    shipment: CourierShipmentRequest
  ): Promise<CourierShipmentResult> {
    return {
      externalShipmentId: `furgonetka-draft-${shipment.orderId}`,
      trackingNumber: undefined,
      trackingUrl: undefined,
      labelUrl: undefined,
      raw: {
        provider: "furgonetka",
        mode: "skeleton",
        shipment,
        options: this.options,
      },
    }
  }
}
