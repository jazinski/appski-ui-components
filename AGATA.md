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
- **Styling:** Tailwind CSS v4
- **Component Foundation:** Shadcn/ui patterns
- **Package Manager:** npm

### Key Files & Directories

- `src/`: Source code
  - `components/`: Reusable React components
  - `lib/`: Utility functions
  - `types/`: TypeScript type definitions
  - `index.ts`: Main export file
- `package.json`: Project dependencies and scripts
- `tsconfig.json`: TypeScript configuration
- `tailwind.config.js`: Tailwind CSS configuration
- `README.md`: Component library documentation

### Commands

- `npm run dev`: Start development server
- `npm run build`: Build library for production
- `npm test`: Run test suite
- `npm run lint`: Run ESLint checks
- `npm run typecheck`: Run TypeScript type checking
- `npm run storybook`: Start Storybook development server (if configured)
- `npm run build-storybook`: Build Storybook for production

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
- **Component variants:** Use `cva()` (class-variance-authority) for variant management

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

---

## 🆕 Component Catalog

Below is a comprehensive inventory of available components in the library. This catalog serves as a quick reference for developers using `appski-ui-components`.

### Core Components

#### Button
**File:** `src/components/Button.tsx`  
**Description:** Versatile button component with multiple variants and sizes.

**Variants:**
- `default` - Primary action button
- `destructive` - Dangerous/delete actions
- `outline` - Secondary actions
- `ghost` - Minimal visual weight
- `link` - Text-based link style

**Sizes:** `sm`, `md`, `lg`

**Example:**
```tsx
import { Button } from 'appski-ui-components';

<Button variant="default" size="md">Click Me</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline" disabled>Disabled</Button>
```

---

#### Input
**File:** `src/components/Input.tsx`  
**Description:** Text input field with validation states.

**Props:**
- `type`: Input type (text, email, password, etc.)
- `error`: Boolean for error state
- `disabled`: Boolean for disabled state

**Example:**
```tsx
import { Input } from 'appski-ui-components';

<Input type="email" placeholder="Enter email" />
<Input type="password" error />
```

---

#### Card
**File:** `src/components/Card.tsx`  
**Description:** Container component for grouping related content.

**Subcomponents:**
- `CardHeader`
- `CardTitle`
- `CardDescription`
- `CardContent`
- `CardFooter`

**Example:**
```tsx
import { Card, CardHeader, CardTitle, CardContent } from 'appski-ui-components';

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Card content goes here
  </CardContent>
</Card>
```

---

#### Dialog (Modal)
**File:** `src/components/Dialog.tsx`  
**Description:** Accessible modal dialog for overlaying content.

**Props:**
- `open`: Boolean to control visibility
- `onOpenChange`: Callback for state changes

**Example:**
```tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle } from 'appski-ui-components';

<Dialog open={isOpen} onOpenChange={setIsOpen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
    </DialogHeader>
    <p>Dialog content</p>
  </DialogContent>
</Dialog>
```

---

#### Select (Dropdown)
**File:** `src/components/Select.tsx`  
**Description:** Accessible dropdown select component.

**Example:**
```tsx
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from 'appski-ui-components';

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>
```

---

#### Checkbox
**File:** `src/components/Checkbox.tsx`  
**Description:** Accessible checkbox input with label support.

**Example:**
```tsx
import { Checkbox } from 'appski-ui-components';

<Checkbox id="terms" />
<label htmlFor="terms">Accept terms and conditions</label>
```

---

#### Switch (Toggle)
**File:** `src/components/Switch.tsx`  
**Description:** Toggle switch for binary options.

**Example:**
```tsx
import { Switch } from 'appski-ui-components';

<Switch checked={isEnabled} onCheckedChange={setIsEnabled} />
```

---

#### Badge
**File:** `src/components/Badge.tsx`  
**Description:** Small status indicator or label.

**Variants:**
- `default` - Neutral styling
- `secondary` - Secondary emphasis
- `destructive` - Error/warning
- `outline` - Outlined style

**Example:**
```tsx
import { Badge } from 'appski-ui-components';

<Badge variant="default">New</Badge>
<Badge variant="destructive">Error</Badge>
```

---

#### Alert
**File:** `src/components/Alert.tsx`  
**Description:** Contextual feedback messages.

**Variants:**
- `default` - Neutral information
- `destructive` - Error messages

**Example:**
```tsx
import { Alert, AlertDescription, AlertTitle } from 'appski-ui-components';

<Alert>
  <AlertTitle>Alert Title</AlertTitle>
  <AlertDescription>Alert description goes here</AlertDescription>
</Alert>
```

---

#### Tooltip
**File:** `src/components/Tooltip.tsx`  
**Description:** Accessible tooltip for additional context.

