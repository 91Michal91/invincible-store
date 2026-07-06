import { shopConfig } from "@lib/config/shop"

export const metadata = {
  title: "Kontakt",
  description: "Kontakt z mini sklepem Invincible Polska.",
}

export default function ContactPage() {
  return (
    <div className="content-container py-12 small:py-16">
      <div className="max-w-3xl">
        <h1 className="txt-xlarge-plus mb-6">Kontakt</h1>

        <p className="txt-medium text-ui-fg-subtle mb-8">
          W sprawach zamówień, zwrotów, reklamacji oraz współpracy prosimy o
          kontakt mailowy. Obsługa sklepu Invincible Polska odbywa się przede
          wszystkim przez e-mail.
        </p>

        <div className="grid gap-8">
          <section>
            <h2 className="txt-large-plus mb-3">Dane kontaktowe</h2>
            <ul className="grid gap-2 text-ui-fg-subtle">
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
            <h2 className="txt-large-plus mb-3">Adres korespondencyjny</h2>
            <p className="text-ui-fg-subtle">
              {shopConfig.company.name}
              <br />
              {shopConfig.company.street}
              <br />
              {shopConfig.company.postalCode} {shopConfig.company.city}
              <br />
              {shopConfig.company.country}
            </p>
          </section>

          <section>
            <h2 className="txt-large-plus mb-3">Dane sprzedawcy</h2>
            <ul className="grid gap-2 text-ui-fg-subtle">
              <li>
                <strong className="text-ui-fg-base">Nazwa:</strong>{" "}
                {shopConfig.company.name}
              </li>
              <li>
                <strong className="text-ui-fg-base">NIP:</strong>{" "}
                {shopConfig.company.nip}
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
