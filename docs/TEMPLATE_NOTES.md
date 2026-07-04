# Shop Template — założenia projektu

Ten projekt jest bazą pod profesjonalny sklep internetowy oparty o:

- Medusa Backend,
- Next.js Storefront,
- PostgreSQL,
- Redis,
- Docker,
- zewnętrzne płatności, docelowo Przelewy24 / BLIK.

Projekt nie jest tworzony wyłącznie pod Invincible Polska. Ma służyć jako uniwersalny szkielet e-commerce, który można później sklonować i dostosować pod różne branże, np.:

- sklep fanowski,
- sklep warzywny,
- sklep lokalny,
- sklep z produktami cyfrowymi,
- sklep z odbiorem osobistym,
- sklep z lokalną dostawą.

## Zasada pracy

Najpierw rozwijamy czysty szkielet sklepu.

Dopiero później tworzymy osobne wersje branżowe:

- invincible-shop,
- warzywniak-shop,
- inny-klient-shop.

Każdy sklep powinien mieć własną bazę danych, własne pliki `.env`, własne produkty, własny branding i własne dane firmy.
