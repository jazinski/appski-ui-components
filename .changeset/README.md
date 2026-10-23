# Changesets

This repo uses [changesets](https://github.com/changesets/changesets) for versioning.

## Workflow

1. While developing, run `bunx changeset` (or `npx changeset`) and answer the prompts.
   This writes a markdown file in `.changeset/` describing the change and its bump type:
   - **patch**: bug fixes (0.1.7 -> 0.1.8)
   - **minor**: new features / new components (0.1.7 -> 0.2.0)
   - **major**: breaking changes (0.1.7 -> 1.0.0)
2. Commit the changeset file with your feature branch/PR.
3. On merge to master, the Release workflow opens a "Version Packages" PR that
   bumps `package.json`, updates CHANGELOG.md, and removes the consumed changesets.
4. Merge that PR to cut a release: the workflow tags `v<version>` and the
   existing `publish-package.yml` builds/tags the Docker image for that version.

Conventional Commit prefixes in PR titles (feat:, fix:, chore:) are still
encouraged, but the changeset file is what drives the version bump.
