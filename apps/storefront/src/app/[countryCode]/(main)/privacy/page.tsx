import { shopConfig } from "@lib/config/shop"

export const metadata = {
  title: "Polityka prywatności",
  description: "Polityka prywatności mini sklepu Invincible Polska.",
}

export default function PrivacyPage() {
  return (
    <div className="content-container py-12 small:py-16">
      <div className="max-w-4xl">
        <h1 className="txt-xlarge-plus mb-6">Polityka prywatności</h1>

        <div className="grid gap-8 text-ui-fg-subtle">
          <section>
            <h2 className="txt-large-plus text-ui-fg-base mb-3">
              1. Administrator danych
            </h2>
            <p>
              Administratorem danych osobowych klientów sklepu jest{" "}
              {shopConfig.company.name}. Kontakt w sprawach dotyczących danych
              osobowych: {shopConfig.contact.email}.
            </p>
          </section>

          <section>
            <h2 className="txt-large-plus text-ui-fg-base mb-3">
              2. Jakie dane przetwarzamy?
            </h2>
            <p>
              Sklep może przetwarzać dane potrzebne do obsługi zamówień, takie
              jak imię i nazwisko, adres dostawy, adres e-mail, dane kontaktowe,
              dane płatności, informacje o zamówieniu oraz historia zamówień.
            </p>
          </section>

          <section>
            <h2 className="txt-large-plus text-ui-fg-base mb-3">
              3. Cele przetwarzania danych
            </h2>
            <p>
              Dane są przetwarzane w celu przyjęcia i realizacji zamówienia,
              obsługi płatności, dostawy produktów, kontaktu z klientem,
              obsługi zwrotów i reklamacji oraz prowadzenia dokumentacji
              związanej ze sprzedażą.
            </p>
          </section>

          <section>
            <h2 className="txt-large-plus text-ui-fg-base mb-3">
              4. Operatorzy techniczni
            </h2>
            <p>
              W obsłudze sklepu mogą brać udział zewnętrzni dostawcy usług,
              między innymi dostawcy hostingu, systemu sklepowego, płatności,
              poczty e-mail oraz dostawy. Dane są przekazywane tylko w zakresie
              potrzebnym do realizacji zamówienia lub obsługi sklepu.
            </p>
          </section>

          <section>
            <h2 className="txt-large-plus text-ui-fg-base mb-3">
              5. Kontakt w sprawie danych
            </h2>
            <p>
              W sprawach dotyczących danych osobowych napisz na adres{" "}
              <a
                className="hover:text-ui-fg-base"
                href={`mailto:${shopConfig.contact.email}`}
              >
                {shopConfig.contact.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
