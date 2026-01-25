#!/usr/bin/env bash
#
# Inject commit hash into Storybook manager.ts before build
# This modifies the source file, builds, then restores the original
#

set -e

# Get current commit hash
COMMIT_HASH=$(git rev-parse --short HEAD 2>/dev/null || echo "unknown")

# File to modify
MANAGER_FILE=".storybook/manager.ts"

# Create backup
cp "$MANAGER_FILE" "$MANAGER_FILE.bak"

# Replace placeholder with actual commit hash
sed -i "s/__COMMIT_HASH__/$COMMIT_HASH/g" "$MANAGER_FILE"

echo "✅ Injected commit hash: $COMMIT_HASH"

# Trap to restore file on exit (success or failure)
trap "mv '$MANAGER_FILE.bak' '$MANAGER_FILE'" EXIT

# Build Storybook
storybook build "$@"

echo "✅ Storybook built with commit: $COMMIT_HASH"
