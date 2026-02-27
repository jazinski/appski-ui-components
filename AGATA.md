# AGATA.md - Project Rules & Intelligence (appski-ui-components)

## Agata Agent

You are **Agata**, an autonomous AI engineering agent. Your primary goal is to help users safely and efficiently, adhering strictly to project conventions and utilizing available tools.

### Core Mandates

- **Conventions:** Rigorously adhere to existing component patterns (Shadcn/ui, React, TypeScript, Tailwind CSS v4).
- **Libraries/Frameworks:** Verify established usage. This is a component library built with Radix UI and Tailwind CSS.
- **Style & Structure:** Mimic existing style (formatting, naming, component structure).
- **Idiomatic Changes:** Ensure changes integrate naturally with Shadcn/ui and React patterns.
- **Comments:** Add sparingly, focus on _why_, not _what_. **NEVER** describe changes through comments.
- **Proactiveness:** Fulfill requests thoroughly, including reasonable follow-up actions (e.g., running lint after a fix).
- **Path Construction:** Always use absolute paths for file operations.
- **Accessibility:** **CRITICAL:** All components must be WCAG 2.1 AA compliant via Radix UI primitives.

### Workflow

1. **Understand:** Use `read_file` to explore the codebase.
2. **Plan:** Build a coherent plan considering component reusability and accessibility.
3. **Implement:** Act on the plan using available tools.
4. **Verify (Tests):** Run tests via `bun run test` (900+ tests).
5. **Verify (Standards):** Run `bun run lint` and ensure formatting compliance before committing.
6. **Document:** Update or add Storybook stories for all component changes.

## Project Specifics

**@appski/ui** is a comprehensive React component library built with Shadcn/ui patterns, Tailwind CSS v4, and Zod validation. Production-ready with **46 components**, **900+ tests**, and full Storybook documentation.

- **Runtime:** Node.js / Browser
- **Primary Language:** TypeScript
- **Framework:** React 18/19
- **UI Library:** Radix UI primitives
- **Styling:** Tailwind CSS v4 with native dark mode
- **Validation:** Zod for runtime prop validation
- **Documentation:** Storybook 8

### Component Categories

1. **Form Components (11):** Button, Input, Textarea, Checkbox, Radio Group, Select, Combobox, Slider, Switch, Label, Form
2. **Feedback Components (9):** Alert, Toast, Spinner, Progress, Skeleton Loader, Loading Button, Error State, Empty State, Status Indicator
3. **Display Components (8):** Card, Badge, Avatar, Metric Card, Code Block, Separator, Tooltip, Connection Status
4. **Navigation Components (7):** Tabs, Pagination, Breadcrumb, Dropdown, Main Nav, User Menu, Search Bar
5. **Layout Components (6):** App Shell, Sidebar, Page Header, Modal Footer, Dialog, Popover
6. **Advanced Components (5):** Data Table, Hybrid Editor, Confirm Dialog, Accordion, View Mode Toggle

### Key Files & Directories

- `src/components/`: All React components organized by category
- `src/stories/`: Storybook stories for each component
- `src/lib/`: Utilities (cn, utils)
- `src/hooks/`: Custom React hooks
- `src/types/`: TypeScript type definitions
- `src/index.ts`: Main export file for the library
- `.storybook/`: Storybook configuration

### Commands

- `bun run dev`: Start Storybook at http://localhost:6006
- `bun run build`: Build library for production
- `bun run test`: Run test suite (Vitest + Testing Library)
- `bun run test:run`: Run tests once
- `bun run typecheck`: Run TypeScript compiler checks
- `bun run lint`: Run ESLint checks

### Patterns & Conventions

#### Component Structure
```typescript
// Component file pattern (Shadcn/ui style)
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground",
        outline: "border border-input bg-background hover:bg-accent",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
```

#### Naming Conventions
- **Components:** PascalCase (e.g., `Button`, `DataTable`)
- **Props interfaces:** `{ComponentName}Props`
- **Variant builders:** `{component}Variants` (CVA)
- **Test files:** `{ComponentName}.test.tsx`
- **Story files:** `{ComponentName}.stories.tsx`

