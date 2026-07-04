# Jak używać tego template ponownie

## Cel template

Ten projekt jest reusable template sklepu internetowego opartego o Medusa Backend/Admin, Next.js Storefront oraz PostgreSQL w Dockerze.

Nie jest to jednorazowy sklep. To baza, którą można kopiować i dostosowywać pod kolejnych klientów.

## Co jest częścią template

W repozytorium znajduje się:

- kod backendu Medusa,
- kod storefrontu Next.js,
- dokumentacja,
- skrypty backupu i restore,
- przykładowe pliki środowiskowe,
- konfiguracja projektu,
- polski checkout, konto klienta, adresy i zamówienia.

## Co nie jest częścią repozytorium

Do GitHub nie trafiają:

- baza danych PostgreSQL,
- dane klientów,
- zamówienia,
- pliki .env,
- pliki .env.local,
- hasła,
- tokeny,
- Docker volume,
- node_modules,
- .next,
- .turbo,
- .medusa,
- backupy .sql.

## Jak działa baza danych

Baza PostgreSQL działa lokalnie w Dockerze.

Kod aplikacji jest wysyłany na GitHub, ale baza danych nie jest wysyłana razem z kodem.

Dla każdego nowego sklepu należy utworzyć osobną bazę danych, np.:

- medusa-client-one
- medusa-client-two
- medusa-demo-shop

Nie należy używać jednej wspólnej bazy dla wielu klientów.

## Jak używać template przy kolejnym sklepie

Typowy proces:

1. Sklonować repozytorium do nowego folderu.
2. Skopiować pliki env z przykładów.
3. Ustawić nowe zmienne środowiskowe.
4. Utworzyć nową bazę PostgreSQL w Dockerze.
5. Uruchomić backend Medusa.
6. Uruchomić migracje i seed.
7. Skonfigurować region, walutę, dostawy i płatności w Medusa Admin.
8. Uruchomić storefront Next.js.
9. Zmienić nazwę sklepu, teksty, logo, produkty i styl.
10. Przetestować pełną ścieżkę klienta.

## Najważniejsza zasada

Template to kod i struktura aplikacji.

Baza danych to dane konkretnego sklepu.

Kod można używać ponownie, ale baza powinna być osobna dla każdego klienta lub projektu.

## Aktualny baseline

Lokalny punkt bazowy:

- commit: v1 local reusable Medusa Next template baseline
- tag: v1-template-local-qa-pass

Ten punkt przeszedł manualne QA lokalnie.
