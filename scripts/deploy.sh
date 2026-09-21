#!/bin/bash
# scripts/deploy.sh for deferless-site. Cloudflare Workers.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "==> build"
npx opennextjs-cloudflare build
echo "==> deploy"
npx opennextjs-cloudflare deploy
echo "==> populate incremental cache"
npx opennextjs-cloudflare populateCache remote
echo "==> verify worker routes"
node scripts/verify-cf.mjs "https://deferless-site.kyisaiah47.workers.dev"
