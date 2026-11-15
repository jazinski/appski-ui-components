---
"@blancski/ui": patch
---

Release tarballs: attach a CI-built npm tarball to every vX.Y.Z GitHub Release and document it as the install path. A plain `github:` git dependency cannot work (no `dist/`, no `prepare` script) — the README previously instructed exactly that. Also refresh stale component counts (46 → 78).
