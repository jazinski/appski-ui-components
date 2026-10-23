---
'@blancski/ui': minor
---

Add KanbanBoard and CommentThread — the flagship dogfooding components for the kanban board system (APPSKI-UI-1).

**KanbanBoard**: columns of draggable cards with three ways to move a card — pointer drag (drop indicator + column highlight), keyboard drag (Space to grab, arrows to preview, Space to drop, Escape to cancel), and a per-card "Move card to" menu. All three report the same controlled `onCardMove` event with a ready-to-apply splice index. Cards support labels, member avatar stacks, meta text, and a highlighted (warning ring) state; columns support accent colors and WAI-ARIA list semantics with live card counts.

**CommentThread**: chronological comment list with an inline composer — the core of a card detail view. Own comments right-align with a primary-tinted bubble; Enter submits (Shift+Enter for newline); async submissions drive the button's pending state and only clear the composer once they resolve; failed submits keep the text for retry.

Both components are theme-token only (light/dark automatic), fully localized via `labels`, skeleton-loading states included, and covered by 41 new tests (full suite: 1382 passing).
