# Backup

Backup sklepu powinien obejmować:

- kod aplikacji,
- bazę PostgreSQL,
- konfigurację środowiska,
- pliki uploadów, jeśli sklep będzie ich używał,
- dokumentację wdrożenia.

## Backup kodu lokalnie

Przykład:

tar -czf shop-template-checkpoint-$(date +%F-%H%M).tar.gz \
  --exclude='*/node_modules' \
  --exclude='*/.next' \
  --exclude='*/dist' \
  --exclude='*/build' \
  --exclude='*/.env' \
  --exclude='*/.env.*' \
  invincible-shop

## Backup bazy PostgreSQL

Docelowo na produkcji będziemy używać pg_dump.

Każdy sklep klienta powinien mieć osobny backup bazy.
