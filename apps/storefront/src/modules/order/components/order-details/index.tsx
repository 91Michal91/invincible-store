import { HttpTypes } from "@medusajs/types"
import { Text } from "@modules/common/components/ui"
import {
  formatDatePL,
  formatOrderStatus,
  formatPaymentStatus,
} from "@lib/util/format"

type OrderDetailsProps = {
  order: HttpTypes.StoreOrder
  showStatus?: boolean
}

const OrderDetails = ({ order, showStatus }: OrderDetailsProps) => {
  return (
    <div>
      <Text>
        Szczegóły potwierdzenia zamówienia wysłaliśmy na{" "}
        <span
          className="text-ui-fg-medium-plus font-semibold"
          data-testid="order-email"
        >
          {order.email}
        </span>
        .
      </Text>
      <Text className="mt-2">
        Data zamówienia:{" "}
        <span data-testid="order-date">
          {formatDatePL(order.created_at, {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </span>
      </Text>
      <Text className="mt-2 text-ui-fg-interactive">
        Numer zamówienia: <span data-testid="order-id">{order.display_id}</span>
      </Text>

      <div className="flex items-center text-compact-small gap-x-4 mt-4">
        {showStatus && (
          <>
            <Text>
              Status zamówienia:{" "}
              <span className="text-ui-fg-subtle " data-testid="order-status">
                {formatOrderStatus(order.fulfillment_status)}
              </span>
            </Text>
            <Text>
              Status płatności:{" "}
              <span
                className="text-ui-fg-subtle "
                data-testid="order-payment-status"
              >
                {formatPaymentStatus(order.payment_status)}
              </span>
            </Text>
          </>
        )}
      </div>
    </div>
  )
}

export default OrderDetails
