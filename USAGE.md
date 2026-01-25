# Using @appski/ui in Your Project

## 📦 Installation

### Prerequisites

- Node.js >= 18.0.0
- React >= 18.0.0 or React 19
- Tailwind CSS configured in your project

### 1. Authentication

Create a `.npmrc` file in your project root:

```bash
@jazinski:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

> 💡 **Get your token:** https://github.com/settings/tokens/new with
> `read:packages` scope

### 2. Install Package

```bash
# Using npm
npm install @jazinski/ui

# Using Bun (recommended)
bun add @jazinski/ui

# Using yarn
yarn add @jazinski/ui

# Using pnpm
pnpm add @jazinski/ui
```

### 3. Setup Tailwind CSS

The components use Tailwind CSS and CSS variables for theming. You need to
configure Tailwind in your project.

#### Install Tailwind (if not already installed)

```bash
bun add -D tailwindcss postcss autoprefixer
bunx tailwindcss init -p
```

#### Update `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Add this line to include the component library
    "./node_modules/@jazinski/ui/dist/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
```

#### Add CSS Variables

Add these CSS variables to your main CSS file (e.g., `src/index.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 224.3 76.3% 48%;
  }
}
```

### 4. Import Components & Styles

```tsx
// src/main.tsx or src/App.tsx
import "@jazinski/ui/styles.css";
import { Button, Card, Input } from "@jazinski/ui";
```

---

## 🎨 Usage Examples

### Basic Components

```tsx
import { Badge, Button, Input, Select } from "@jazinski/ui";

function MyForm() {
  return (
    <div className="space-y-4">
      <Input
        label="Email"
        type="email"
        placeholder="you@example.com"
        required
      />

      <Select
        label="Country"
        options={[
          { value: "us", label: "United States" },
          { value: "ca", label: "Canada" },
        ]}
      />

      <Button variant="primary" size="lg">
        Submit
      </Button>

      <Badge variant="success">Active</Badge>
    </div>
  );
}
```

### Card Component

```tsx
import { Card } from "@jazinski/ui";

function MyCard() {
  return (
    <Card variant="default" hoverable>
      <Card.Header>
        <Card.Title>Project Update</Card.Title>
        <Card.Description>Recent changes and improvements</Card.Description>
      </Card.Header>
      <Card.Content>
        <p>Content goes here...</p>
      </Card.Content>
      <Card.Footer>
        <Button variant="ghost">View Details</Button>
      </Card.Footer>
    </Card>
  );
}
```

### Tabs

```tsx
import { Tabs } from "@jazinski/ui";

function MyTabs() {
  return (
    <Tabs defaultValue="overview">
      <Tabs.List>
        <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
        <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="overview">
        <p>Overview content</p>
      </Tabs.Content>
      <Tabs.Content value="settings">
        <p>Settings content</p>
      </Tabs.Content>
    </Tabs>
  );
}
```

### Dialog/Modal

```tsx
import { Button, Dialog } from "@jazinski/ui";
import { useState } from "react";

function MyDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button>Open Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Confirm Action</Dialog.Title>
          <Dialog.Description>
            Are you sure you want to proceed?
          </Dialog.Description>
        </Dialog.Header>
        <Dialog.Footer>
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary">Confirm</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  );
}
```

### Form Controls

```tsx
import { Checkbox, Switch, Textarea } from "@jazinski/ui";
import { useState } from "react";

function MyFormControls() {
  const [checked, setChecked] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [text, setText] = useState("");

  return (
    <div className="space-y-4">
      <Checkbox
        label="Accept terms and conditions"
        checked={checked}
        onCheckedChange={setChecked}
      />

      <Switch
        label="Enable notifications"
        checked={enabled}
        onCheckedChange={setEnabled}
      />

      <Textarea
        label="Comments"
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={500}
        showCharacterCount
        autoResize
      />
    </div>
  );
}
```

### Loading States

```tsx
import { Loading, Skeleton, Spinner } from "@jazinski/ui";

function MyLoadingStates() {
  return (
    <div className="space-y-4">
      {/* Spinner */}
      <Spinner size="lg" variant="primary" />

      {/* Loading with text */}
      <Loading text="Loading data..." />

      {/* Skeleton loaders */}
      <Skeleton className="h-20 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  );
}
```

### Page Header

```tsx
import { Button, PageHeader } from "@jazinski/ui";

function MyPage() {
  return (
    <div>
      <PageHeader
        title="Dashboard"
        description="Welcome back! Here's what's happening."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Dashboard", href: "/dashboard", active: true },
        ]}
        actions={<Button variant="primary">Create New</Button>}
        stats={[
          { label: "Total Users", value: "1,234" },
          { label: "Active Sessions", value: "56" },
          { label: "Revenue", value: "$12,345" },
        ]}
      />
      {/* Page content */}
    </div>
  );
}
```

---

## 🌓 Dark Mode

Enable dark mode by adding the `dark` class to your root element:

```tsx
function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Dark Mode
      </button>
      {/* Your app */}
    </div>
  );
}
```

---

## 📚 Available Components

### Form Elements

- `Button` - Multiple variants and sizes
- `Input` - Text input with label, error, helper text
- `Select` - Dropdown select
- `Textarea` - Multi-line text input with auto-resize
- `Checkbox` - Checkbox with label and description
- `Switch` - Toggle switch

### Layout & Navigation

- `Card` - Compound card component
- `Tabs` - Tabbed interface
- `PageHeader` - Page header with breadcrumbs, actions, stats
- `Dialog` - Modal dialog/overlay

### Feedback & Status

- `Badge` - Status badges
- `Spinner` - Loading spinner
- `Loading` - Loading state with text
- `Skeleton` - Content placeholder loaders

---

## 🔧 TypeScript Support

All components are fully typed with TypeScript:

```tsx
import type { ButtonProps, CardProps, InputProps } from "@jazinski/ui";

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

---

## 🎨 Customization

### Using CVA Variants

All components use `class-variance-authority` for variants:

```tsx
import { buttonVariants } from "@jazinski/ui";

// Get class names for a variant
const classes = buttonVariants({ variant: "primary", size: "lg" });
```

### Custom Classes

All components accept a `className` prop:

```tsx
<Button className="my-custom-class" variant="primary">
  Click Me
</Button>;
```

---

## 📖 Documentation

View the full component documentation and interactive examples:

- **Storybook:** https://ui.appski.me
- **GitHub:** https://github.com/jazinski/appski-ui-components

---

## 🐛 Troubleshooting

### Components not styled correctly

- Verify Tailwind CSS is configured properly
- Ensure CSS variables are added to your main CSS file
- Import `@jazinski/ui/styles.css` in your app

### TypeScript errors

- Ensure `react` and `react-dom` peer dependencies match
- Update `tsconfig.json` to include `node_modules/@jazinski/ui`

### Dark mode not working

- Add `darkMode: 'class'` to your `tailwind.config.js`
- Toggle the `dark` class on your root element

---

## 📦 Peer Dependencies

Make sure these are installed in your project:

```json
{
  "react": "^18.0.0 || ^19.0.0",
  "react-dom": "^18.0.0 || ^19.0.0"
}
```

---

## 🤝 Contributing

See the main repository for contribution guidelines.
