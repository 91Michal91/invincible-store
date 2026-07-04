import { Metadata } from "next"

import OrderOverview from "@modules/account/components/order-overview"
import { listOrders } from "@lib/data/orders"
import { signout } from "@lib/data/customer"
import Divider from "@modules/common/components/divider"
import TransferRequestForm from "@modules/account/components/transfer-request-form"

export const metadata: Metadata = {
  title: "Zamówienia",
  description: "Przegląd wcześniejszych zamówień klienta.",
}

type OrdersPageProps = {
  params: Promise<{
    countryCode: string
  }>
}

export default async function OrdersPage({ params }: OrdersPageProps) {
  const { countryCode } = await params

  let orders: Awaited<ReturnType<typeof listOrders>> = []
  let sessionExpired = false

  try {
    orders = await listOrders()
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)

    if (message.toLowerCase().includes("unauthorized")) {
      sessionExpired = true
    } else {
      throw error
    }
  }

  async function handleExpiredSessionLogin() {
    "use server"

    await signout(countryCode)
  }

  if (sessionExpired) {
    return (
      <div className="w-full" data-testid="orders-page-wrapper">
        <div className="mb-8 flex flex-col gap-y-4">
          <h1 className="text-2xl-semi">Sesja wygasła</h1>
          <p className="text-base-regular text-ui-fg-subtle">
            Nie udało się pobrać zamówień, ponieważ sesja klienta wygasła albo wymaga odświeżenia.
          </p>
          <p className="text-base-regular text-ui-fg-subtle">
            Zaloguj się ponownie, a następnie wróć do zakładki zamówień.
          </p>

          <div>
            <form action={handleExpiredSessionLogin}>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md border border-ui-border-base px-4 py-2 text-base-semi hover:bg-ui-bg-base-hover"
              >
                Przejdź do logowania
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full" data-testid="orders-page-wrapper">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">Zamówienia</h1>
        <p className="text-base-regular">
          Zobacz swoje wcześniejsze zamówienia oraz ich status. W razie potrzeby możesz utworzyć zwrot lub wymianę.
        </p>
      </div>
      <div>
        <OrderOverview orders={orders || []} />
        <Divider className="mb-8 mt-8" />
        <TransferRequestForm />
      </div>
    </div>
  )
}
