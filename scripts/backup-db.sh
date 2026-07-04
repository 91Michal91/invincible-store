#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
WORKSPACE_DIR="$(dirname "$PROJECT_DIR")"
BACKUP_DIR="${BACKUP_DIR:-$WORKSPACE_DIR/backups}"

DB_CONTAINER="${DB_CONTAINER:-invincible-shop-postgres}"
DB_USER="${DB_USER:-medusa_user}"
DB_NAME="${DB_NAME:-medusa-invincible-shop}"
LABEL="${1:-manual}"

TIMESTAMP="$(date +%F-%H%M)"
FILE="$BACKUP_DIR/medusa-${LABEL}-${TIMESTAMP}.sql"

mkdir -p "$BACKUP_DIR"

if ! docker ps --format '{{.Names}}' | grep -qx "$DB_CONTAINER"; then
  echo "Błąd: kontener bazy nie działa: $DB_CONTAINER"
  echo "Uruchom: docker start $DB_CONTAINER"
  exit 1
fi

docker exec "$DB_CONTAINER" pg_dump \
  --clean \
  --if-exists \
  -U "$DB_USER" \
  -d "$DB_NAME" \
  > "$FILE"

echo "Utworzono backup bazy:"
echo "$FILE"
ls -lh "$FILE"
