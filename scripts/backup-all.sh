#!/usr/bin/env bash
set -euo pipefail

LABEL="${1:-manual}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

bash "$SCRIPT_DIR/backup-project.sh" "$LABEL"
bash "$SCRIPT_DIR/backup-db.sh" "$LABEL"

echo "Backup projektu i bazy zakończony."
