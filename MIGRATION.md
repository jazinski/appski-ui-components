# Migration Guide

This guide helps you integrate @appski/ui into existing React projects or
migrate from other component libraries.

## Table of Contents

- [Quick Start for Existing Projects](#quick-start-for-existing-projects)
- [Migrating from Shadcn/ui](#migrating-from-shadcnui)
- [Migrating from Material-UI](#migrating-from-material-ui)
- [Migrating from Chakra UI](#migrating-from-chakra-ui)
- [Tailwind CSS Configuration](#tailwind-css-configuration)
- [Dark Mode Setup](#dark-mode-setup)
- [Gradual Migration Strategy](#gradual-migration-strategy)
- [Troubleshooting](#troubleshooting)

---

## Quick Start for Existing Projects

### 1. Install @appski/ui

```bash
# Install from GitHub
bun add github:jazinski/appski-ui-components
# or
npm install github:jazinski/appski-ui-components
```

### 2. Install Tailwind CSS v4 (if not already installed)

```bash
bun add -D tailwindcss@next @tailwindcss/postcss
```

### 3. Configure Tailwind CSS

Create or update `postcss.config.js`:

```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

### 4. Import Styles

Add to your main CSS file (e.g., `src/index.css` or `src/App.css`):

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

### 5. Start Using Components

```tsx
import { Button, Card, Input } from "@appski/ui";

function MyComponent() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Welcome</Card.Title>
      </Card.Header>
      <Card.Content>
        <Input placeholder="Enter text" />
        <Button>Submit</Button>
      </Card.Content>
    </Card>
  );
}
```

---

## Migrating from Shadcn/ui

If you're already using shadcn/ui, migration is straightforward since @appski/ui
follows similar patterns.

### Key Differences

1. **Installation**: @appski/ui is a package, not copy-paste components
2. **Import Path**: Import from `@appski/ui` instead of `@/components/ui`
3. **Theming**: Uses Tailwind v4 `@theme` instead of CSS variables

### Migration Steps

**Before (shadcn/ui):**

```tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
```

**After (@appski/ui):**

```tsx
import { Button, Card } from "@appski/ui";
```

### Component Mapping

Most components have identical APIs:

| shadcn/ui  | @appski/ui | Notes                        |
| ---------- | ---------- | ---------------------------- |
| `Button`   | `Button`   | Same API                     |
| `Card`     | `Card`     | Same API with sub-components |
| `Input`    | `Input`    | Same API                     |
| `Select`   | `Select`   | Same API                     |
| `Dialog`   | `Dialog`   | Same API                     |
| `Tabs`     | `Tabs`     | Same API                     |
| `Alert`    | `Alert`    | Same API                     |
| `Badge`    | `Badge`    | Same API                     |
| `Avatar`   | `Avatar`   | Same API                     |
| `Checkbox` | `Checkbox` | Same API                     |
| `Switch`   | `Switch`   | Same API                     |
| `Slider`   | `Slider`   | Same API                     |

### Find & Replace

You can use these regex patterns to migrate imports:

```bash
# Find
import \{ (.*?) \} from ['"]@\/components\/ui\/(.*?)['"

# Replace with
import { $1 } from '@appski/ui'
```

---

## Migrating from Material-UI

### Component Mapping

| Material-UI          | @appski/ui                | Notes                                    |
| -------------------- | ------------------------- | ---------------------------------------- |
| `<Button>`           | `<Button>`                | Similar variants                         |
| `<TextField>`        | `<Input>` or `<Textarea>` | No `multiline` prop, use `Textarea`      |
| `<Card>`             | `<Card>`                  | Use sub-components (`Card.Header`, etc.) |
| `<Dialog>`           | `<Dialog>`                | Similar API                              |
| `<Tabs>`             | `<Tabs>`                  | Different sub-component structure        |
| `<Alert>`            | `<Alert>`                 | Similar variants                         |
| `<Chip>`             | `<Badge>`                 | Similar purpose                          |
| `<Avatar>`           | `<Avatar>`                | Similar API                              |
| `<Select>`           | `<Select>`                | Different structure                      |
| `<Switch>`           | `<Switch>`                | Similar API                              |
| `<Checkbox>`         | `<Checkbox>`              | Similar API                              |
| `<Slider>`           | `<Slider>`                | Similar API                              |
| `<Tooltip>`          | `<Tooltip>`               | Similar API                              |
| `<Skeleton>`         | `<SkeletonLoader>`        | Uses `variant` prop                      |
| `<CircularProgress>` | `<Spinner>`               | Different sizes                          |

### Example Migration

**Before (Material-UI):**

```tsx
import { Button, Card, CardContent, TextField } from "@mui/material";

function MyForm() {
  return (
    <Card>
      <CardContent>
        <TextField label="Email" variant="outlined" />
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </CardContent>
    </Card>
  );
}
```

**After (@appski/ui):**

```tsx
import { Button, Card, Input, Label } from "@appski/ui";

function MyForm() {
  return (
    <Card>
      <Card.Content>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Enter email" />
        </div>
        <Button variant="default">Submit</Button>
      </Card.Content>
    </Card>
  );
}
```

### Key Differences

1. **Styling**: @appski/ui uses Tailwind CSS, not emotion/styled-components
2. **Theme Provider**: No `ThemeProvider` needed, use Tailwind's dark mode
3. **Props**: Some props have different names (e.g., `variant` values differ)
4. **Icons**: Use Lucide React or Heroicons instead of Material Icons

---

## Migrating from Chakra UI

### Component Mapping

| Chakra UI    | @appski/ui         | Notes                             |
| ------------ | ------------------ | --------------------------------- |
| `<Button>`   | `<Button>`         | Similar variants                  |
| `<Input>`    | `<Input>`          | No `size` variants, use className |
| `<Box>`      | `<div>`            | Use Tailwind utility classes      |
| `<Flex>`     | `<div>`            | Use `flex` utilities              |
| `<Text>`     | `<p>` or `<span>`  | Use Tailwind typography           |
| `<Heading>`  | `<h1>`-`<h6>`      | Use Tailwind typography           |
| `<Card>`     | `<Card>`           | Similar structure                 |
| `<Modal>`    | `<Dialog>`         | Similar API                       |
| `<Tabs>`     | `<Tabs>`           | Similar API                       |
| `<Alert>`    | `<Alert>`          | Similar variants                  |
| `<Badge>`    | `<Badge>`          | Similar API                       |
| `<Avatar>`   | `<Avatar>`         | Similar API                       |
| `<Select>`   | `<Select>`         | Different structure               |
| `<Switch>`   | `<Switch>`         | Similar API                       |
| `<Checkbox>` | `<Checkbox>`       | Similar API                       |
| `<Slider>`   | `<Slider>`         | Similar API                       |
| `<Tooltip>`  | `<Tooltip>`        | Similar API                       |
| `<Skeleton>` | `<SkeletonLoader>` | Uses `variant` prop               |
| `<Spinner>`  | `<Spinner>`        | Different sizes                   |

### Example Migration

**Before (Chakra UI):**

```tsx
import { Button, Card, CardBody, Input, VStack } from "@chakra-ui/react";

function MyForm() {
  return (
    <Card>
      <CardBody>
        <VStack spacing={4}>
          <Input placeholder="Email" size="md" />
          <Button colorScheme="blue" size="lg">
            Submit
          </Button>
        </VStack>
      </CardBody>
    </Card>
  );
}
```

**After (@appski/ui):**

```tsx
import { Button, Card, Input } from "@appski/ui";

function MyForm() {
  return (
    <Card>
      <Card.Content>
        <div className="flex flex-col gap-4">
          <Input placeholder="Email" />
          <Button size="lg">Submit</Button>
        </div>
      </Card.Content>
    </Card>
  );
}
```

### Key Differences

1. **Layout**: Use Tailwind utilities (`flex`, `grid`) instead of `Stack`, `Box`
2. **Color Schemes**: Use `variant` prop instead of `colorScheme`
3. **Spacing**: Use Tailwind `gap-*`, `p-*`, `m-*` instead of `spacing`
4. **Provider**: No `ChakraProvider` needed
5. **Responsive**: Use Tailwind breakpoints (`sm:`, `md:`, `lg:`)

---

## Tailwind CSS Configuration

### Existing Tailwind v3 Project

If you already have Tailwind v3, upgrade to v4:

```bash
bun add -D tailwindcss@next @tailwindcss/postcss
```

Update `postcss.config.js`:

```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

Remove `tailwind.config.js` (Tailwind v4 uses `@theme` in CSS).

### Existing Project Without Tailwind

Install Tailwind CSS v4:

```bash
bun add -D tailwindcss@next @tailwindcss/postcss postcss
```

Create `postcss.config.js`:

```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

Add to your main CSS file:

```css
@import "tailwindcss";
@import "@appski/ui/styles.css";
```

---

## Dark Mode Setup

### Add Dark Mode Toggle

```tsx
import { useEffect, useState } from "react";
import { Button } from "@appski/ui";
import { Moon, Sun } from "lucide-react";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference on mount
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
      {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
}
```

### Persist Dark Mode

```tsx
function useDarkMode() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return [darkMode, setDarkMode] as const;
}
```

---

## Gradual Migration Strategy

### Phase 1: Setup (Week 1)

1. Install @appski/ui
2. Configure Tailwind CSS v4
3. Add theme variables to CSS
4. Test with a single component

### Phase 2: New Features (Weeks 2-3)

Use @appski/ui for all new features:

- New pages
- New components
- New forms

### Phase 3: High-Traffic Pages (Week 4)

Migrate high-traffic pages first:

- Landing page
- Login/signup
- Dashboard

### Phase 4: Remaining Pages (Weeks 5-8)

Migrate remaining pages incrementally:

- Profile pages
- Settings
- Admin panels

### Phase 5: Cleanup (Week 9)

- Remove old component library
- Update all dependencies
- Final testing

### Coexistence Tips

You can run @appski/ui alongside other libraries:

```tsx
// Old library
import { Button as MuiButton } from "@mui/material";
// New library
import { Button } from "@appski/ui";

function MixedComponent() {
  return (
    <>
      <MuiButton>Old Button</MuiButton>
      <Button>New Button</Button>
    </>
  );
}
```

---

## Troubleshooting

### Components Don't Have Correct Styling

**Problem**: Components appear unstyled or use default browser styles.

**Solution**: Ensure you've imported the theme variables in your main CSS file:

```css
@import "@appski/ui/styles.css";
```

### Dark Mode Not Working

**Problem**: Dark mode doesn't apply or components don't change appearance.

**Solution**:

1. Check that you have the `.dark` class on `<html>` element
2. Verify dark mode CSS variables are defined in `:root .dark`
3. Ensure Tailwind's dark mode strategy is set to `class` (default in v4)

### TypeScript Errors

**Problem**: TypeScript can't find types for @appski/ui components.

**Solution**: Ensure you have TypeScript configured correctly:

```json
// tsconfig.json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "types": ["@appski/ui"]
  }
}
```

### Build Errors with Tailwind

**Problem**: Build fails with Tailwind CSS errors.

**Solution**:

1. Verify you're using Tailwind CSS v4: `tailwindcss@next`
2. Check `postcss.config.js` is configured correctly
3. Remove old `tailwind.config.js` if upgrading from v3

### Components Not Responding to Props

**Problem**: Changing props doesn't update component appearance.

**Solution**: Check that you're using the correct prop names. See component
documentation in Storybook: https://ui.appski.me

### CSS Conflicts with Existing Styles

**Problem**: @appski/ui styles conflict with existing CSS.

**Solution**:

1. Import @appski/ui styles **after** your existing styles
2. Use CSS specificity to override specific styles
3. Consider using Tailwind's `@layer` directive for better organization

---

## Need Help?

- **Documentation**: [README.md](./README.md)
- **Storybook**: https://ui.appski.me
- **Issues**:
  [GitHub Issues](https://github.com/jazinski/appski-ui-components/issues)
- **Contributing**: [CONTRIBUTING.md](./CONTRIBUTING.md)

---

## Success Stories

After migrating to @appski/ui:

✅ **Faster Development** - Build features 2-3x faster with pre-built
components\
✅ **Better Consistency** - Unified design system across all pages\
✅ **Improved Accessibility** - WCAG 2.1 AA compliance out of the box\
✅ **Smaller Bundle** - Tree-shakeable components reduce bundle size\
✅ **TypeScript Support** - Full type safety catches bugs early\
✅ **Dark Mode** - Automatic dark mode support with no extra code

---

## Migration Checklist

Use this checklist to track your migration progress:

### Setup

- [ ] Install @appski/ui package
- [ ] Install Tailwind CSS v4
- [ ] Configure PostCSS
- [ ] Add theme variables to CSS
- [ ] Test basic component rendering
- [ ] Setup dark mode toggle

### Migration

- [ ] Migrate authentication pages
- [ ] Migrate dashboard/home page
- [ ] Migrate forms
- [ ] Migrate data tables
- [ ] Migrate modals/dialogs
- [ ] Migrate remaining pages

### Testing

- [ ] Test all migrated pages
- [ ] Test dark mode
- [ ] Test responsive design
- [ ] Test accessibility
- [ ] Run full E2E test suite

### Cleanup

- [ ] Remove old component library
- [ ] Update documentation
- [ ] Remove unused dependencies
- [ ] Final QA pass

---

**Ready to migrate?** Start with a small component and gradually expand. Good
luck! 🚀
