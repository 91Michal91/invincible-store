import { retrieveCustomer } from "@lib/data/customer"
// TODO: Re-add Toaster component when needed
import KontoLayout from "@modules/account/templates/account-layout"

export default async function KontoPageLayout({
  dashboard,
  login,
}: {
  dashboard?: React.ReactNode
  login?: React.ReactNode
}) {
  const customer = await retrieveCustomer().catch(() => null)

  return (
    <KontoLayout customer={customer}>
      {customer ? dashboard : login}
      {/* TODO: Re-add Toaster component when needed */}
    </KontoLayout>
  )
}
