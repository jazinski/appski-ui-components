# Theming Guide for @appski/ui

The @appski/ui component library is **brand-agnostic** and uses a **semantic
theming system**. This means components reference semantic color names (like
`primary`, `secondary`, `destructive`) rather than hardcoded color values.

**Your application defines what these semantic names mean** by providing color
values in your Tailwind configuration. This allows the same component library to
be reused across different brands and design systems.

---

## 🎨 Two Theming Systems

@appski/ui uses two complementary theming approaches:

### 1. HSL Variables (for Component Library Internal Use)

These CSS custom properties use HSL values and support light/dark mode
switching:

```css
:root {
  --primary: 239 84% 67%;
  --primary-foreground: 0 0% 100%;
  /* ... more HSL variables ... */
}
```

### 2. Tailwind Theme Variables (for Utility Class Generation)

These are defined in Tailwind's `@theme` block and generate utility classes like
`bg-primary`, `text-primary-foreground`, etc.:

```css
@theme {
  --color-primary: #6366f1;
  --color-primary-foreground: #ffffff;
  /* ... more Tailwind theme variables ... */
}
```

**Both systems must be configured** for the components to display correctly.

---

## 🚀 Quick Start

### For Tailwind v4 Projects (Recommended)

Add these variables to your `src/index.css` (or main CSS file):

```css
@import "tailwindcss";

@theme {
  /* @appski/ui Design System - Semantic Colors */

  /* Primary colors */
  --color-primary: #6366f1; /* Main brand color */
  --color-primary-foreground: #ffffff; /* Text on primary background */

  /* Secondary colors */
  --color-secondary: #e0e8ff; /* Secondary background */
  --color-secondary-foreground: #828df8; /* Text on secondary background */

  /* Accent colors */
  --color-accent: #e0e8ff; /* Accent background for hover states */
  --color-accent-foreground: #6467f2; /* Text on accent background */

  /* Destructive colors */
  --color-destructive: #ef4343; /* Error/destructive color */
  --color-destructive-foreground: #ffffff; /* Text on destructive background */

  /* Neutral colors */
  --color-background: #f9fafb; /* Page background */
  --color-foreground: #344256; /* Main text color */
  --color-muted: #f1f5f9; /* Muted background */
  --color-muted-foreground: #64748b; /* Muted text color */

  /* Card colors */
  --color-card: #ffffff; /* Card background */
  --color-card-foreground: #344256; /* Card text color */

  /* Border and form colors */
  --color-border: #e1e7ef; /* Border color */
  --color-input: #e1e7ef; /* Input border color */
  --color-ring: #6467f2; /* Focus ring color */

  /* Optional: Primary color scale for extended utilities */
  --color-primary-50: #eef2ff;
  --color-primary-100: #e0e7ff;
  --color-primary-200: #c7d2fe;
  --color-primary-300: #a5b4fc;
  --color-primary-400: #818cf8;
  --color-primary-500: #6366f1;
  --color-primary-600: #4f46e5;
  --color-primary-700: #4338ca;
  --color-primary-800: #3730a3;
  --color-primary-900: #312e81;
  --color-primary-950: #1e1b4b;
}

/* HSL variables for light/dark mode support */
:root {
  --background: 210 20% 98%;
  --foreground: 215 25% 27%;
  --card: 0 0% 100%;
  --card-foreground: 215 25% 27%;
  --popover: 0 0% 100%;
  --popover-foreground: 215 25% 27%;
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
  --popover: 215 28% 17%;
  --popover-foreground: 210 40% 98%;
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

---

## 📋 Complete Theme Variable Reference

### Required Tailwind Theme Variables

These **MUST** be defined in your `@theme` block for components to work:

| Variable                         | Purpose                 | Example Value | Used By                                                                            |
| -------------------------------- | ----------------------- | ------------- | ---------------------------------------------------------------------------------- |
| `--color-primary`                | Main brand color        | `#6366f1`     | Button (default), Badge (default), Checkbox, Switch, Tabs, Link                    |
| `--color-primary-foreground`     | Text on primary         | `#ffffff`     | Button (default), Badge (default), Checkbox                                        |
| `--color-secondary`              | Secondary background    | `#e0e8ff`     | Button (secondary), Badge (secondary)                                              |
| `--color-secondary-foreground`   | Text on secondary       | `#828df8`     | Button (secondary), Badge (secondary)                                              |
| `--color-accent`                 | Accent/hover background | `#e0e8ff`     | Button (outline, ghost), Dialog, Tabs                                              |
| `--color-accent-foreground`      | Text on accent          | `#6467f2`     | Button (outline, ghost), Dialog                                                    |
| `--color-destructive`            | Error/destructive color | `#ef4343`     | Button (destructive), Badge (destructive), Alert, Input, Checkbox                  |
| `--color-destructive-foreground` | Text on destructive     | `#ffffff`     | Button (destructive), Badge (destructive), Checkbox                                |
| `--color-background`             | Page background         | `#f9fafb`     | Button (outline), Dialog, Input, Select, Textarea, Toast                           |
| `--color-foreground`             | Main text color         | `#344256`     | Alert, Badge (outline), Breadcrumb, Card, Dialog, PageHeader, Textarea             |
| `--color-muted`                  | Muted background        | `#f1f5f9`     | PageHeader, Spinner, Skeleton, Tabs                                                |
| `--color-muted-foreground`       | Muted text              | `#64748b`     | Breadcrumb, Card, Checkbox, Dialog, Input, Select, Spinner, Switch, Tabs, Textarea |
| `--color-card`                   | Card background         | `#ffffff`     | Card                                                                               |
| `--color-card-foreground`        | Card text               | `#344256`     | Card                                                                               |
| `--color-border`                 | Border color            | `#e1e7ef`     | Dialog, PageHeader                                                                 |
| `--color-input`                  | Input border            | `#e1e7ef`     | Button (outline), Checkbox, Input, Select, Switch                                  |
| `--color-ring`                   | Focus ring color        | `#6467f2`     | Badge, Button, Checkbox, Dialog, Input, Select, Switch, Tabs, Textarea             |

