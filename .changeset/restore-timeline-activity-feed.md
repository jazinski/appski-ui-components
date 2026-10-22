---
'@blancski/ui': minor
---

Add Timeline (ActivityFeed) — vertical activity feed with per-event markers (Lucide icon + tone accent: default/info/success/warning/danger), optional actor avatar + name, timestamps (Date objects participate in automatic day grouping with Today/Yesterday/weekday headers; strings render as-is), preformatted-string support, skeleton and empty states, and paginated loading via explicit load-more button (LoadingButton with pending state) or automatic IntersectionObserver infinite scroll. Optional `onEventClick` renders events as buttons reporting the full event payload; `locale` + `labels` cover localization; WAI-ARIA list semantics with aria-busy and a polite live region for page fetches (APPSKI-UI-61, restores the component lost in the UI-17 merge).
