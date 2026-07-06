export type CourierProviderCode = "manual" | "apaczka" | "furgonetka"

export type CourierFulfillmentOptions = {
  provider?: CourierProviderCode
  defaultService?: string
  defaultPackageWeightKg?: number
  defaultPackageLengthCm?: number
  defaultPackageWidthCm?: number
  defaultPackageHeightCm?: number
  senderName?: string
  senderEmail?: string
  senderPhone?: string
  senderStreet?: string
  senderPostalCode?: string
  senderCity?: string
  senderCountry?: string
}

export type CourierAddress = {
  firstName?: string
  lastName?: string
  company?: string
  email?: string
  phone?: string
  street?: string
  city?: string
  postalCode?: string
  countryCode?: string
}

export type CourierParcel = {
  weightKg: number
  lengthCm: number
  widthCm: number
  heightCm: number
}

export type CourierShipmentRequest = {
  orderId: string
  recipient: CourierAddress
  sender: CourierAddress
  parcel: CourierParcel
  service?: string
  metadata?: Record<string, unknown>
}

export type CourierShipmentResult = {
  externalShipmentId?: string
  trackingNumber?: string
  trackingUrl?: string
  labelUrl?: string
  labelBase64?: string
  raw?: unknown
}