### Required HSL Variables

These **MUST** be defined in `:root` and `.dark` for light/dark mode support:

```css
:root {
  /* Light mode values */
  --background: 210 20% 98%;
  --foreground: 215 25% 27%;
  --card: 0 0% 100%;
  --card-foreground: 215 25% 27%;
  --popover: 0 0% 100%;
  --popover-foreground: 215 25% 27%;
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
  /* Dark mode values */
  --background: 222 47% 11%;
  --foreground: 210 40% 98%;
  --card: 215 28% 17%;
  --card-foreground: 210 40% 98%;
  --popover: 215 28% 17%;
  --popover-foreground: 210 40% 98%;
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
```

---

## 🎨 Customizing Colors for Your Brand

The example values above use the Appski indigo color palette. **You can and
should change these** to match your brand:

### Example: Blue Brand

```css
@theme {
  --color-primary: #3b82f6; /* Blue-500 */
  --color-primary-foreground: #ffffff;
  --color-secondary: #dbeafe; /* Blue-100 */
  --color-secondary-foreground: #60a5fa; /* Blue-400 */
  --color-accent: #dbeafe;
  --color-accent-foreground: #3b82f6;
  /* ... rest of colors ... */
}
```

### Example: Green Brand

```css
@theme {
  --color-primary: #10b981; /* Green-500 */
  --color-primary-foreground: #ffffff;
  --color-secondary: #d1fae5; /* Green-100 */
  --color-secondary-foreground: #34d399; /* Green-400 */
  --color-accent: #d1fae5;
  --color-accent-foreground: #10b981;
  /* ... rest of colors ... */
}
```

---

## 🔧 Component-Specific Theming Requirements

