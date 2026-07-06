import { shopConfig } from "@lib/config/shop"

export const metadata = {
  title: "Zwroty i wymiany",
  description: "Zwroty, wymiany i reklamacje w mini sklepie Invincible Polska.",
}

export default function ReturnsExchangesPage() {
  return (
    <div className="content-container py-12 small:py-16">
      <div className="max-w-3xl">
        <h1 className="txt-xlarge-plus mb-6">Zwroty i wymiany</h1>

        <div className="grid gap-8 text-ui-fg-subtle">
          <section>
            <h2 className="txt-large-plus text-ui-fg-base mb-3">
              Jak zgłosić zwrot lub reklamację?
            </h2>
            <p>
              Napisz do nas na adres{" "}
              <a
                className="hover:text-ui-fg-base"
                href={`mailto:${shopConfig.contact.email}`}
              >
                {shopConfig.contact.email}
              </a>
              . W wiadomości podaj numer zamówienia, adres e-mail użyty przy
              zakupie oraz krótki opis sprawy.
            </p>
          </section>

          <section>
            <h2 className="txt-large-plus text-ui-fg-base mb-3">Zwroty</h2>
            <p>
              Przy standardowych produktach kupionych przez internet konsument
              może co do zasady odstąpić od umowy w terminie 14 dni od
              otrzymania produktu. Produkt powinien zostać zwrócony w stanie
              niepogorszonym ponad to, co było konieczne do sprawdzenia jego
              charakteru, cech i funkcjonowania.
            </p>
          </section>

          <section>
            <h2 className="txt-large-plus text-ui-fg-base mb-3">
              Produkty wykonywane na zamówienie
            </h2>
            <p>
              Jeżeli produkt jest wykonywany według indywidualnej specyfikacji
              klienta lub jest wyraźnie personalizowany, prawo odstąpienia od
              umowy może nie przysługiwać. Informacja o takim ograniczeniu
              będzie podana przy konkretnym produkcie lub w procesie zamówienia.
            </p>
          </section>

          <section>
            <h2 className="txt-large-plus text-ui-fg-base mb-3">
              Adres do zwrotów
            </h2>
            <p>
              {shopConfig.company.name}
              <br />
              {shopConfig.company.street}
              <br />
              {shopConfig.company.postalCode} {shopConfig.company.city}
              <br />
              {shopConfig.company.country}
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
