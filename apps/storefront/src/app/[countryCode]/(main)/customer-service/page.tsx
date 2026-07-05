import { shopConfig } from "@lib/config/shop"

export default function CustomerServicePage() {
  return (
    <div className="content-container py-12">
      <h1 className="text-3xl-semi mb-4">Obsługa klienta</h1>

      <div className="max-w-2xl text-base-regular text-ui-fg-subtle flex flex-col gap-y-4">
        <p>
          W tym miejscu można umieścić najważniejsze informacje dla klientów:
          kontakt, czas realizacji zamówień, dostawę, zwroty oraz reklamacje.
        </p>

        <div>
          <h2 className="text-xl-semi text-ui-fg-base mb-2">Kontakt</h2>
          <div className="space-y-1">
            <p>E-mail: {shopConfig.contact.email}</p>
            <p>Telefon: {shopConfig.contact.phone}</p>
            <p>Godziny obsługi: {shopConfig.contact.workingHours}</p>
          </div>
        </div>

        <div>
          <h2 className="text-xl-semi text-ui-fg-base mb-2">Dostawa</h2>
          <p>
            Informacje o metodach dostawy, czasie realizacji oraz kosztach można
            dostosować do konkretnego sklepu.
          </p>
        </div>

        <div>
          <h2 className="text-xl-semi text-ui-fg-base mb-2">Zwroty i wymiany</h2>
          <p>
            Zwroty, wymiany i reklamacje obsługujemy mailowo. Klient sklepu internetowego może co do zasady odstąpić od umowy w terminie 14 dni od otrzymania produktu. Reklamacje dotyczące niezgodności produktu z umową rozpatrujemy zgodnie z obowiązującymi przepisami.
          </p>
        </div>
      </div>
    </div>
  )
}
