# Contributing to @appski/ui

Thank you for your interest in contributing to @appski/ui! This document
provides guidelines and instructions for contributing to the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Component Guidelines](#component-guidelines)
- [Testing Requirements](#testing-requirements)
- [Documentation Standards](#documentation-standards)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)

## Code of Conduct

This project follows a standard code of conduct. Be respectful, inclusive, and
professional in all interactions.

## Getting Started

### Prerequisites

- **Node.js** >= 18.0.0
- **Bun** (recommended) or npm/yarn
- **Git**

### Initial Setup

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/appski-ui-components.git
   cd appski-ui-components
   ```

3. Install dependencies:
   ```bash
   bun install
   ```

> **Note**: This package is currently distributed via GitHub, not npm. Install
> in other projects with:
>
> ```bash
> bun add github:jazinski/appski-ui-components
> ```

4. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

5. Start Storybook for development:
   ```bash
   bun run dev
   # Open http://localhost:6006
   ```

## Development Workflow

### File Structure

```
src/
├── components/
│   └── ui/
│       ├── button.tsx           # Component implementation
│       ├── button.stories.tsx   # Storybook stories
│       └── button.test.tsx      # Unit tests
├── lib/
│   └── utils.ts                 # Utility functions
└── index.ts                     # Main export file
```

### Creating a New Component

1. **Create the component file** (`src/components/ui/your-component.tsx`):
   ```tsx
   import { cva, type VariantProps } from "class-variance-authority";
   import { cn } from "@/lib/utils";

   const yourComponentVariants = cva(
     "base-classes",
     {
       variants: {
         variant: {
           default: "default-classes",
           secondary: "secondary-classes",
         },
         size: {
           default: "default-size-classes",
           sm: "small-size-classes",
           lg: "large-size-classes",
         },
       },
       defaultVariants: {
         variant: "default",
         size: "default",
       },
     },
   );

   export interface YourComponentProps
     extends
       React.HTMLAttributes<HTMLDivElement>,
       VariantProps<typeof yourComponentVariants> {
     // Add custom props here
   }

   export function YourComponent({
     className,
     variant,
     size,
     ...props
   }: YourComponentProps) {
     return (
       <div
         className={cn(yourComponentVariants({ variant, size, className }))}
         {...props}
       />
     );
   }
   ```

2. **Export the component** in `src/index.ts`:
   ```tsx
   export {
     YourComponent,
     type YourComponentProps,
   } from "./components/ui/your-component";
   ```

3. **Create Storybook stories**
   (`src/components/ui/your-component.stories.tsx`):
   ```tsx
   import type { Meta, StoryObj } from "@storybook/react";
   import { YourComponent } from "./your-component";

   const meta: Meta<typeof YourComponent> = {
     title: "Components/YourComponent",
     component: YourComponent,
     parameters: {
       layout: "centered",
       docs: {
         description: {
           component: "Brief description of your component.",
         },
       },
     },
     tags: ["autodocs"],
     argTypes: {
       variant: {
         control: "select",
         options: ["default", "secondary"],
         description: "Visual variant of the component",
       },
     },
   };

   export default meta;
   type Story = StoryObj<typeof meta>;

   export const Default: Story = {
     args: {
       variant: "default",
     },
   };

   export const Secondary: Story = {
     args: {
       variant: "secondary",
     },
   };
   ```

4. **Create unit tests** (`src/components/ui/your-component.test.tsx`):
   ```tsx
   import { describe, expect, it } from "vitest";
   import { render, screen } from "@testing-library/react";
   import { YourComponent } from "./your-component";

   describe("YourComponent", () => {
     it("renders successfully", () => {
       render(<YourComponent>Content</YourComponent>);
       expect(screen.getByText("Content")).toBeInTheDocument();
     });

     it("applies variant classes correctly", () => {
       const { container } = render(
         <YourComponent variant="secondary">Content</YourComponent>,
       );
       expect(container.firstChild).toHaveClass("secondary-classes");
     });

     it("accepts custom className", () => {
       const { container } = render(
         <YourComponent className="custom-class">Content</YourComponent>,
       );
       expect(container.firstChild).toHaveClass("custom-class");
     });
   });
   ```

## Component Guidelines

### Design Principles

1. **Accessible by default** - Follow WCAG 2.1 AA guidelines
2. **Composable** - Components should be flexible and composable
3. **Type-safe** - Full TypeScript support with proper types
4. **Consistent** - Follow existing patterns and conventions
5. **Documented** - Include comprehensive Storybook stories

### Styling Guidelines

- Use **Tailwind CSS v4** utility classes
- Use **CVA** (class-variance-authority) for variants
- Support **dark mode** with `dark:` prefix
- Use semantic color tokens (e.g., `bg-primary`, `text-foreground`)
- Avoid hard-coded colors; use theme variables

### Accessibility Checklist

- [ ] Proper ARIA labels and roles
- [ ] Keyboard navigation support
- [ ] Focus states visible
- [ ] Screen reader compatible
- [ ] Color contrast meets WCAG AA (4.5:1 for normal text)
- [ ] Works with keyboard only
- [ ] Works with screen readers (test with NVDA/JAWS)

## Testing Requirements

### Test Coverage Requirements

All new components must include:

1. **Basic rendering tests**
   ```tsx
   it("renders successfully", () => {
     render(<Component />);
     expect(screen.getByRole("button")).toBeInTheDocument();
   });
   ```

2. **Variant tests** (for all variants)
   ```tsx
   it("applies variant classes", () => {
     const { container } = render(<Component variant="primary" />);
     expect(container.firstChild).toHaveClass("primary-classes");
   });
   ```

3. **Props tests**
   ```tsx
   it("accepts custom className", () => {
     const { container } = render(<Component className="custom" />);
     expect(container.firstChild).toHaveClass("custom");
   });
   ```

4. **Interaction tests** (for interactive components)
   ```tsx
   it("calls onClick when clicked", async () => {
     const handleClick = vi.fn();
     render(<Button onClick={handleClick}>Click me</Button>);

     await userEvent.click(screen.getByText("Click me"));
     expect(handleClick).toHaveBeenCalledTimes(1);
   });
   ```

5. **Accessibility tests**
   ```tsx
   it("has proper accessibility attributes", () => {
     render(<Button aria-label="Submit form">Submit</Button>);
     expect(screen.getByLabelText("Submit form")).toBeInTheDocument();
   });
   ```

### Running Tests

```bash
# Run all tests
bun run test

# Run tests in watch mode
bun run test:watch

# Run tests once with coverage
bun run test:coverage

# Run specific test file
bun run test button.test.tsx
```

### Test Standards

- Minimum **80% code coverage** for new components
- Use **Testing Library** best practices (query by role, label, text)
- Use **userEvent** for interactions (not fireEvent)
- Test **user behavior**, not implementation details
- Include **edge cases** and **error states**

## Documentation Standards

### Storybook Stories Requirements

Every component must have:

1. **Default story** - Basic usage
2. **All variants** - One story per variant
3. **All sizes** (if applicable)
4. **Interactive story** - Demonstrates user interaction
5. **Real-world examples** - 1-2 practical use cases
6. **Disabled state** (if applicable)
7. **Error state** (if applicable)

### Story Naming Conventions

```tsx
export const Default: Story = { ... };           // Basic usage
export const Primary: Story = { ... };           // Variant name
export const Small: Story = { ... };             // Size name
export const WithIcon: Story = { ... };          // Feature name
export const Loading: Story = { ... };           // State name
export const LoginForm: Story = { ... };         // Real-world example
export const AllVariants: Story = { ... };       // Comparison story
```

### Component Documentation

Include JSDoc comments for:

- Component props
- Complex functions
- Non-obvious behavior

````tsx
/**
 * A flexible button component with multiple variants and sizes.
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="lg" onClick={handleClick}>
 *   Click me
 * </Button>
 * ```
 */
export function Button({ variant, size, ...props }: ButtonProps) {
  // ...
}
````

## Pull Request Process

### Before Submitting

1. **Run all checks**:
   ```bash
   bun run test:run     # All tests pass
   bun run typecheck    # No type errors
   bun run lint         # No linting errors
   ```

2. **Update documentation**:
   - Add Storybook stories
   - Update README if needed
   - Add JSDoc comments

3. **Write clear commit messages**:
   ```
   feat: add Button component with variants
   fix: resolve dark mode issue in Card
   docs: update theming guide
   test: add tests for Modal component
   ```

### Commit Message Format

Follow conventional commits:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### PR Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Checklist

- [ ] Tests pass (`bun run test:run`)
- [ ] No type errors (`bun run typecheck`)
- [ ] No lint errors (`bun run lint`)
- [ ] Storybook stories added/updated
- [ ] Documentation updated
- [ ] Accessibility tested

## Screenshots (if applicable)

Add screenshots for visual changes
```

### Review Process

1. Submit PR with clear description
2. Wait for automated checks to pass
3. Address reviewer feedback
4. Maintain a clean git history (squash if needed)
5. PR will be merged once approved

## Coding Standards

### TypeScript

- Use **strict mode**
- Avoid `any` type (use `unknown` if needed)
- Define proper interfaces/types for all props
- Use generics when appropriate
- Export types alongside components

### React

- Use **function components** (not class components)
- Use **hooks** for state and effects
- Use **forwardRef** for components that need ref access
- Memoize expensive calculations with `useMemo`
- Avoid unnecessary re-renders

### CSS/Styling

- Use **Tailwind utility classes**
- Follow **mobile-first** approach
- Use **semantic color tokens**
- Include **dark mode** styles
- Keep styles **inline** (no separate CSS files)

### File Organization

```tsx
// 1. Imports
import { ... } from 'react';
import { ... } from 'external-library';
import { ... } from '@/lib/utils';

// 2. Types/Interfaces
export interface ComponentProps { ... }

// 3. Variants (CVA)
const componentVariants = cva(...);

// 4. Component
export function Component({ ... }: ComponentProps) {
  // ...
}

// 5. Sub-components (if any)
Component.Header = function ComponentHeader({ ... }) {
  // ...
};
```

### Code Quality Tools

We use:

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking
- **Vitest** - Unit testing
- **Testing Library** - Component testing

## Questions?

- Open an issue for questions
- Check existing issues and PRs
- Review Storybook documentation

## Thank You!

Thank you for contributing to @appski/ui! Your contributions help make this
library better for everyone.
