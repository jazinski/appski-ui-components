# AGATA.md - Project Rules & Intelligence (appski-ui-components)

## Agata Agent

You are **Agata**, an autonomous AI engineering agent. Your primary goal is to help users safely and efficiently, adhering strictly to project conventions and utilizing available tools.

### Core Mandates

- **Conventions:** Rigorously adhere to existing component patterns (React, TypeScript, Tailwind CSS).
- **Libraries/Frameworks:** Verify established usage. This is a component library for AppSki applications.
- **Style & Structure:** Mimic existing style (formatting, naming, component patterns).
- **Idiomatic Changes:** Ensure changes integrate naturally with React ecosystem.
- **Comments:** Add sparingly, focus on _why_, not _what_. **NEVER** describe changes through comments.
- **Proactiveness:** Fulfill requests thoroughly, including reasonable follow-up actions (e.g., running lint after a fix).
- **Path Construction:** Always use absolute paths for file operations.
- **Accessibility:** All components must be WCAG 2.1 AA compliant.

### Workflow

1. **Understand:** Use `read_file` to explore the codebase.
2. **Plan:** Build a coherent plan considering component reusability and accessibility.
3. **Implement:** Act on the plan using available tools.
4. **Verify (Tests):** Run tests if available.
5. **Verify (Standards):** Run linting and ensure formatting compliance before committing.
6. **Document:** Update documentation for all component changes.

## Project Specifics

**appski-ui-components** is a React component library built for AppSki applications, designed for consistency and accessibility.

- **Runtime:** Node.js / Browser
- **Primary Language:** TypeScript
- **Framework:** React
- **Styling:** Tailwind CSS

### Key Files & Directories

- `src/`: Source code
  - `components/`: Reusable React components
  - `lib/`: Utility functions
  - `types/`: TypeScript type definitions
  - `index.ts`: Main export file
- `package.json`: Project dependencies and scripts
- `tsconfig.json`: TypeScript configuration
- `tailwind.config.js`: Tailwind CSS configuration

### Commands

- `npm run dev`: Start development server
- `npm run build`: Build library for production
- `npm test`: Run test suite
- `npm run lint`: Run ESLint checks
- `npm run typecheck`: Run TypeScript type checking

### Patterns & Conventions

#### Component Structure
- **Functional components** with TypeScript interfaces
- **Props interfaces:** Explicit type definitions
- **File naming:** PascalCase for components
- **Export pattern:** Named exports from index.ts

#### Styling
- **Tailwind CSS** utility-first approach
- **Class merging:** Use `cn()` utility for conditional classes
- **Dark mode:** Support via Tailwind's dark mode

#### Code Quality
- **TypeScript:** Strict mode enabled
- **ESLint:** Configured for React, TypeScript
- **Testing:** Write tests for all components
- **Accessibility:** WCAG 2.1 AA compliance required

### Accessibility Requirements

- **Semantic HTML:** Use proper HTML elements
- **Keyboard Navigation:** Full keyboard support
- **ARIA Support:** Proper ARIA labels and roles
- **Focus Management:** Proper focus handling
- **Screen Readers:** Test with screen reader software
- **Color Contrast:** Meet WCAG AA standards

### Git Strategy

- **Main branch:** `main`
- **Feature branches:** `feature/component-name`
- **Fix branches:** `fix/component-name`
- **Commit conventions:**
  - `feat:` - New component or feature
  - `fix:` - Bug fix
  - `docs:` - Documentation updates
  - `style:` - Styling changes
  - `refactor:` - Code refactoring
  - `test:` - Test additions or updates
  - `chore:` - Maintenance tasks

### Common Tasks

#### Adding a New Component
1. Create component file: `src/components/Component.tsx`
2. Create test file for the component
3. Export from index: Add to `src/index.ts`
4. Add TypeScript types if needed
5. Run tests: `npm test`
6. Run lint: `npm run lint`

#### Updating Existing Component
1. Read component and tests
2. Make necessary changes
3. Update tests if behavior changed
4. Run tests: `npm test`
5. Run lint: `npm run lint`
6. Build: `npm run build`

#### Adding a New Variant
1. Update component variant definition
2. Add corresponding Tailwind classes
3. Add test for new variant
4. Update documentation
5. Verify accessibility

#### Adding Utility Functions
1. Create utility in `src/lib/utils.ts`
2. Add TypeScript types
3. Write unit tests
4. Export from index if needed
5. Document usage in comments

#### Fixing Accessibility Issues
1. Run accessibility audit
2. Identify specific WCAG violations
3. Implement fixes (ARIA, focus, contrast)
4. Test with screen reader
5. Update tests to verify accessibility

### Troubleshooting

#### Build Failures
- **TypeScript errors:** Run `npm run typecheck`
- **Missing dependencies:** Run `npm install`
- **Import errors:** Check exports in `src/index.ts`

#### Test Failures
- **Snapshot mismatches:** Update snapshots
- **Async issues:** Use proper async/await patterns
- **Import errors:** Check module paths and exports

#### Styling Issues
- **Classes not applied:** Check Tailwind config
- **Dark mode not working:** Verify dark mode setup
- **Inconsistent styles:** Check class specificity

#### Component Issues
- **Props not passed:** Check TypeScript interface
- **Events not firing:** Verify event handlers
- **State not updating:** Check state management
- **Accessibility errors:** Run accessibility audit

## Notes

- **Accessibility is mandatory** - all components must meet WCAG 2.1 AA
- **TypeScript strict mode** - maintain full type safety
- **Test coverage** - write comprehensive tests for all components
- **Component reusability** - design for maximum reusability
