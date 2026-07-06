import { shopConfig } from "@lib/config/shop"

export const metadata = {
  title: "O sklepie",
  description: "O mini sklepie Invincible Polska.",
}

export default function AboutPage() {
  return (
    <div className="content-container py-12 small:py-16">
      <div className="max-w-3xl">
        <h1 className="txt-xlarge-plus mb-6">O sklepie</h1>

        <div className="grid gap-6 text-ui-fg-subtle">
          <p>
            {shopConfig.store.name} to mini sklep tworzony przy projekcie
            Invincible Polska. Na start skupiamy się na koszulkach, nadrukach
            i krótkich limitowanych dropach.
          </p>

          <p>
            Sklep powstaje z myślą o społeczności fanów. Oferta będzie
            rozwijana etapami, a najważniejsze na starcie są proste zakupy,
            jasny kontakt i sprawna obsługa zamówień.
          </p>

          <p>
            Produkty widoczne w sklepie nie są oficjalnym merchandise’em marki
            Invincible, chyba że opis konkretnego produktu wyraźnie stanowi
            inaczej. Sklep działa jako niezależny mini sklep społecznościowy.
          </p>
        </div>
      </div>
    </div>
  )
}
