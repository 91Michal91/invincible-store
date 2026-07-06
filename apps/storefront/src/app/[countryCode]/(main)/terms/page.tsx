import { shopConfig } from "@lib/config/shop"

export const metadata = {
  title: "Regulamin",
  description: "Regulamin mini sklepu Invincible Polska.",
}

export default function TermsPage() {
  return (
    <div className="content-container py-12 small:py-16">
      <div className="max-w-4xl">
        <h1 className="txt-xlarge-plus mb-6">Regulamin sklepu</h1>

        <div className="grid gap-8 text-ui-fg-subtle">
          <section>
            <h2 className="txt-large-plus text-ui-fg-base mb-3">
              1. Dane sprzedawcy
            </h2>
            <p>
              Sklep działa pod nazwą {shopConfig.company.name}.
              <br />
              Adres korespondencyjny: {shopConfig.company.street},{" "}
              {shopConfig.company.postalCode} {shopConfig.company.city},{" "}
              {shopConfig.company.country}.
              <br />
              E-mail: {shopConfig.contact.email}
              <br />
              NIP: {shopConfig.company.nip}
            </p>
          </section>

          <section>
            <h2 className="txt-large-plus text-ui-fg-base mb-3">
              2. Charakter sklepu
            </h2>
            <p>
              Sklep Invincible Polska jest mini sklepem internetowym
              prowadzonym przy projekcie społecznościowym Invincible Polska.
              Oferta obejmuje przede wszystkim koszulki, nadruki i limitowane
              dropy.
            </p>
          </section>

          <section>
            <h2 className="txt-large-plus text-ui-fg-base mb-3">
              3. Zamówienia
            </h2>
            <p>
              Zamówienia można składać przez stronę sklepu. Klient powinien
              podać prawdziwe dane potrzebne do realizacji zamówienia, w tym
              adres e-mail oraz dane do dostawy. Potwierdzenie zamówienia jest
              wysyłane na adres e-mail podany podczas zakupu.
            </p>
          </section>

          <section>
            <h2 className="txt-large-plus text-ui-fg-base mb-3">
              4. Ceny i płatności
            </h2>
            <p>
              Ceny produktów są podane w złotych polskich. Koszt dostawy jest
              wskazywany osobno podczas składania zamówienia. Płatności online
              są obsługiwane przez operatora płatności wskazanego w procesie
              składania zamówienia.
            </p>
          </section>

          <section>
            <h2 className="txt-large-plus text-ui-fg-base mb-3">
              5. Dostawa
            </h2>
            <p>
              Dostępne metody dostawy, koszty wysyłki oraz przewidywany czas
              realizacji są widoczne podczas składania zamówienia. Zamówienia
              realizujemy po potwierdzeniu płatności.
            </p>
          </section>

          <section>
            <h2 className="txt-large-plus text-ui-fg-base mb-3">
              6. Zwroty i odstąpienie od umowy
            </h2>
            <p>
              Przy standardowych produktach kupionych przez internet konsument
              może co do zasady odstąpić od umowy w terminie 14 dni od
              otrzymania produktu. Aby zgłosić zwrot, należy napisać na adres{" "}
              {shopConfig.contact.email}.
            </p>
          </section>

          <section>
            <h2 className="txt-large-plus text-ui-fg-base mb-3">
              7. Reklamacje
            </h2>
            <p>
              Reklamacje można zgłaszać mailowo na adres{" "}
              {shopConfig.contact.email}. W zgłoszeniu należy opisać problem i
              podać numer zamówienia. Reklamacje rozpatrujemy zgodnie z
              obowiązującymi przepisami.
            </p>
          </section>

          <section>
            <h2 className="txt-large-plus text-ui-fg-base mb-3">
              8. Prawa autorskie i znaki towarowe
            </h2>
            <p>
              Produkty w sklepie nie są oficjalnym merchandise’em marki
              Invincible, chyba że opis konkretnego produktu wyraźnie stanowi
              inaczej. Nie należy wykorzystywać cudzych grafik, logotypów,
              postaci ani znaków towarowych bez odpowiednich praw lub zgód.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
