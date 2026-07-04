#!/usr/bin/env bash
set -euo pipefail

if [ $# -lt 1 ]; then
  echo "Użycie:"
  echo "  npm run restore:db -- /sciezka/do/backupu.sql"
  exit 1
fi

BACKUP_FILE="$1"

if [ ! -f "$BACKUP_FILE" ]; then
  echo "Błąd: plik backupu nie istnieje:"
  echo "$BACKUP_FILE"
  exit 1
fi

DB_CONTAINER="${DB_CONTAINER:-invincible-shop-postgres}"
DB_USER="${DB_USER:-medusa_user}"
DB_NAME="${DB_NAME:-medusa-invincible-shop}"

if ! docker ps --format '{{.Names}}' | grep -qx "$DB_CONTAINER"; then
  echo "Błąd: kontener bazy nie działa: $DB_CONTAINER"
  echo "Uruchom: docker start $DB_CONTAINER"
  exit 1
fi

echo "UWAGA: zaraz przywrócisz bazę z pliku:"
echo "$BACKUP_FILE"
echo
echo "Baza docelowa:"
echo "$DB_NAME"
echo
read -p "Wpisz RESTORE, aby kontynuować: " CONFIRM

if [ "$CONFIRM" != "RESTORE" ]; then
  echo "Przerwano restore."
  exit 1
fi

cat "$BACKUP_FILE" | docker exec -i "$DB_CONTAINER" psql \
  -U "$DB_USER" \
  -d "$DB_NAME"

echo "Restore bazy zakończony."
