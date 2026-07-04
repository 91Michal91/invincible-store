#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
WORKSPACE_DIR="$(dirname "$PROJECT_DIR")"
BACKUP_DIR="${BACKUP_DIR:-$WORKSPACE_DIR/backups}"

PROJECT_NAME="$(basename "$PROJECT_DIR")"
LABEL="${1:-manual}"
TIMESTAMP="$(date +%F-%H%M)"
FILE="$BACKUP_DIR/${PROJECT_NAME}-${LABEL}-${TIMESTAMP}.tar.gz"

mkdir -p "$BACKUP_DIR"

cd "$WORKSPACE_DIR"

tar -czf "$FILE" \
  --exclude='*/node_modules' \
  --exclude='*/.next' \
  --exclude='*/.turbo' \
  --exclude='*/dist' \
  --exclude='*/build' \
  --exclude='*/.env' \
  --exclude='*/.env.*' \
  "$PROJECT_NAME"

echo "Utworzono backup projektu:"
echo "$FILE"
ls -lh "$FILE"
