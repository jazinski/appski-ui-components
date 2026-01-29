# @appski/ui

A comprehensive React component library built with Shadcn/ui patterns, Tailwind
CSS v4, and Zod validation. Production-ready with **46 components**, **900+
tests**, and full Storybook documentation.

## Features

✅ **46 Production-Ready Components** - From basic buttons to complex data
tables\
✅ **900+ Tests** - Comprehensive test coverage with Vitest & Testing Library\
✅ **Full TypeScript Support** - Strict type safety throughout\
✅ **Tailwind CSS v4** - Modern utility-first styling with dark mode\
✅ **Accessible** - Built on Radix UI primitives following WCAG guidelines\
✅ **Documented** - Interactive Storybook with real-world examples\
✅ **Tree-shakeable** - Only bundle what you use

## Tech Stack

- **React 18/19** - UI library with full hooks support
- **TypeScript 5** - Strict mode for type safety
- **Tailwind CSS v4** - Latest utility-first CSS with native dark mode
- **Radix UI** - Unstyled, accessible component primitives
- **Shadcn/ui patterns** - Component architecture with CVA for variants
- **Zod** - Runtime prop validation
- **Storybook 8** - Component documentation and development
- **Vitest** - Fast unit testing with 900+ tests

## Components

### Form Components (11)

- **Button** - Versatile button with variants, sizes, and loading states
- **Input** - Text input with validation support
- **Textarea** - Multi-line text input
- **Checkbox** - Checkboxes with indeterminate state
- **Radio Group** - Radio button groups
- **Select** - Dropdown select with search
- **Combobox** - Autocomplete combo box
- **Slider** - Range slider with multiple thumbs
- **Switch** - Toggle switch
- **Label** - Accessible form labels
- **Form** - Form wrapper with validation

### Feedback Components (9)

- **Alert** - Contextual alert messages
- **Toast** - Notification toasts
- **Spinner** - Loading spinner animations
- **Progress** - Progress bars and indicators
- **Skeleton Loader** - Content loading placeholders (6 variants)
- **Loading Button** - Button with integrated loading state
- **Error State** - Error handling UI (4 variants)
- **Empty State** - Empty state illustrations
- **Status Indicator** - Status dots and badges

### Display Components (8)

- **Card** - Content container with header/footer
- **Badge** - Status badges and tags
- **Avatar** - User avatars with fallbacks
- **Metric Card** - Dashboard metric display
- **Code Block** - Syntax-highlighted code
- **Separator** - Visual dividers
- **Tooltip** - Contextual help tooltips
- **Connection Status** - Real-time connection indicator

### Navigation Components (7)

- **Tabs** - Tabbed interfaces
- **Pagination** - Page navigation
- **Breadcrumb** - Breadcrumb navigation
- **Dropdown** - Dropdown menus
- **Main Nav** - Primary navigation bar
- **User Menu** - User account menu
- **Search Bar** - Search input with autocomplete

### Layout Components (6)

- **App Shell** - Application layout wrapper
- **Sidebar** - Collapsible sidebar navigation
- **Page Header** - Page title and actions
- **Modal Footer** - Dialog footer with actions
- **Dialog** - Modal dialogs
- **Popover** - Floating popovers

### Advanced Components (5)

- **Data Table** - Sortable, filterable tables with TanStack Table
- **Hybrid Editor** - Rich text editor with Lexical
- **Confirm Dialog** - Confirmation dialogs with variants
- **Accordion** - Collapsible content sections
- **View Mode Toggle** - List/Grid view switcher

