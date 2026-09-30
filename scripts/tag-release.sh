#!/usr/bin/env bash
# Create the git tag for the current package version (called by changesets/action "publish").
set -euo pipefail
VERSION=$(node -p "require('./package.json').version")
git tag "v${VERSION}"
git push origin "v${VERSION}" --follow-tags 2>/dev/null || git push origin "v${VERSION}"
echo "tagged v${VERSION}"
