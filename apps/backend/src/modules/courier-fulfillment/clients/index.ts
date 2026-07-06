import type { CourierClient } from "./base"
import { ApaczkaCourierClient } from "./apaczka"
import { FurgonetkaCourierClient } from "./furgonetka"
import type { CourierFulfillmentOptions } from "../types"

export function createCourierClient(
  options: CourierFulfillmentOptions
): CourierClient {
  if (options.provider === "apaczka") {
    return new ApaczkaCourierClient(options)
  }

  if (options.provider === "furgonetka") {
    return new FurgonetkaCourierClient(options)
  }

  return new FurgonetkaCourierClient({
    ...options,
    provider: "furgonetka",
  })
}
