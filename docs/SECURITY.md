# Bezpieczeństwo

## Sekrety

Nie commitujemy:

- .env,
- .env.production,
- haseł,
- kluczy API,
- danych operatora płatności,
- backupów,
- dumpów baz danych.

## Panel admina

Panel Medusa powinien być dodatkowo chroniony na produkcji.

Rekomendacje:

- silne hasło administratora,
- Cloudflare Access albo Basic Auth na Caddy,
- brak publicznych portów bazy danych,
- brak publicznego Redis,
- regularne backupy.

## Płatności

Dane kart i płatności obsługuje operator zewnętrzny.

Strona sklepu nie może przechowywać numerów kart płatniczych.

## Produkcja

Na produkcji wszystkie porty usług wewnętrznych powinny być dostępne tylko lokalnie albo przez sieć Dockera.

Na zewnątrz wystawiamy tylko Caddy.
