import { shopConfig } from "@lib/config/shop"

export default function ReturnsExchangesPage() {
  return (
    <div className="content-container py-12">
      <div className="max-w-3xl">
        <h1 className="text-3xl-semi mb-6">Zwroty i wymiany</h1>

        <div className="prose prose-sm text-ui-fg-subtle space-y-4">
          <p>
            Na tej stronie znajdziesz informacje dotyczące zwrotów, wymiany produktów oraz reklamacji w sklepie {shopConfig.store.name}.
          </p>

          <section>
            <h2 className="text-xl-semi text-ui-fg-base mb-2">Zwrot produktu</h2>
            <p>
              Aby rozpocząć zwrot, skontaktuj się z obsługą sklepu i podaj numer zamówienia oraz dane potrzebne do identyfikacji zakupu.
            </p>
          </section>

          <section>
            <h2 className="text-xl-semi text-ui-fg-base mb-2">Wymiana produktu</h2>
            <p>
              Wymiana produktu jest możliwa zgodnie z dostępnością asortymentu oraz zasadami opisanymi w regulaminie sklepu.
            </p>
          </section>

          <section>
            <h2 className="text-xl-semi text-ui-fg-base mb-2">Kontakt</h2>
            <p>E-mail: {shopConfig.contact.email}</p>
            <p>Telefon: {shopConfig.contact.phone}</p>
          </section>

          {shopConfig.demo.enabled && (
            <section className="border border-ui-border-base rounded-rounded p-4 bg-ui-bg-subtle">
              <h2 className="text-xl-semi text-ui-fg-base mb-2">{shopConfig.demo.label}</h2>
              <p>{shopConfig.demo.notice}</p>
              <p>
                W produkcyjnej wersji sklepu zasady zwrotów i wymian należy dopasować do regulaminu sprzedaży oraz faktycznego procesu obsługi klienta.
              </p>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}
