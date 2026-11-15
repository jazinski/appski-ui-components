#!/usr/bin/env bash
# Build the npm tarball for the current package version and attach it to the
# vX.Y.Z GitHub Release. Called from the Release workflow after tag-release.
#
# Why: the package is not on a public registry, and a plain `github:` git
# dependency cannot work — `dist/` is gitignored and there is no `prepare`
# script, so consumers would get a package with no build output. Attaching a
# CI-built tarball to each release gives consumers a registry-shaped,
# reproducible install URL:
#   bun add https://github.com/jazinski/appski-ui-components/releases/download/vX.Y.Z/blancski-ui-X.Y.Z.tgz
#
# Idempotent: changesets/action runs `publish` on EVERY changeset-free master
# merge, so this script must be a no-op when the release already exists or the
# tag has not been created yet (e.g. a Release PR was opened instead of merged).
set -euo pipefail

VERSION=$(node -p "require('./package.json').version")
TAG="v${VERSION}"
TGZ="blancski-ui-${VERSION}.tgz"

if ! git rev-parse -q --verify "refs/tags/${TAG}" >/dev/null 2>&1; then
  echo "tag ${TAG} does not exist yet (Release PR not merged) — nothing to attach"
  exit 0
fi

if gh release view "${TAG}" --json assets \
  --jq ".assets[].name" 2>/dev/null | grep -qx "${TGZ}"; then
  echo "release ${TAG} already carries ${TGZ} — nothing to do"
  exit 0
fi

echo "building ${TGZ} from ${TAG}..."
bun run build
npm pack --pack-destination . >/dev/null
test -f "${TGZ}"

NOTES="Install from this release:
\`\`\`bash
bun add https://github.com/jazinski/appski-ui-components/releases/download/${TAG}/${TGZ}
# or
npm install https://github.com/jazinski/appski-ui-components/releases/download/${TAG}/${TGZ}
\`\`\`
"

if gh release view "${TAG}" >/dev/null 2>&1; then
  echo "release ${TAG} exists — uploading ${TGZ}"
  gh release upload "${TAG}" "${TGZ}" --clobber
else
  echo "creating release ${TAG} with ${TGZ}"
  gh release create "${TAG}" "${TGZ}" \
    --title "${TAG}" \
    --notes "${NOTES}" \
    --verify-tag
fi

rm -f "${TGZ}"
echo "attached ${TGZ} to ${TAG}"
