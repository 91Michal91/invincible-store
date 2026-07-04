import { Metadata } from "next"
import { notFound } from "next/navigation"

import { retrieveOrder } from "@lib/data/orders"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import OrderDetailsTemplate from "@modules/order/templates/order-details-template"

type Props = {
  params: Promise<{
    id: string
  }>
}

const isUnauthorizedError = (error: unknown) => {
  const message = error instanceof Error ? error.message : String(error)

  return message.toLowerCase().includes("unauthorized")
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params

  try {
    const order = await retrieveOrder(params.id)

    if (!order) {
      return {
        title: "Szczegóły zamówienia",
        description: "Podgląd szczegółów zamówienia klienta.",
      }
    }

    return {
      title: `Zamówienie #${order.display_id}`,
      description: `Szczegóły zamówienia #${order.display_id}.`,
    }
  } catch {
    return {
      title: "Szczegóły zamówienia",
      description: "Podgląd szczegółów zamówienia klienta.",
    }
  }
}

export default async function OrderDetailsPage(props: Props) {
  const params = await props.params

  try {
    const order = await retrieveOrder(params.id)

    if (!order) {
      notFound()
    }

    return <OrderDetailsTemplate order={order} />
  } catch (error) {
    if (!isUnauthorizedError(error)) {
      throw error
    }

    return (
      <div className="w-full" data-testid="order-details-page-wrapper">
        <div className="mb-8 flex flex-col gap-y-4">
          <h1 className="text-2xl-semi">Sesja wygasła</h1>

          <p className="text-base-regular text-ui-fg-subtle">
            Nie udało się pobrać szczegółów zamówienia, ponieważ sesja klienta wygasła albo wymaga odświeżenia.
          </p>

          <p className="text-base-regular text-ui-fg-subtle">
            Zaloguj się ponownie, a następnie wróć do szczegółów zamówienia.
          </p>

          <div className="flex flex-col small:flex-row gap-3">
            <LocalizedClientLink
              href="/account"
              className="inline-flex items-center justify-center rounded-md border border-ui-border-base px-4 py-2 text-base-semi hover:bg-ui-bg-base-hover"
            >
              Przejdź do logowania
            </LocalizedClientLink>

            <LocalizedClientLink
              href="/account/orders"
              className="inline-flex items-center justify-center rounded-md border border-ui-border-base px-4 py-2 text-base-semi hover:bg-ui-bg-base-hover"
            >
              Wróć do zamówień
            </LocalizedClientLink>
          </div>
        </div>
      </div>
    )
  }
}
