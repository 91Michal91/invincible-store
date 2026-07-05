import { shopConfig } from "@lib/config/shop"

export default function AboutPage() {
  return (
    <div className="content-container py-12">
      <div className="max-w-3xl">
        <h1 className="text-3xl-semi mb-6">O sklepie</h1>

        <div className="prose prose-sm text-ui-fg-subtle space-y-4">
          <p>
            {shopConfig.store.name} to nowoczesny sklep internetowy przygotowany z myślą o wygodnych zakupach, przejrzystej prezentacji produktów i sprawnej obsłudze zamówień.
          </p>

          <p>
            Na start skupiamy się na prostym, konkretnym asortymencie: koszulkach i krótkich dropach. Sklep będzie rozwijany etapami razem ze stroną Invincible Polska.
          </p>

          <p>
            To mały sklep startowy, dlatego oferta będzie stopniowo rozbudowywana. Najważniejsze są proste zakupy, jasny kontakt i sprawna obsługa zamówień.
          </p>

          <div className="border border-ui-border-base rounded-rounded p-4">
            <h2 className="text-xl-semi mb-3">Dane firmy</h2>
            <p>Właściciel: {shopConfig.company.name}</p>
            <p>Adres: {shopConfig.company.street}, {shopConfig.company.postalCode} {shopConfig.company.city}</p>
            <p>Kraj: {shopConfig.company.country}</p>
            <p>NIP: {shopConfig.company.nip}</p>
            <p>E-mail: {shopConfig.company.email}</p>
          </div>

          {shopConfig.demo.enabled && (
            <div className="border border-ui-border-base rounded-rounded p-4 bg-ui-bg-subtle">
              <h2 className="text-xl-semi mb-3">{shopConfig.demo.label}</h2>
              <p>{shopConfig.demo.notice}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
