# Invincible Shop Template

Komercyjny template sklepu internetowego oparty o Medusa, Next.js, PostgreSQL i Docker.

Projekt ma służyć jako szablon wielokrotnego użytku do kolejnych sklepów internetowych. Kod techniczny zostaje po angielsku, a widoczny UI klienta jest po polsku.

---

## Cel projektu

Celem jest przygotowanie powtarzalnego template sklepu:

- Medusa backend/admin,
- Next.js storefront,
- PostgreSQL w Dockerze,
- konfiguracja sklepu przez shopConfig i env,
- tryb demo / production,
- polski UI klienta,
- backup i restore,
- manualna checklista QA,
- przygotowanie pod staging i production.

Pierwszym realnym testem produkcyjnym po dopracowaniu template ma być invinciblepolska.pl.

---

## Start lokalny

Uruchom bazę:

    docker start invincible-shop-postgres

Uruchom projekt:

    cd ~/invincible-next/invincible-shop
    npm run dev

Adresy lokalne:

- Storefront: http://localhost:8000/pl
- Store: http://localhost:8000/pl/store
- Cart: http://localhost:8000/pl/cart
- Checkout: http://localhost:8000/pl/checkout
- Account: http://localhost:8000/pl/account
- Admin: http://localhost:9000/app

---

## Baza danych

Docker container:

    invincible-shop-postgres

Poprawna baza danych:

    medusa-invincible-shop

---

## Konfiguracja

Główna konfiguracja sklepu:

    apps/storefront/src/lib/config/shop.ts

Storefront env lokalny:

    apps/storefront/.env.local

Przykład env do repo:

    apps/storefront/.env.example

Nie wrzucać do repo prawdziwych sekretów, tokenów ani plików .env.local.

---

## Tryb demo / production

Storefront obsługuje:

    NEXT_PUBLIC_SHOP_MODE="demo"
    NEXT_PUBLIC_SHOP_MODE="production"

Po zmianie env należy zrestartować dev server.

Gdy Next pokazuje stare wartości po zmianach:

    rm -rf apps/storefront/.next apps/storefront/.turbo .turbo
    npm run dev

---

## Zasada językowa

Kod techniczny zostaje po angielsku:

- funkcje,
- komponenty,
- importy,
- eksporty,
- typy,
- pola Medusy,
- techniczne statusy,
- nazwy API.

Po polsku mogą być:

- teksty widoczne dla klienta,
- label,
- placeholder,
- title,
- aria-label,
- komunikaty błędów,
- dokumentacja dla użytkownika.

Nie robić global replace typu Cart -> Koszyk, Payment -> Płatność, Shipping -> Dostawa.

---

## Backup

Backup projektu:

    npm run backup:project -- nazwa-etapu

Backup bazy:

    npm run backup:db -- nazwa-etapu

Backup wszystkiego:

    npm run backup:all -- nazwa-etapu

Przykład:

    npm run backup:all -- after-readme-template-docs

Backupy trafiają do:

    ~/invincible-next/backups

---

## Restore bazy

Restore jest operacją destrukcyjną. Nie wykonywać bez aktualnego backupu.

Komenda:

    npm run restore:db -- path/to/backup.sql

Skrypt może wymagać wpisania:

    RESTORE

---

## Manual QA

Docelowa checklista powinna powstać w:

    docs/QA.md

Minimalne obszary testów:

- home,
- store,
- product,
- cart,
- checkout,
- account,
- addresses,
- orders,
- order details,
- sesja wygasła,
- mobile,
- desktop.

---

## Seed/reset danych

Docelowo projekt powinien mieć seed/reset danych demo.

Do przygotowania:

    docs/SEED.md

Seed powinien obejmować:

- region Polska,
- PLN,
- metody dostawy,
- metoda płatności demo,
- kategorie,
- produkty demo,
- warianty,
- ceny,
- stock.

Nie resetować bazy bez backupu.

---

## Deployment

Docelowa checklista deploymentu:

    docs/DEPLOYMENT.md

Zakładany kierunek:

- Hetzner VPS,
- Cloudflare,
- Docker Compose,
- reverse proxy,
- HTTPS,
- staging,
- production,
- backupy produkcyjne,
- monitoring,
- rollback.

Nie wystawiać npm run dev jako produkcji.

---

## Najbliższe zadania

1. Dokończyć README.
2. Zrobić backup po README.
3. Dodać docs/QA.md.
4. Dodać helpery formatowania.
5. Przygotować docs/SEED.md.
6. Przygotować docs/DEPLOYMENT.md.

---

## AI continuation notes

Projekt traktować jako komercyjny template wielokrotnego użytku.

Proces pracy:

1. diagnoza,
2. grep/find,
3. backup,
4. mała zmiana,
5. grep sprawdzający,
6. test w przeglądarce,
7. backup projektu i bazy.

Nie tłumaczyć technicznych identyfikatorów Medusy.

Nie prosić o sekrety i nie wklejać wartości .env.local.

