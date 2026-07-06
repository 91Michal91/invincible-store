import { shopConfig } from "@lib/config/shop"

export const metadata = {
  title: "Obsługa klienta",
  description: "Obsługa klienta w mini sklepie Invincible Polska.",
}

export default function CustomerServicePage() {
  return (
    <div className="content-container py-12 small:py-16">
      <div className="max-w-3xl">
        <h1 className="txt-xlarge-plus mb-6">Obsługa klienta</h1>

        <div className="grid gap-8 text-ui-fg-subtle">
          <section>
            <p>
              Obsługa klienta sklepu Invincible Polska odbywa się mailowo. W
              wiadomości podaj numer zamówienia, adres e-mail użyty przy
              zakupie oraz krótki opis sprawy.
            </p>
          </section>

          <section>
            <h2 className="txt-large-plus text-ui-fg-base mb-3">Kontakt</h2>
            <ul className="grid gap-2">
              <li>
                <strong className="text-ui-fg-base">E-mail:</strong>{" "}
                <a
                  className="hover:text-ui-fg-base"
                  href={`mailto:${shopConfig.contact.email}`}
                >
                  {shopConfig.contact.email}
                </a>
              </li>
              <li>
                <strong className="text-ui-fg-base">Telefon:</strong>{" "}
                {shopConfig.contact.phone}
              </li>
              <li>
                <strong className="text-ui-fg-base">Godziny obsługi:</strong>{" "}
                {shopConfig.contact.workingHours}
              </li>
            </ul>
          </section>

          <section>
            <h2 className="txt-large-plus text-ui-fg-base mb-3">Dostawa</h2>
            <p>
              Dostępne metody dostawy, koszty wysyłki oraz przewidywany czas
              realizacji są widoczne podczas składania zamówienia. Zamówienia
              realizujemy po potwierdzeniu płatności.
            </p>
          </section>

          <section>
            <h2 className="txt-large-plus text-ui-fg-base mb-3">
              Zwroty i reklamacje
            </h2>
            <p>
              Zwroty, wymiany i reklamacje obsługujemy przez e-mail. Jeśli
              produkt dotarł uszkodzony, jest niezgodny z zamówieniem albo
              chcesz zgłosić zwrot, napisz do nas na adres{" "}
              {shopConfig.contact.email}.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
