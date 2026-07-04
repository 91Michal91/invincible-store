# Jak używać tego template ponownie

## Status template

To jest lokalny reusable template sklepu internetowego oparty o:

- Medusa Backend/Admin
- Next.js Storefront
- PostgreSQL w Dockerze
- Polski storefront
- Koszyk, checkout, konto klienta, adresy i zamówienia
- Testowy system płatności Medusa
- Skrypty backupu i restore

Ten template jest punktem startowym pod kolejne sklepy, a nie jednorazową stroną.

## Co trafia na GitHub

Na GitHub trafia kod aplikacji, dokumentacja i przykładowe pliki konfiguracyjne:

- README.md
- docs/
- apps/backend/
- apps/storefront/
- scripts/
- .env.example
- apps/backend/.env.template
- apps/storefront/.env.example

Nie trafiają tam prywatne pliki środowiskowe ani dane produkcyjne.

## Co nie trafia na GitHub

Do repozytorium nie wolno wrzucać:

- .env
- .env.local
- haseł
- tokenów
- realnych sekretów
- backupów bazy z danymi klientów
- node_modules
- .next
- .turbo
- .medusa
- plików *.bak
- plików *.tsbuildinfo

## Jak działa baza danych

Baza danych PostgreSQL działa lokalnie w Dockerze.

Kod template jest w GitHubie, ale sama baza nie jest częścią repozytorium.

Dla każdego nowego sklepu należy używać osobnej bazy danych, np.:

- medusa-client-a
- medusa-client-b
- medusa-shop-demo

Nie należy mieszać danych różnych klientów w jednej bazie.

## Ponowne użycie template dla nowego sklepu

Typowy proces:

1. Sklonować repozytorium do nowego folderu.
2. Skopiować pliki env z przykładów.
3. Ustawić nowe wartości środowiskowe.
4. Utworzyć nową bazę PostgreSQL w Dockerze.
5. Uruchomić backend Medusa.
6. Uruchomić migracje/seed.
7. Ustawić region, walutę, dostawy i płatności w Medusa Admin.
8. Uruchomić storefront Next.js.
9. Zmienić nazwę sklepu, teksty, logo, produkty i styl.
10. Przetestować ścieżkę klienta: produkt, koszyk, checkout, konto, zamówienia.

## Ważna zasada

Template to kod i struktura aplikacji.

Baza danych to dane konkretnego sklepu.

Kod można kopiować i rozwijać dla kolejnych klientów, ale baza powinna być osobna dla każdego wdrożenia.

## Lokalny baseline

Aktualny punkt bazowy:

- commit: v1 local reusable Medusa Next template baseline
- tag: v1-template-local-qa-pass

To jest lokalny punkt powrotu po przejściu manualnego QA.
