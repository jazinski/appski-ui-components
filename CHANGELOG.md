# Changelog

All notable changes to @blancski/ui will be documented in this file.

## 0.2.0

### Minor Changes

- [#58](https://github.com/jazinski/appski-ui-components/pull/58) [`4500e34`](https://github.com/jazinski/appski-ui-components/commit/4500e345bc04fd4d8bc852318f7da28ced8ced56) Thanks [@cjazinski](https://github.com/cjazinski)! - UX audit fixes: add pointer-down press feedback (`active:scale` + 100ms ease-out, reduced-motion aware) to Button, DropdownMenuItem, TabsTrigger and pagination buttons; make Dialog enter/exit animations actually work by importing `tw-animate-css` in the styles entry and keeping content mounted briefly on close so `animate-out` plays; wire `aria-labelledby` to the DialogTitle id, focus the dialog on open with a content fallback (`tabIndex={-1}`); ensure only the top-most stacked dialog closes on Escape (module-level dialog stack); give the Dialog close (✕) button a visible hover (`bg-muted/60`) and focus ring.

- [#55](https://github.com/jazinski/appski-ui-components/pull/55) [`4492fba`](https://github.com/jazinski/appski-ui-components/commit/4492fba836fd144824b086c60946e6405721092c) Thanks [@cjazinski](https://github.com/cjazinski)! - Add KanbanBoard and CommentThread — the flagship dogfooding components for the kanban board system (APPSKI-UI-1).

  **KanbanBoard**: columns of draggable cards with three ways to move a card — pointer drag (drop indicator + column highlight), keyboard drag (Space to grab, arrows to preview, Space to drop, Escape to cancel), and a per-card "Move card to" menu. All three report the same controlled `onCardMove` event with a ready-to-apply splice index. Cards support labels, member avatar stacks, meta text, and a highlighted (warning ring) state; columns support accent colors and WAI-ARIA list semantics with live card counts.

  **CommentThread**: chronological comment list with an inline composer — the core of a card detail view. Own comments right-align with a primary-tinted bubble; Enter submits (Shift+Enter for newline); async submissions drive the button's pending state and only clear the composer once they resolve; failed submits keep the text for retry.

  Both components are theme-token only (light/dark automatic), fully localized via `labels`, skeleton-loading states included, and covered by 41 new tests (full suite: 1382 passing).

- [#56](https://github.com/jazinski/appski-ui-components/pull/56) [`6e78e6b`](https://github.com/jazinski/appski-ui-components/commit/6e78e6b7a4336bf5ad6c70db7efc3602b12ab037) Thanks [@cjazinski](https://github.com/cjazinski)! - Add Chip, TagInput, and FiltersBar — the kanban dogfooding follow-ups (APPSKI-UI-1, closes [#143](https://github.com/jazinski/appski-ui-components/issues/143) and [#144](https://github.com/jazinski/appski-ui-components/issues/144) in the appski-ui-components project tracker).

  **Chip**: a compact removable token, the visual unit for tags and active filters. Seven token-only variants (default/primary/success/warning/destructive/info/outline), an accessible "Remove <chip>" affordance when removable, and a toggle-button mode for click-to-filter chips. Rendered as a span wrapper so the label button and remove control are siblings (valid HTML even when both are present).

  **TagInput**: tokenized tag entry — the controlled counterpart of Chip. Typeahead listbox with keyboard navigation (ArrowUp/Down, Enter to pick, Tab completes the highlighted suggestion), Enter or comma commits, Backspace on an empty input removes the last tag, and a dangling typed tag is committed on blur so nothing is silently lost. Duplicates are rejected by default and `maxTags` skips adds past the cap — both surface as a polite hint tied to the field via aria-describedby. Suggestions listbox anchors to the field wrapper (relative) so it overlays rather than inlining.

  **FiltersBar**: the active-filter toolbar for above a DataTable or KanbanBoard. Filter menus on the left (each reflects its current value on the trigger and resets via "Any"), removable chips for active filters, saved views with the active one highlighted, optional save-current-view (only rendered when an `onSaveView` handler is wired — the bar never shows a control it can't drive), clear-all, and a trailing children slot for result counts. Fully controlled and data-driven; role=toolbar with an accessible label.

  All three are theme-token only (light and dark mode automatic), localizable via `labels` props, and covered by 41 new tests.

- [#57](https://github.com/jazinski/appski-ui-components/pull/57) [`f0fac9c`](https://github.com/jazinski/appski-ui-components/commit/f0fac9ce3c99784ec3d7e1fd87a42c7807032278) Thanks [@cjazinski](https://github.com/cjazinski)! - Add Timeline (ActivityFeed) — vertical activity feed with per-event markers (Lucide icon + tone accent: default/info/success/warning/danger), optional actor avatar + name, timestamps (Date objects participate in automatic day grouping with Today/Yesterday/weekday headers; strings render as-is), preformatted-string support, skeleton and empty states, and paginated loading via explicit load-more button (LoadingButton with pending state) or automatic IntersectionObserver infinite scroll. Optional `onEventClick` renders events as buttons reporting the full event payload; `locale` + `labels` cover localization; WAI-ARIA list semantics with aria-busy and a polite live region for page fetches (APPSKI-UI-61, restores the component lost in the UI-17 merge).

- [#53](https://github.com/jazinski/appski-ui-components/pull/53) [`2ef0816`](https://github.com/jazinski/appski-ui-components/commit/2ef081625777bc449b54d8055fab5522dbfe5ec3) Thanks [@cjazinski](https://github.com/cjazinski)! - Rebrand appski → blancski across the package, Storybook, stories, and docs, and ship a new default **glacier** palette (glacier-cyan primary on arctic slate, WCAG 2.1 AA verified). The previous default is available as the `indigo-slate` palette. Package name changes from `@appski/ui` to `@blancski/ui` — update imports when upgrading. Infra identifiers (repo URL, `ui.blancski.com`, docker image, deploy paths) are unchanged for now.

### Patch Changes

- [#53](https://github.com/jazinski/appski-ui-components/pull/53) [`2ef0816`](https://github.com/jazinski/appski-ui-components/commit/2ef081625777bc449b54d8055fab5522dbfe5ec3) Thanks [@cjazinski](https://github.com/cjazinski)! - Fix CI: docker/deploy jobs were gated on the removed `main` branch (now `master`), correct Docker image name in publish workflow, and add changesets for semantic versioning with an automated Version Packages PR flow.

- [#60](https://github.com/jazinski/appski-ui-components/pull/60) [`920ec6f`](https://github.com/jazinski/appski-ui-components/commit/920ec6f7df2435522ca8fb135f06e7fc9fd0af2d) Thanks [@cjazinski](https://github.com/cjazinski)! - Dialog initial focus no longer loses the mount race: the single-rAF deferral could fire before React committed the dialog content (ref still null, focus silently skipped). Focus now runs from the content ref callback at commit time, with a frame-capped rAF retry (≤60 frames) as a safety net. Initial focus also yields when focus is already inside the dialog (e.g. React autoFocus inputs).

- [#59](https://github.com/jazinski/appski-ui-components/pull/59) [`0f949ee`](https://github.com/jazinski/appski-ui-components/commit/0f949eef628ff56428f95747c2ce3d74708b46a9) Thanks [@cjazinski](https://github.com/cjazinski)! - Fix Dialog initial focus: focus now reliably lands inside the dialog on open (the portal mounts content one frame after `open`, which previously left `activeElement` on the trigger). `DialogContent` gains `autoFocusFirst` (default true — focuses first focusable element, falling back to the content container) and `initialFocusRef` (override); elements with a native `autofocus` attribute always win.

All notable changes to @blancski/ui will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- **Major Dependency Upgrades** (2025-01-20):
  - Upgraded React from ^18.3.1 to ^19.0.0 (dev dependencies)
  - Upgraded React DOM from ^18.3.1 to ^19.0.0 (dev dependencies)
  - Upgraded @types/react from ^18.3.17 to ^19.0.0
  - Upgraded @types/react-dom from ^18.3.5 to ^19.0.0
  - Upgraded Zod from ^3.24.1 to ^4.0.0 (production dependency)
  - Updated peerDependencies to support React 19 (`^18.0.0 || ^19.0.0`)
- **Build Tools** (2025-01-18):
  - Upgraded Vite from ^6.0.6 to ^6.4.1 (security patch, performance improvements)
  - Upgraded @vitejs/plugin-react from ^4.3.4 to ^4.7.0 (React 19 compatibility, faster HMR)
  - Upgraded Vitest from ^2.1.8 to ^2.1.9 (bug fixes, coverage improvements)
  - Added @vitest/ui ^2.1.9 for visual test debugging
  - Fixed @vitest/coverage-v8 version to use caret (^2.1.9) for consistency
- Updated test scripts to use `npx vitest` for better package manager compatibility

### Added

- Enhanced README.md with complete component list (46 components) organized by
  category
- Added comprehensive usage examples for common patterns
- Created CONTRIBUTING.md with detailed contribution guidelines
- Created DEPENDENCY-UPDATE-LOG.md to track dependency version history
- Added installation instructions for GitHub-based distribution
- React 19 compatibility support for consuming applications

### Fixed

- Applied code formatting fixes from linter for consistency
- Resolved 9 ESLint errors in confirm-dialog files (promise handling)
- Added void operator for async onClick handlers
- Fixed unused Story parameters in decorator functions
- Removed border from transparent variant in PageHeader
- Prevented loading prop from being passed to DOM element

### Breaking Changes

**None for consumers** - The library maintains backward compatibility with both React 18 and React 19 through flexible peerDependencies. Projects can continue using React 18 or upgrade to React 19 without changes to this library.

**Development environment** now requires React 19+ tooling for contributors.

## [0.1.6] - 2026-01-29

### Added

- **Comprehensive Storybook Stories** - Added 102 new stories across 8
  components:
  - Modal Footer (10 stories)
  - Skeleton Loader (13 stories with 6 variants)
  - Tooltip (10 stories)
  - View Mode Toggle (8 stories)
  - Confirm Dialog (26 stories)
  - Connection Status (8 stories)
  - Error State (13 stories)
  - Loading Button (14 stories)
- Added real-world usage examples for all documented components
- Total: **200+ Storybook stories** across 46 components

### Fixed

- Resolved 9 ESLint errors in confirm-dialog files (promise handling)
- Added void operator for async onClick handlers
- Fixed unused Story parameters in decorator functions
- Removed border from transparent variant in PageHeader
- Prevented loading prop from being passed to DOM element

### Testing

- All **900 tests passing**
- Zero linting errors
- Zero TypeScript errors
- Complete test coverage for all components

## [0.1.5] - 2026-01-27

### Added

- **MetricCard Component** - Enhanced with comprehensive tests and loading
  states
- **EmptyState Component** - Added CVA variants and Storybook stories
- **DataTable Component** - Added comprehensive tests with 26 test cases

### Fixed

- Removed non-null assertions from DataTable tests for type safety
- Replaced `any` type with explicit LinkComponent props type
- Resolved all test failures across new components

### Changed

- Enhanced ConfirmDialog and PageHeader with advanced features
- Improved component type safety throughout

## [0.1.4] - 2026-01-25

### Added

- **AppShell Component** - Application layout wrapper with header and sidebar
- **Sidebar Component** - Collapsible sidebar navigation with collapse
  functionality
- **UserMenu Component** - User account dropdown menu
- **MainNav Component** - Primary navigation bar
- **SearchBar Component** - Search input with autocomplete support
- **HybridEditor Component** - Rich text editor with Lexical and Monaco support
  - Markdown and rich text modes
  - Syntax highlighting with Monaco
  - Lazy loading for performance
  - 38 comprehensive tests

### Fixed

- HybridEditor now properly updates when value prop changes (file switching)
- Prevent content loss when toggling HybridEditor modes
- Reset isInitialized on mode switch to prevent data loss
- Improved markdown heading visibility in dark mode Monaco theme
- Resolved ESLint unsafe-call error in Monaco beforeMount handler
- Added explicit dark mode text colors to Lexical editor theme

### Performance

- Lazy load Monaco editor to reduce initial bundle size

## [0.1.3] - 2026-01-24

### Added

- **9 New Components** with stories and tests:
  - Tabs - Tabbed interfaces
  - Pagination - Page navigation
  - Code Block - Syntax-highlighted code display
  - Toast - Notification system
  - Combobox - Autocomplete combo box
  - Progress - Progress bars and indicators
  - Slider - Range slider with multiple thumbs
  - Popover - Floating popovers
  - Label - Accessible form labels

### Fixed

- Resolved all 23 test failures in new components
- Fixed all ESLint errors in new components
- Removed unused imports from toast test file
- Added accessible labels to form controls for a11y compliance

### Changed

- Card component now includes status variant for active/inactive states

## [0.1.2] - 2026-01-23

### Added

- **ConfirmDialog Component** - Modal confirmation dialogs with variants
  - Danger, warning, info, and default variants
  - Hook-based API: `useConfirmDialog()`
  - Async confirmation support
- **DataTable Component** - Replaced custom table with TanStack Table
  - Sorting, filtering, pagination
  - Column visibility controls
  - Row selection
  - Responsive design
- **Tooltip Component** - Exported and fully integrated
- Button component now supports `icon-ghost` and `toggle` variants

### Fixed

- Resolved linting errors in DataTable stories
- Fixed Select component to support both `children` and `options` prop patterns
- Improved dropdown option visibility in dark mode
- Used semantic text-foreground colors for better dark mode support
- Removed duplicate sort icons from DataTable header rendering

## [0.1.1] - 2026-01-22

### Added

- Initial component library with 30+ components
- Tailwind CSS v4 integration
- Dark mode support for all components
- Comprehensive TypeScript types
- Storybook documentation
- Vitest test setup

### Components Included

- Form components: Button, Input, Textarea, Checkbox, Radio Group, Select,
  Switch
- Feedback components: Alert, Spinner, Badge, Avatar, Status Indicator
- Display components: Card, Separator, Accordion
- Layout components: Dialog, Breadcrumb, Dropdown
- Advanced components: Form with validation

## [0.1.0] - 2026-01-20

### Added

- Initial project setup
- Build configuration with Vite
- TypeScript configuration
- ESLint and Prettier setup
- Storybook configuration
- Testing setup with Vitest and Testing Library
- CI/CD pipeline with GitHub Actions

---

## Release Statistics

### Current (v0.1.6)

- **Components**: 46 production-ready components
- **Tests**: 900+ passing tests
- **Stories**: 200+ Storybook stories
- **Code Quality**: 0 lint errors, 0 type errors
- **Coverage**: 100% component test coverage
- **Documentation**: Complete Storybook documentation
- **React Support**: v18 and v19 (dual compatibility)

### Distribution

- **Source**: GitHub repository
- **Installation**: `bun add github:jazinski/appski-ui-components`
- **Storybook**: https://ui.blancski.com

---

## Upcoming

### Planned Features

- [ ] Publish to npm registry
- [ ] Add visual regression testing (Chromatic/Percy)
- [ ] Bundle size monitoring
- [ ] Performance benchmarks
- [ ] Demo application
- [ ] Component migration guide
- [ ] Automated dependency updates

### Component Roadmap

All core components complete! Future additions will be based on user feedback
and requests.

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.

## License

MIT © Appski
