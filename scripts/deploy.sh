#!/usr/bin/env bash
# Build the static site and publish it to the gh-pages branch (GitHub Pages serves that branch).
set -euo pipefail
cd "$(dirname "$0")/.."
PAGES_BASE_PATH=/calculus-study-site NEXT_TELEMETRY_DISABLED=1 npx next build
touch out/.nojekyll
# keep Vercel from trying to build this branch
cp vercel.json out/vercel.json
# publish under the same identity as the repo's own commits
export GIT_AUTHOR_NAME="$(git config user.name)" GIT_AUTHOR_EMAIL="$(git config user.email)"
export GIT_COMMITTER_NAME="$GIT_AUTHOR_NAME" GIT_COMMITTER_EMAIL="$GIT_AUTHOR_EMAIL"
tmp=$(mktemp -d)
cp -R out/. "$tmp"
cd "$tmp"
git init -q -b gh-pages
git add -A
git commit -q -m "Deploy site"
git push -f "$(git -C "$OLDPWD" remote get-url origin)" gh-pages
rm -rf "$tmp"
echo "Deployed. Live at https://normanlinn.github.io/calculus-study-site/"
