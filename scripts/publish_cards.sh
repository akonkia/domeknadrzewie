#!/usr/bin/env bash

# How to use:
# 1. cd "/Users/akonkia/Documents/New project/domeknadrzewie-github"
# 2. bash scripts/publish_cards.sh
# Or with a commit message:
#    bash scripts/publish_cards.sh "Add week 19 card"

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"

cd "${REPO_ROOT}"

bash scripts/update_cards.sh

git add assets/js/cards-data.js
git add materialy/kapiele_miejskie/index.html en/materials/urban-bathing/index.html

if compgen -G "materialy/kapiele_miejskie/*.png" > /dev/null; then
  git add materialy/kapiele_miejskie/*.png
fi

if compgen -G "en/materials/urban-bathing/*.png" > /dev/null; then
  git add en/materials/urban-bathing/*.png
fi

if [ -d "_posts" ]; then
  git add _posts
fi

git reset -- .DS_Store assets/.DS_Store >/dev/null 2>&1 || true

echo
echo "Staged changes:"
git diff --cached --stat
echo
git status --short
echo

if git diff --cached --quiet; then
  echo "No staged changes to commit."
  exit 0
fi

COMMIT_MESSAGE="${1:-}"

if [ -z "${COMMIT_MESSAGE}" ]; then
  read -r -p "Commit message: " COMMIT_MESSAGE
fi

if [ -z "${COMMIT_MESSAGE}" ]; then
  echo "Commit message is required."
  exit 1
fi

git commit -m "${COMMIT_MESSAGE}"

echo
read -r -p "Push to origin/main now? [y/N] " PUSH_NOW

case "${PUSH_NOW}" in
  y|Y|yes|YES)
    git push origin main
    ;;
  *)
    echo "Commit created locally. Push later with: git push origin main"
    ;;
esac
