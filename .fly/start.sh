#!/bin/sh
set -e

mkdir -p $(dirname "$DB_FILENAME")

if [ -f "$DB_FILENAME" ]; then
  echo "Database found, skipping restore."
else
  echo "No database found. Attempting restore from replica..."
  # Allow restore to fail on first boot
  litestream restore -config /etc/litestream.yml "$DB_FILENAME" || echo "No replica found. Creating new database."
fi

echo "Running database migrations..."
node ace migration:run --force

echo "Starting Litestream replication for the application..."
exec litestream replicate -config /etc/litestream.yml -exec "node ./bin/server.js"
