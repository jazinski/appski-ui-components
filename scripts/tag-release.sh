#!/usr/bin/env bash
# Create the git tag for the current package version (called by changesets/action "publish").
# Idempotent: changesets/action runs `publish` on EVERY changeset-free master merge,
# not just after a Version Packages merge — a bare `git tag` dies with
# "tag already exists" and reddens the Release workflow on every ordinary PR merge.
set -euo pipefail
VERSION=$(node -p "require('./package.json').version")
if git rev-parse -q --verify "refs/tags/v${VERSION}" >/dev/null 2>&1; then
  echo "tag v${VERSION} already exists — nothing to do"
  exit 0
fi
git tag "v${VERSION}"
git push origin "v${VERSION}" --follow-tags 2>/dev/null || git push origin "v${VERSION}"
echo "tagged v${VERSION}"
