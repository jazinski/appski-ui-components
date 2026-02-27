# Changelog

All notable changes to @appski/ui will be documented in this file.

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
- **Storybook**: https://ui.appski.me

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
