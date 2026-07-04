# Architektura sklepu

Projekt składa się z dwóch głównych aplikacji:

## apps/backend

Medusa Backend oraz Medusa Admin.

Odpowiada za:

- produkty,
- warianty,
- ceny,
- stany magazynowe,
- koszyki,
- zamówienia,
- klientów,
- regiony,
- dostawy,
- płatności,
- panel administracyjny.

## apps/storefront

Next.js Storefront, czyli sklep widoczny dla klienta.

Odpowiada za:

- stronę główną sklepu,
- listę produktów,
- kartę produktu,
- koszyk,
- checkout,
- konto klienta,
- komunikację z Medusa Backend.

## Baza danych

Docelowo PostgreSQL.

Każdy sklep produkcyjny powinien mieć osobną bazę danych.

## Redis

Docelowo Redis dla konfiguracji produkcyjnej Medusa, cache, eventów i elementów infrastruktury.

## Reverse proxy

Na produkcji ruch będzie prowadzony przez Caddy:

- sklep.domena.pl → Next.js Storefront,
- medusa.domena.pl → Medusa Backend / Admin.
