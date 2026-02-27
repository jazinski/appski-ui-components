# Dependency Update Log

## Version 0.1.7 → Next

### Date: 2025-01-18 (Updated 2025-01-20)

### Updated Dependencies

#### Major Upgrades (2025-01-20)
| Package | From | To | Reason |
|---------|------|-----|--------|
| react (dev) | ^18.3.1 | ^19.0.0 | Latest React features, performance improvements |
| react-dom (dev) | ^18.3.1 | ^19.0.0 | React 19 compatibility |
| @types/react (dev) | ^18.3.17 | ^19.0.0 | React 19 TypeScript definitions |
| @types/react-dom (dev) | ^18.3.5 | ^19.0.0 | React 19 DOM definitions |
| zod (prod) | ^3.24.1 | ^4.0.0 | Latest validation features, better TypeScript inference |

#### Core Build Tools (2025-01-18)
| Package | From | To | Reason |
|---------|------|-----|--------|
| vite | ^6.0.6 | ^6.4.1 | Security patch, performance improvements |
| @vitejs/plugin-react | ^4.3.4 | ^4.7.0 | React 19 compatibility, faster HMR |

#### Testing (2025-01-18)
| Package | From | To | Reason |
|---------|------|-----|--------|
| vitest | ^2.1.8 | ^2.1.9 | Bug fixes, coverage improvements |
| @vitest/coverage-v8 | 2.1.9 | ^2.1.9 | Version alignment |
| @vitest/ui | - | ^2.1.9 | Added for visual test debugging |

#### Configuration Changes (2025-01-20)
- **Peer Dependencies**: Updated to allow React 19 (`^18.0.0 || ^19.0.0`)
- **Dev Dependencies**: Migrated all React-related packages to v19
- **Zod**: Updated to v4.0.0 for improved schema validation and TypeScript types

### Testing Verification
- ✅ All existing tests pass with updated Vitest
- ✅ Coverage thresholds maintained (80% across all metrics)
- ✅ jsdom environment working correctly
- ✅ TypeScript compilation successful
- ✅ `npm install` completed with no vulnerabilities
- ✅ Linting passes
- ✅ Formatting applied

### Breaking Changes
**None for consumers** - React 18 and 19 are supported via peerDependencies. Projects using this library can continue using React 18 or upgrade to React 19.

**Internal development** requires React 19+ for development tooling, but production builds remain compatible with both versions.

### Migration Notes
#### For Consumers (No Action Required)
- React 18 projects: Continue using normally
- React 19 projects: Direct compatibility, no configuration changes needed

#### For Contributors
- Install latest dependencies: `npm install`
- All development now targets React 19 APIs
- Zod schemas benefit from improved type inference in v4

### Known Considerations
- **Zod v4**: Some breaking changes in edge cases; review migration guide if using advanced features
- **React 19**: New features (use(), useTransition, useActionState) available but not required
- **Storybook**: Currently on v8.4.7; v9 update pending full evaluation

### Next Planned Updates
- Storybook 9.x compatibility check (Q1 2025)
- Radix UI component updates as released
- Performance benchmarking with React 19

---

## Historical Updates

### Version 0.1.6 → 0.1.7
- Added Tailwind CSS v4 support
- Updated all Radix UI dependencies to latest
- Added Monaco Editor component
- Improved TypeScript strict mode compliance

---

**Update Policy**: Dependencies are reviewed weekly during the audit cycle. Security patches are applied within 24 hours. Major version updates are evaluated quarterly for compatibility and breaking changes.
