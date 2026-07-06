import type {
  CourierShipmentRequest,
  CourierShipmentResult,
} from "../types"

export interface CourierClient {
  createShipment(
    shipment: CourierShipmentRequest
  ): Promise<CourierShipmentResult>

  cancelShipment?(
    externalShipmentId: string
  ): Promise<void>

  getTracking?(
    trackingNumber: string
  ): Promise<unknown>
}
