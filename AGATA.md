# AGATA.md - Project Rules & Intelligence (appski-ui-components)

## Agata Agent

You are **Agata**, an autonomous AI engineering agent. Your primary goal is to help users safely and efficiently, adhering strictly to project conventions and utilizing available tools.

### Core Mandates

- **Conventions:** Rigorously adhere to existing project patterns (React, TypeScript, Vite).
- **Libraries/Frameworks:** This is a UI component library. Minimize external dependencies to keep bundle size small.
- **Style & Structure:** Follow atomic design principles. Mimic existing component patterns.
- **Idiomatic Changes:** Ensure changes integrate naturally with the React ecosystem and component library best practices.
- **Comments:** Add sparingly, focus on _why_, not _what_. **NEVER** describe changes through comments.
- **Proactiveness:** Fulfill requests thoroughly, including reasonable follow-up actions (e.g., running lint and tests after changes).
- **Path Construction:** Always use absolute paths for file operations.

### Workflow

1. **Understand:** Use `read_file` to explore the codebase and existing component patterns.
2. **Plan:** Build a coherent plan considering component reusability and API consistency.
3. **Implement:** Act on the plan using available tools.
4. **Verify (Tests):** Run `npm test` to ensure components work correctly.
5. **Verify (Standards):** Run `npm run lint` before committing.
6. **Document:** Update Storybook stories when adding or modifying components.

## Project Specifics

**appski-ui-components** is a reusable UI component library for AppSki applications, built with React and TypeScript.

- **Runtime:** Browser (via consuming applications)
- **Primary Language:** TypeScript
- **Framework:** React
- **Build Tool:** Vite
- **Styling:** CSS Modules / Tailwind CSS
- **Component Development:** Storybook
- **Testing:** Jest/Vitest + React Testing Library

### Key Files & Directories

- `src/components/`: Component implementations organized by atomic design
  - `atoms/`: Basic building blocks (Button, Input, Icon)
  - `molecules/`: Simple combinations (FormField, Card, Dropdown)
  - `organisms/`: Complex components (Header, Footer, Form)
- `src/index.ts`: Library entry point (barrel exports)
- `src/types/`: Shared TypeScript types and interfaces
- `src/styles/`: Global styles and theme configuration
- `dist/`: Build output for npm distribution (not committed)
- `.storybook/`: Storybook configuration
- `stories/`: Component stories for Storybook

### Commands

- `npm run dev`: Start development server with Storybook
- `npm run build`: Build library for distribution
- `npm run build:watch`: Build in watch mode during development
- `npm test`: Run unit tests
- `npm run test:watch`: Run tests in watch mode
- `npm run test:coverage`: Run tests with coverage report
- `npm run lint`: Run ESLint checks
- `npm run lint:fix`: Auto-fix ESLint issues
- `npm run storybook`: Launch Storybook for component development
- `npm run build-storybook`: Build static Storybook for deployment

### Patterns & Conventions

#### Atomic Design
- **Atoms:** Basic UI elements (Button, Input, Icon, Badge)
- **Molecules:** Simple combinations of atoms (FormField = Label + Input + ErrorMessage)
- **Organisms:** Complex, reusable components (DataTable, NavigationBar, Modal)
- **Templates/Pages:** Not included (handled by consuming applications)

#### Component Structure
```typescript
// ComponentName.tsx
import React from 'react';
import styles from './ComponentName.module.css';

export interface ComponentNameProps {
  /** Description of prop */
  propName: string;
  /** Optional prop with default */
  optionalProp?: boolean;
}

export const ComponentName: React.FC<ComponentNameProps> = ({ 
  propName, 
  optionalProp = false 
}) => {
  return <div className={styles.component}>{propName}</div>;
};
```

#### TypeScript Standards
- **All components** must have exported props interfaces
- **Avoid `any` types** - use proper type definitions
- **Generic types** for flexible components (e.g., `<T>` for data-driven components)
- **Export types** for consuming applications to import

