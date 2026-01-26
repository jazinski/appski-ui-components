# @appski/ui

A React component library built with Shadcn/ui patterns, Tailwind CSS, and Zod
validation.

## Tech Stack

- **React 18/19** - UI library
- **TypeScript** - Strict mode for type safety
- **Tailwind CSS** - Styling with native dark/light mode
- **Shadcn/ui patterns** - Component architecture (CVA for variants)
- **Zod** - Runtime prop validation
- **Storybook** - Component documentation
- **Vitest** - Testing

## Installation

```bash
bun add @appski/ui
```

## Quick Start

### 1. Install the package

```bash
bun add @appski/ui
```

### 2. Configure Theming

⚠️ **Important**: @appski/ui uses a semantic theming system. You **must** define
theme variables in your Tailwind configuration for components to display
correctly.

Add these variables to your `src/index.css` (or main CSS file):

```css
@import "tailwindcss";

@theme {
  /* @appski/ui - Required Theme Variables */
  --color-primary: #6366f1;
  --color-primary-foreground: #ffffff;
  --color-secondary: #e0e8ff;
  --color-secondary-foreground: #828df8;
  --color-accent: #e0e8ff;
  --color-accent-foreground: #6467f2;
  --color-destructive: #ef4343;
  --color-destructive-foreground: #ffffff;
  --color-background: #f9fafb;
  --color-foreground: #344256;
  --color-muted: #f1f5f9;
  --color-muted-foreground: #64748b;
  --color-card: #ffffff;
  --color-card-foreground: #344256;
  --color-border: #e1e7ef;
  --color-input: #e1e7ef;
  --color-ring: #6467f2;
}

/* HSL variables for light/dark mode */
:root {
  --background: 210 20% 98%;
  --foreground: 215 25% 27%;
  --card: 0 0% 100%;
  --card-foreground: 215 25% 27%;
  --primary: 239 84% 67%;
  --primary-foreground: 0 0% 100%;
  --secondary: 226 100% 94%;
  --secondary-foreground: 234 89% 74%;
  --muted: 210 40% 96%;
  --muted-foreground: 215 16% 47%;
  --accent: 226 100% 94%;
  --accent-foreground: 239 84% 67%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 100%;
  --border: 214 32% 91%;
  --input: 214 32% 91%;
  --ring: 239 84% 67%;
}

.dark {
  --background: 222 47% 11%;
  --foreground: 210 40% 98%;
  --card: 215 28% 17%;
  --card-foreground: 210 40% 98%;
  --primary: 239 84% 67%;
  --primary-foreground: 0 0% 100%;
  --secondary: 217 33% 17%;
  --secondary-foreground: 226 100% 94%;
  --muted: 217 33% 17%;
  --muted-foreground: 215 20% 65%;
  --accent: 217 33% 17%;
  --accent-foreground: 239 84% 67%;
  --destructive: 0 63% 31%;
  --destructive-foreground: 210 40% 98%;
  --border: 217 33% 17%;
  --input: 217 33% 17%;
  --ring: 239 84% 67%;
}

* {
  border-color: hsl(var(--border));
}

body {
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
}
```

**📖 Customize colors for your brand!** The values above use Appski's indigo
palette. Change these to match your design system.

See [THEMING.md](./THEMING.md) for complete theming documentation.

### 3. Use Components

```tsx
import { Button } from "@appski/ui";

function App() {
  return (
    <Button variant="default" onClick={() => console.log("clicked")}>
      Click me
    </Button>
  );
}
```

## Dark Mode

This library uses Tailwind's `class` strategy for dark mode. Add the `dark`
class to your root element:

```tsx
<html className="dark">
  {/* ... */}
</html>;
```

## Development

```bash
# Install dependencies
bun install

# Start Storybook
bun run storybook

# Run tests
bun test

# Build library
bun run build

# Type check
bun run typecheck
```

## Components

### Button

```tsx
import { Button } from '@appski/ui';

// Variants
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><IconComponent /></Button>

// Loading state
<Button isLoading>Loading...</Button>
<Button isLoading loadingText="Saving...">Save</Button>
```

## License

MIT