**Total: 46 Components** | [View in Storybook →](https://ui.appski.me)

## Installation

> **Note**: This package is not yet published to npm. Install directly from
> GitHub:

```bash
# Install from GitHub
bun add github:jazinski/appski-ui-components
# or
npm install github:jazinski/appski-ui-components
# or
yarn add github:jazinski/appski-ui-components
```

**For local development:**

```bash
# Clone and link locally
git clone https://github.com/jazinski/appski-ui-components.git
cd appski-ui-components
bun install
bun run build
bun link

# In your project
cd your-project
bun link @appski/ui
```

## Quick Start

### 1. Install the package

```bash
# Install directly from GitHub
bun add github:jazinski/appski-ui-components
```

### 2. Import styles in your main CSS file

```css
@import "@appski/ui/styles.css";
```

### 2. Configure Theming

⚠️ **Important**: @appski/ui uses a semantic theming system. You **must** define
theme variables in your Tailwind configuration for components to display
correctly.

Add these variables to your `src/index.css` (or main CSS file):

```css
@import "tailwindcss";
@import "@appski/ui/styles.css";

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

## Usage Examples

### Basic Components

```tsx
import { Badge, Button, Card, Input } from "@appski/ui";

function MyApp() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Welcome</Card.Title>
        <Card.Description>Get started with @appski/ui</Card.Description>
      </Card.Header>
      <Card.Content>
        <Input placeholder="Enter your email" />
        <Button className="mt-4">Subscribe</Button>
      </Card.Content>
      <Card.Footer>
        <Badge variant="success">New</Badge>
      </Card.Footer>
    </Card>
  );
}
```

### Loading States

```tsx
import { LoadingButton, SkeletonLoader, Spinner } from "@appski/ui";

function MyForm() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? <SkeletonLoader variant="card" count={3} /> : (
        <LoadingButton
          loading={loading}
          onClick={() => setLoading(true)}
        >
          Submit Form
        </LoadingButton>
      )}
    </>
  );
}
```

### Data Display

```tsx
import { DataTable, EmptyState, MetricCard } from "@appski/ui";

function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <MetricCard
        title="Total Revenue"
        value="$45,231"
        change={12.5}
        trend="up"
        icon={<DollarIcon />}
      />

      <DataTable
        columns={columns}
        data={data}
        searchable
        sortable
      />

      {data.length === 0 && (
        <EmptyState
          title="No data yet"
          description="Add your first item to get started"
          action={<Button>Add Item</Button>}
        />
      )}
    </div>
  );
}
```

### Dialogs & Confirmations

```tsx
import { ConfirmDialog, useConfirmDialog } from "@appski/ui";

function DeleteButton() {
  const { confirm, ConfirmDialogComponent } = useConfirmDialog({
    variant: "danger",
    title: "Delete Account",
    message: "This action cannot be undone.",
  });

  const handleDelete = async () => {
    const confirmed = await confirm();
    if (confirmed) {
      // Delete the account
    }
  };

  return (
    <>
      <Button variant="destructive" onClick={handleDelete}>
        Delete Account
      </Button>
      <ConfirmDialogComponent />
    </>
  );
}
```

## Dark Mode

This library uses Tailwind's `class` strategy for dark mode. Components
automatically adapt to dark mode when you add the `dark` class to your root
element:

```tsx
// Toggle dark mode by adding/removing the dark class
<html className="dark">
  <body>
    <App />
  </body>
</html>;
```

All 46 components include optimized dark mode styles out of the box.

## Development

```bash
# Install dependencies
bun install

# Start Storybook (view all components)
bun run dev
# Open http://localhost:6006

# Run tests (900+ tests)
bun run test

# Run tests once
bun run test:run

# Build library for production
bun run build

# Type check
bun run typecheck

# Lint code
bun run lint
```

## Documentation

- **Storybook**: [https://ui.appski.me](https://ui.appski.me) - Interactive
  component documentation
- **Theming Guide**: [THEMING.md](./THEMING.md) - Complete theming and
  customization guide
- **Usage Guide**: [USAGE.md](./USAGE.md) - Detailed usage examples
- **Quick Start**: [QUICKSTART.md](./QUICKSTART.md) - Get started quickly
- **Contributing**: [CONTRIBUTING.md](./CONTRIBUTING.md) - Contribution
  guidelines

## Project Stats

- **Components**: 46 production-ready components
- **Tests**: 900+ passing tests (100% coverage)
- **Documentation**: Complete Storybook with 200+ stories
- **Bundle Size**: Tree-shakeable, optimized builds
- **TypeScript**: Full type safety with strict mode
- **Accessibility**: WCAG 2.1 AA compliant

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for
guidelines.

## License

MIT © Appski

## Links

- **GitHub**:
  [https://github.com/jazinski/appski-ui-components](https://github.com/jazinski/appski-ui-components)
- **npm**: [@appski/ui](https://www.npmjs.com/package/@appski/ui)
- **Storybook**: [https://ui.appski.me](https://ui.appski.me)
- **Issues**:
  [Report a bug](https://github.com/jazinski/appski-ui-components/issues)
