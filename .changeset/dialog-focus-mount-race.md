---
'@blancski/ui': patch
---

Dialog initial focus no longer loses the mount race: the single-rAF deferral could fire before React committed the dialog content (ref still null, focus silently skipped). Focus now runs from the content ref callback at commit time, with a frame-capped rAF retry (≤60 frames) as a safety net. Initial focus also yields when focus is already inside the dialog (e.g. React autoFocus inputs).
