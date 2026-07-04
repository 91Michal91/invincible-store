import { shopConfig } from "@lib/config/shop"

export default function TermsPage() {
  return (
    <div className="content-container py-12">
      <div className="max-w-3xl">
        <h1 className="text-3xl-semi mb-6">Regulamin</h1>

        <div className="prose prose-sm text-ui-fg-subtle space-y-4">
          <p>
            Niniejszy regulamin określa zasady korzystania ze sklepu internetowego {shopConfig.store.name}, składania zamówień, płatności, dostawy oraz obsługi zwrotów i reklamacji.
          </p>

          <section>
            <h2 className="text-xl-semi text-ui-fg-base mb-2">1. Sprzedawca</h2>
            <p>Sprzedawca: {shopConfig.company.name}</p>
            <p>Adres: {shopConfig.company.street}, {shopConfig.company.postalCode} {shopConfig.company.city}</p>
            <p>Kraj: {shopConfig.company.country}</p>
            <p>NIP: {shopConfig.company.nip}</p>
            <p>E-mail: {shopConfig.company.email}</p>
          </section>

          <section>
            <h2 className="text-xl-semi text-ui-fg-base mb-2">2. Zamówienia</h2>
            <p>
              Zamówienia można składać za pośrednictwem sklepu internetowego. Po złożeniu zamówienia klient otrzymuje potwierdzenie na podany adres e-mail.
            </p>
          </section>

          <section>
            <h2 className="text-xl-semi text-ui-fg-base mb-2">3. Dostawa</h2>
            <p>
              Dostępne metody dostawy oraz ich koszty są prezentowane podczas składania zamówienia.
            </p>
          </section>

          <section>
            <h2 className="text-xl-semi text-ui-fg-base mb-2">4. Zwroty i reklamacje</h2>
            <p>
              Klient może dokonać zwrotu produktu lub złożyć reklamację zgodnie z obowiązującymi przepisami prawa oraz zasadami opisanymi w sklepie.
            </p>
          </section>

          <section>
            <h2 className="text-xl-semi text-ui-fg-base mb-2">Aktualizacja dokumentu</h2>
            <p>Data ostatniej aktualizacji: {shopConfig.legal.termsUpdatedAt}</p>
          </section>

          {shopConfig.demo.enabled && (
            <section className="border border-ui-border-base rounded-rounded p-4 bg-ui-bg-subtle">
              <h2 className="text-xl-semi text-ui-fg-base mb-2">{shopConfig.demo.label}</h2>
              <p>{shopConfig.demo.notice}</p>
              <p>
                Przed uruchomieniem produkcyjnego sklepu regulamin powinien zostać dopasowany do faktycznej działalności, sposobu sprzedaży i obsługiwanych metod płatności oraz dostawy.
              </p>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}
