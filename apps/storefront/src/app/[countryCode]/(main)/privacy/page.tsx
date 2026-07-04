import { shopConfig } from "@lib/config/shop"

export default function PrivacyPage() {
  return (
    <div className="content-container py-12">
      <div className="max-w-3xl">
        <h1 className="text-3xl-semi mb-6">Polityka prywatności</h1>

        <div className="prose prose-sm text-ui-fg-subtle space-y-4">
          <p>
            Niniejsza polityka prywatności opisuje zasady przetwarzania danych osobowych klientów sklepu {shopConfig.store.name}.
          </p>

          <section>
            <h2 className="text-xl-semi text-ui-fg-base mb-2">Administrator danych</h2>
            <p>Administratorem danych jest {shopConfig.company.name}.</p>
            <p>Adres: {shopConfig.company.street}, {shopConfig.company.postalCode} {shopConfig.company.city}</p>
            <p>Kraj: {shopConfig.company.country}</p>
            <p>E-mail: {shopConfig.company.email}</p>
          </section>

          <section>
            <h2 className="text-xl-semi text-ui-fg-base mb-2">Zakres danych</h2>
            <p>
              Sklep może przetwarzać dane potrzebne do obsługi zamówień, takie jak imię i nazwisko, adres dostawy, adres e-mail, numer telefonu, dane płatności oraz historia zamówień.
            </p>
          </section>

          <section>
            <h2 className="text-xl-semi text-ui-fg-base mb-2">Cel przetwarzania</h2>
            <p>
              Dane są przetwarzane w celu realizacji zamówień, obsługi płatności, dostawy produktów, kontaktu z klientem, obsługi zwrotów, reklamacji oraz prowadzenia dokumentacji sprzedaży.
            </p>
          </section>

          <section>
            <h2 className="text-xl-semi text-ui-fg-base mb-2">Aktualizacja dokumentu</h2>
            <p>Data ostatniej aktualizacji: {shopConfig.legal.privacyPolicyUpdatedAt}</p>
          </section>

          {shopConfig.demo.enabled && (
            <section className="border border-ui-border-base rounded-rounded p-4 bg-ui-bg-subtle">
              <h2 className="text-xl-semi text-ui-fg-base mb-2">{shopConfig.demo.label}</h2>
              <p>{shopConfig.demo.notice}</p>
              <p>
                Przed uruchomieniem produkcyjnego sklepu polityka prywatności powinna zostać dostosowana do faktycznego sposobu działania firmy.
              </p>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}
