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

## Usage

```tsx
import { Button } from "@appski/ui";
import "@appski/ui/styles.css";

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
