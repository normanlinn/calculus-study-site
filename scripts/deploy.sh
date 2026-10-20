#!/usr/bin/env bash
# Build the static site and publish it to the gh-pages branch (GitHub Pages serves that branch).
set -euo pipefail
cd "$(dirname "$0")/.."
PAGES_BASE_PATH=/calculus-study-site NEXT_TELEMETRY_DISABLED=1 npx next build
touch out/.nojekyll
# keep Vercel from trying to build this branch
cp vercel.json out/vercel.json
tmp=$(mktemp -d)
cp -R out/. "$tmp"
cd "$tmp"
git init -q -b gh-pages
git add -A
git commit -q -m "Deploy site"
git push -f "$(git -C "$OLDPWD" remote get-url origin)" gh-pages
rm -rf "$tmp"
echo "Deployed. Live at https://normanlinn.github.io/calculus-study-site/"
