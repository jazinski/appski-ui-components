---
'@blancski/ui': minor
---

Add Chip, TagInput, and FiltersBar — the kanban dogfooding follow-ups (APPSKI-UI-1, closes #143 and #144 in the appski-ui-components project tracker).

**Chip**: a compact removable token, the visual unit for tags and active filters. Seven token-only variants (default/primary/success/warning/destructive/info/outline), an accessible "Remove <chip>" affordance when removable, and a toggle-button mode for click-to-filter chips. Rendered as a span wrapper so the label button and remove control are siblings (valid HTML even when both are present).

**TagInput**: tokenized tag entry — the controlled counterpart of Chip. Typeahead listbox with keyboard navigation (ArrowUp/Down, Enter to pick, Tab completes the highlighted suggestion), Enter or comma commits, Backspace on an empty input removes the last tag, and a dangling typed tag is committed on blur so nothing is silently lost. Duplicates are rejected by default and `maxTags` skips adds past the cap — both surface as a polite hint tied to the field via aria-describedby. Suggestions listbox anchors to the field wrapper (relative) so it overlays rather than inlining.

**FiltersBar**: the active-filter toolbar for above a DataTable or KanbanBoard. Filter menus on the left (each reflects its current value on the trigger and resets via "Any"), removable chips for active filters, saved views with the active one highlighted, optional save-current-view (only rendered when an `onSaveView` handler is wired — the bar never shows a control it can't drive), clear-all, and a trailing children slot for result counts. Fully controlled and data-driven; role=toolbar with an accessible label.

All three are theme-token only (light and dark mode automatic), localizable via `labels` props, and covered by 41 new tests.