**Example:**
```tsx
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from 'appski-ui-components';

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover me</TooltipTrigger>
    <TooltipContent>Tooltip content</TooltipContent>
  </Tooltip>
</TooltipProvider>
```

---

### Utility Functions

#### `cn()` - Class Name Utility
**File:** `src/lib/utils.ts`  
**Description:** Merge Tailwind classes conditionally.

**Example:**
```tsx
import { cn } from 'appski-ui-components';

const buttonClasses = cn(
  'px-4 py-2',
  isActive && 'bg-blue-500',
  isDisabled && 'opacity-50'
);
```

---

## 🆕 Storybook Integration

**Storybook** provides an interactive playground for developing and testing components in isolation.

### Setup Storybook

1. **Install Storybook (if not already configured):**
   ```bash
   npx storybook@latest init
   ```

2. **Start Storybook server:**
   ```bash
   npm run storybook
   ```

3. **Access Storybook:**
   Open `http://localhost:6006` in your browser

### Writing Stories

Create stories for each component to document usage and variants:

**Example: Button.stories.tsx**
```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
};
```

### Building Storybook for Production

To deploy Storybook as static documentation:

```bash
npm run build-storybook
```

Output will be in `storybook-static/` directory.

---

## 🆕 Publishing Workflow

This library is published to npm for use in AppSki applications.

### Versioning Strategy

Follow **Semantic Versioning (SemVer):**
- **MAJOR** (v1.0.0 → v2.0.0): Breaking changes
- **MINOR** (v1.0.0 → v1.1.0): New features, backward-compatible
- **PATCH** (v1.0.0 → v1.0.1): Bug fixes, backward-compatible

### Pre-Publishing Checklist

Before publishing a new version:

1. **Run all tests:**
   ```bash
   npm test
   ```

2. **Run type checking:**
   ```bash
   npm run typecheck
   ```

3. **Run linting:**
   ```bash
   npm run lint
   ```

4. **Build the library:**
   ```bash
   npm run build
   ```

5. **Update version in package.json:**
   ```bash
   npm version patch  # or minor, or major
   ```

6. **Update CHANGELOG.md:**
   Document changes in the release

7. **Test locally in consuming project:**
   ```bash
   npm pack
   # Install in consuming project with: npm install /path/to/appski-ui-components-x.x.x.tgz
   ```

### Publishing to npm

1. **Login to npm (if not already logged in):**
   ```bash
   npm login
   ```

2. **Publish package:**
   ```bash
   npm publish
   ```

3. **Tag release in git:**
   ```bash
   git tag -a v1.0.1 -m "Release v1.0.1"
   git push origin --tags
   ```

### Updating in Consuming Projects

After publishing, update the version in consuming projects:

```bash
npm update appski-ui-components
```

Or specify exact version:

```bash
npm install appski-ui-components@1.0.1
```

---

## Common Tasks

#### Adding a New Component
1. Create component file: `src/components/Component.tsx`
2. Create test file for the component
3. Create Storybook story: `src/components/Component.stories.tsx`
4. Export from index: Add to `src/index.ts`
5. Add to component catalog in AGATA.md
6. Add TypeScript types if needed
7. Run tests: `npm test`
8. Run lint: `npm run lint`
9. Document usage examples

#### Updating Existing Component
1. Read component and tests
2. Make necessary changes
3. Update tests if behavior changed
4. Update Storybook story
5. Update component catalog documentation
6. Run tests: `npm test`
7. Run lint: `npm run lint`
8. Build: `npm run build`

#### Adding a New Variant
1. Update component variant definition
2. Add corresponding Tailwind classes
3. Add test for new variant
4. Update Storybook story with new variant
5. Update documentation
6. Verify accessibility

#### Adding Utility Functions
1. Create utility in `src/lib/utils.ts`
2. Add TypeScript types
3. Write unit tests
4. Export from index if needed
5. Document usage in comments and AGATA.md

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

#### Publishing Issues
- **npm authentication:** Run `npm login` and verify credentials
- **Version conflict:** Ensure version in package.json is incremented
- **Build errors:** Run full build before publishing

## Notes

- **Accessibility is mandatory** - all components must meet WCAG 2.1 AA
- **TypeScript strict mode** - maintain full type safety
- **Test coverage** - write comprehensive tests for all components
- **Component reusability** - design for maximum reusability
- **Storybook documentation** - create stories for all components
- **Semantic Versioning** - follow SemVer for all releases

---

## Change Log

### v2.0 (2026-03-05) [Documentation Improvements - Swarm Audit]
- **Added:** Component Catalog (comprehensive inventory of all components)
- **Added:** Storybook Integration Guide (setup, writing stories, deployment)
- **Added:** Publishing Workflow (versioning strategy, pre-publishing checklist, npm publishing)
- **Impact:** Addresses MEDIUM priority documentation gaps identified in audit
- **Benefit:** Improved onboarding for library consumers and contributors