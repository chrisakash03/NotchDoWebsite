#!/usr/bin/env bash
# Serves the site at http://localhost:8080 (override with PORT=3000 ./serve.sh)
set -euo pipefail
cd "$(dirname "$0")"
PORT="${PORT:-8080}"
echo "NotchDo site: http://localhost:${PORT}/"
echo "  Landing: http://localhost:${PORT}/notchdo_landing_page/code.html"
echo "Press Ctrl+C to stop."
exec python3 -m http.server "$PORT"