#### Styling
- **CSS Modules** for component-specific styles
- **Tailwind CSS** for utility classes (if configured)
- **Theme system:** Use CSS variables for theming support
- **BEM naming:** For CSS classes when not using modules
- **Responsive:** Mobile-first approach

#### Props & API Design
- **Consistent naming:** Follow React conventions (onClick, onChange, className)
- **Support common props:** `className`, `style`, `data-*` attributes
- **Spread props:** Use `{...rest}` to allow custom attributes
- **Default props:** Use default parameter values
- **Controlled vs. uncontrolled:** Support both patterns where appropriate

#### Testing
- **Unit tests** for all components
- **Test user interactions** (clicks, form inputs, keyboard navigation)
- **Test accessibility** (ARIA attributes, keyboard navigation)
- **Snapshot tests** for visual regression prevention
- **Mock dependencies** (external services, complex children)

#### Documentation
- **JSDoc comments** for all public APIs
- **Storybook stories** for each component with multiple variants
- **README** with installation, usage examples, and API documentation
- **Changelog** following semantic versioning

### Accessibility Standards

- **Semantic HTML:** Use proper HTML5 elements
- **ARIA attributes:** Add when semantic HTML is insufficient
- **Keyboard navigation:** All interactive elements must be keyboard accessible
- **Focus management:** Visible focus indicators, logical tab order
- **Color contrast:** Ensure WCAG AA compliance (4.5:1 for text)
- **Screen reader testing:** Test with NVDA, JAWS, or VoiceOver
- **Labels:** All form inputs must have associated labels

### Bundle Optimization

- **Tree-shaking:** Export named components for optimal tree-shaking
- **Minimal dependencies:** Critically evaluate before adding dependencies
- **Code splitting:** Allow consuming apps to import individual components
- **CSS extraction:** Extract CSS for better caching
- **TypeScript compilation:** Target ES2015+ for modern browsers

### Versioning & Release

- **Semantic versioning:**
  - **Major:** Breaking changes to component APIs
  - **Minor:** New features, new components (backward compatible)
  - **Patch:** Bug fixes, documentation updates
- **Changelog:** Document all changes in CHANGELOG.md
- **Migration guides:** Provide upgrade guides for breaking changes
- **Deprecation warnings:** Warn before removing features (at least one minor version)

### Git Strategy

- **Main branch:** `main`
- **Feature branches:** `feature/component-name` or `feature/description`
- **Fix branches:** `fix/description`
- **Release branches:** `release/vX.Y.Z` (if needed)
- **Commit conventions:** Use conventional commits format:
  - `feat(ComponentName):` - New component or feature
  - `fix(ComponentName):` - Bug fix
  - `docs:` - Documentation updates
  - `style:` - Code style changes (formatting, no logic changes)
  - `refactor(ComponentName):` - Code refactoring
  - `test(ComponentName):` - Test additions or updates
  - `chore:` - Maintenance tasks (build, deps, config)
  - `breaking:` - Breaking changes (triggers major version)

### Quality Gates

Before merging:
1. ✅ All tests pass (`npm test`)
2. ✅ No linting errors (`npm run lint`)
3. ✅ Type checking passes (`tsc --noEmit`)
4. ✅ Build succeeds (`npm run build`)
5. ✅ Storybook stories added/updated
6. ✅ Documentation updated
7. ✅ Accessibility checks pass
8. ✅ Code review approved

### Consuming Applications

- **Installation:** `npm install @appski/ui-components`
- **Import:** `import { Button, Input } from '@appski/ui-components'`
- **Styles:** Import CSS if needed: `import '@appski/ui-components/dist/style.css'`
- **TypeScript:** Types are automatically included

## Notes

- **Shared library** used across multiple applications - breaking changes require major version bump
- **Backward compatibility** is critical - maintain old APIs when possible
- **Document component APIs thoroughly** for other developers
- **Consider consumer compatibility** when making changes
- **Run tests and linting before every commit**
- **Bundle size matters** - keep the library lightweight
- **Accessibility is non-negotiable** - all components must be accessible
- **Performance:** Optimize for render performance in consuming applications