### Button Component

**Required variables:**

- `--color-primary`, `--color-primary-foreground` (default variant)
- `--color-secondary`, `--color-secondary-foreground` (secondary variant)
- `--color-accent`, `--color-accent-foreground` (outline, ghost variants)
- `--color-destructive`, `--color-destructive-foreground` (destructive variant)
- `--color-background`, `--color-input` (outline variant)
- `--color-ring` (focus states)

**Variants:**

- `default`: Uses `bg-primary`, `text-primary-foreground`
- `secondary`: Uses `bg-secondary`, `text-secondary-foreground`
- `outline`: Uses `border-input`, `bg-background`, `hover:bg-accent`
- `ghost`: Uses `hover:bg-accent`, `hover:text-accent-foreground`
- `destructive`: Uses `bg-destructive`, `text-destructive-foreground`
- `link`: Uses `text-primary`

### Input, Select, Textarea Components

**Required variables:**

- `--color-background` (input background)
- `--color-input` (border)
- `--color-foreground` (text)
- `--color-muted-foreground` (placeholder, helper text)
- `--color-destructive` (error state)
- `--color-ring` (focus state)

### Badge Component

**Required variables:**

- `--color-primary`, `--color-primary-foreground` (default)
- `--color-secondary`, `--color-secondary-foreground` (secondary)
- `--color-destructive`, `--color-destructive-foreground` (destructive)
- `--color-foreground` (outline)

### Card Component

**Required variables:**

- `--color-card` (card background)
- `--color-card-foreground` (card text)
- `--color-muted-foreground` (card description)
- `--color-border` (implicit via border)

### Alert, Dialog, Toast Components

**Required variables:**

- `--color-background` (component background)
- `--color-foreground` (text)
- `--color-muted-foreground` (secondary text)
- `--color-border` (borders)
- `--color-ring` (focus states)

---

## 🌓 Dark Mode Support

The library supports dark mode through CSS classes. Add this to your HTML:

```html
<html class="dark">
  <!-- Your app -->
</html>
```

Or use a dark mode toggle:

```javascript
// Toggle dark mode
document.documentElement.classList.toggle("dark");

// Save preference
localStorage.setItem("theme", isDark ? "dark" : "light");
```

Make sure to define dark mode variants in your HSL variables (see example
above).

---

## ❓ FAQ

### Why do I need to define colors twice (HSL and Tailwind)?

- **HSL variables** are used internally by components for dynamic light/dark
  mode switching
- **Tailwind theme variables** generate utility classes like `bg-primary` that
  Tailwind CSS uses

Both are necessary for the complete theming system to work.

### Can I use a different color format (RGB, oklch)?

For Tailwind theme variables (`@theme`), yes! You can use:

- Hex: `--color-primary: #6366f1;`
- RGB: `--color-primary: rgb(99 102 241);`
- oklch: `--color-primary: oklch(62% 0.21 264);`

For HSL variables (`:root`), you must use HSL format without the `hsl()`
wrapper.

### What if I don't define all the variables?

Components will either:

1. Use fallback Tailwind colors (if available)
2. Display with incorrect or missing colors
3. Show no color at all (transparent)

Always define all required variables for the components you use.

### Can I use different colors for different components?

Yes! You can create custom variants or override component styles. However, the
semantic naming system encourages consistency across your design system.

---

## 🔗 Related Resources

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs/v4-beta)
- [Storybook - @appski/ui](https://ui.appski.me)
- [GitHub Repository](https://github.com/jazinski/appski-ui-components)

---

## 💡 Need Help?

If you encounter theming issues:

1. Verify all required variables are defined in your `@theme` block
2. Check that HSL variables are defined in `:root` and `.dark`
3. Ensure your Tailwind build process includes the `@appski/ui` components
4. Check the browser console for CSS variable errors
5. Open an issue on
   [GitHub](https://github.com/jazinski/appski-ui-components/issues)