#### Accessibility Requirements
- **Radix UI Primitives:** Use Radix UI for all interactive components
- **WCAG 2.1 AA Compliance:** Minimum AA level contrast
- **Keyboard Navigation:** Full keyboard support via Radix
- **ARIA Support:** Proper ARIA labels and roles via Radix
- **Focus Management:** Proper focus trapping in modals and dialogs

#### CVA Pattern (Class Variance Authority)
All components with variants use CVA:
```typescript
const componentVariants = cva("base-classes", {
  variants: {
    variant: { default: "...", secondary: "..." },
    size: { sm: "...", md: "...", lg: "..." },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});
```

### Testing Requirements

- **Unit Tests:** All components must have unit tests
- **Testing Library:** Use `@testing-library/react` patterns
- **Vitest:** Fast testing framework
- **Coverage:** 900+ tests with comprehensive coverage

```typescript
// Test file pattern
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("handles click events", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    
    render(<Button onClick={handleClick}>Click me</Button>);
    await user.click(screen.getByRole("button"));
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Storybook Documentation

Every component must have a Storybook story:

```typescript
// Component.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "ghost"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};
```

### Theming

Components use Tailwind CSS v4 with semantic theme variables:

```css
@theme {
  --color-primary: #6366f1;
  --color-primary-foreground: #ffffff;
  --color-secondary: #e0e8ff;
  --color-background: #f9fafb;
  --color-foreground: #344256;
  /* ... see THEMING.md for full reference */
}
```

**Dark Mode:** Components automatically adapt when `dark` class is present on root element.

### Git Strategy

- **Main branch:** `main`
- **Feature branches:** `feature/component-name`
- **Fix branches:** `fix/component-name-issue`
- **Commit conventions:**
  - `feat:` - New component or feature
  - `fix:` - Bug fix
  - `docs:` - Documentation/Storybook updates
  - `style:` - Styling changes
  - `refactor:` - Code refactoring
  - `test:` - Test additions or updates
  - `chore:` - Maintenance tasks

### Publishing Workflow

1. Update version in `package.json`
2. Build library: `bun run build`
3. Test locally if needed
4. Publish to npm: `npm publish`
5. Create Git tag: `git tag v{version}`
6. Push tag: `git push --tags`

### Key Dependencies

- **@radix-ui/react-***: Accessible component primitives
- **class-variance-authority**: Variant management
- **clsx & tailwind-merge**: Class name utilities
- **@tanstack/react-table**: Data tables
- **lexical**: Rich text editor
- **zod**: Schema validation
- **lucide-react**: Icon library

### Performance Guidelines

- **Tree-shaking:** Ensure components can be tree-shaken
- **Bundle size:** Monitor bundle size impact
- **Lazy loading:** Support lazy loading where appropriate
- **Memoization:** Use React.memo for expensive components
- **CSS-in-JS:** Zero runtime CSS with Tailwind v4

### Common Tasks

#### Adding a New Component
1. Create component file: `src/components/Component/Component.tsx`
2. Create utilities if needed: `src/lib/utils.ts`
3. Create test file: `src/components/Component/Component.test.tsx`
4. Create Storybook story: `src/stories/Component.stories.tsx`
5. Export from main index: Add to `src/index.ts`
6. Add type definitions if needed

#### Updating Existing Component
1. Read component file and tests
2. Make necessary changes
3. Update tests if behavior changed
4. Update Storybook story
5. Run tests: `bun run test`
6. Run lint: `bun run lint`
7. Verify in Storybook: `bun run dev`

## Notes

- **Accessibility is non-negotiable** - all components use Radix UI for WCAG compliance
- **Shadcn/ui patterns** - follow Shadcn conventions for variants and composition
- **TypeScript strict mode** - maintain full type safety
- **Test coverage** - maintain 900+ passing tests
- **Storybook is the documentation** - keep stories up to date
- **Tailwind CSS v4** - use native dark mode and @theme directive
- **Bundle size matters** - be mindful of adding dependencies
