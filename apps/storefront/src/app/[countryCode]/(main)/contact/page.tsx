import { shopConfig } from "@lib/config/shop"

export default function ContactPage() {
  return (
    <div className="content-container py-12">
      <div className="max-w-3xl">
        <h1 className="text-3xl-semi mb-6">Kontakt</h1>

        <div className="grid gap-6 small:grid-cols-2">
          <div className="border border-ui-border-base rounded-rounded p-4">
            <h2 className="text-xl-semi mb-3">Dane kontaktowe</h2>
            <div className="text-ui-fg-subtle space-y-1">
              <p>{shopConfig.company.name}</p>
              <p>{shopConfig.company.street}</p>
              <p>{shopConfig.company.postalCode} {shopConfig.company.city}</p>
              <p>{shopConfig.company.country}</p>
              <p>E-mail: {shopConfig.contact.email}</p>
              <p>Telefon: {shopConfig.contact.phone}</p>
              <p>Godziny obsługi: {shopConfig.contact.workingHours}</p>
            </div>
          </div>

          <div className="border border-ui-border-base rounded-rounded p-4">
            <h2 className="text-xl-semi mb-3">Obsługa klienta</h2>
            <div className="text-ui-fg-subtle space-y-2">
              <p>
                W sprawach dotyczących zamówień, dostawy, płatności, zwrotów lub reklamacji skontaktuj się z obsługą sklepu.
              </p>
              <p>
                Odpowiadamy w godzinach pracy podanych w danych kontaktowych.
              </p>
            </div>
          </div>
        </div>

        {shopConfig.demo.enabled && (
          <div className="mt-6 border border-ui-border-base rounded-rounded p-4 bg-ui-bg-subtle text-ui-fg-subtle">
            <h2 className="text-xl-semi mb-3">{shopConfig.demo.label}</h2>
            <p>{shopConfig.demo.notice}</p>
          </div>
        )}
      </div>
    </div>
  )
}
