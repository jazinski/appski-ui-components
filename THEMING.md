# Theming Guide for @blancski/ui

The @blancski/ui component library is **brand-agnostic** and uses a **semantic
theming system**. This means components reference semantic color names (like
`primary`, `secondary`, `destructive`) rather than hardcoded color values.

**Your application defines what these semantic names mean** by providing color
values in your Tailwind configuration. This allows the same component library to
be reused across different brands and design systems.

---

## 🎨 Two Theming Systems

@blancski/ui uses two complementary theming approaches:

### 1. HSL Variables (for Component Library Internal Use)

These CSS custom properties use HSL values and support light/dark mode
switching:

```css
:root {
  --primary: 191 90% 32%;
  --primary-foreground: 0 0% 100%;
  /* ... more HSL variables ... */
}
```

### 2. Tailwind Theme Variables (for Utility Class Generation)

These are defined in Tailwind's `@theme` block and generate utility classes like
`bg-primary`, `text-primary-foreground`, etc.:

```css
@theme {
  --color-primary: #08809b;
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
  /* @blancski/ui Design System - Semantic Colors */

  /* Primary colors */
  --color-primary: #08809b; /* Main brand color */
  --color-primary-foreground: #ffffff; /* Text on primary background */

  /* Secondary colors */
  --color-secondary: #e1f6fa; /* Secondary background */
  --color-secondary-foreground: #0a647b; /* Text on secondary background */

  /* Accent colors */
  --color-accent: #e0e8ff; /* Accent background for hover states */
  --color-accent-foreground: #077088; /* Text on accent background */

  /* Destructive colors */
  --color-destructive: #ef4343; /* Error/destructive color */
  --color-destructive-foreground: #ffffff; /* Text on destructive background */

  /* Neutral colors */
  --color-background: #f8fafb; /* Page background */
  --color-foreground: #2a4051; /* Main text color */
  --color-muted: #eff3f5; /* Muted background */
  --color-muted-foreground: #395060; /* Muted text color */

  /* Card colors */
  --color-card: #ffffff; /* Card background */
  --color-card-foreground: #2a4051; /* Card text color */

  /* Border and form colors */
  --color-border: #d9e2e8; /* Border color */
  --color-input: #d9e2e8; /* Input border color */
  --color-ring: #08809b; /* Focus ring color */

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
  --background: 200 30% 98%;
  --foreground: 205 32% 24%;
  --card: 0 0% 100%;
  --card-foreground: 205 32% 24%;
  --popover: 0 0% 100%;
  --popover-foreground: 205 32% 24%;
  --primary: 191 90% 32%;
  --primary-foreground: 0 0% 100%;
  --secondary: 189 70% 93%;
  --secondary-foreground: 192 85% 26%;
  --muted: 200 25% 95%;
  --muted-foreground: 205 25% 30%;
  --accent: 189 70% 93%;
  --accent-foreground: 191 90% 28%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 100%;
  --border: 200 22% 87%;
  --input: 200 22% 87%;
  --ring: 191 90% 32%;
}

.dark {
  --background: 206 45% 8%;
  --foreground: 190 30% 96%;
  --card: 204 35% 13%;
  --card-foreground: 190 30% 96%;
  --popover: 204 35% 13%;
  --popover-foreground: 190 30% 96%;
  --primary: 191 90% 32%;
  --primary-foreground: 0 0% 100%;
  --secondary: 204 30% 16%;
  --secondary-foreground: 190 35% 80%;
  --muted: 204 30% 16%;
  --muted-foreground: 205 20% 80%;
  --accent: 204 30% 16%;
  --accent-foreground: 191 90% 28%;
  --destructive: 0 63% 31%;
  --destructive-foreground: 210 40% 98%;
  --border: 204 28% 22%;
  --input: 204 28% 22%;
  --ring: 191 90% 32%;
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
  --background: 200 30% 98%;
  --foreground: 205 32% 24%;
  --card: 0 0% 100%;
  --card-foreground: 205 32% 24%;
  --popover: 0 0% 100%;
  --popover-foreground: 205 32% 24%;
  --primary: 191 90% 32%;
  --primary-foreground: 0 0% 100%;
  --secondary: 189 70% 93%;
  --secondary-foreground: 192 85% 26%;
  --muted: 200 25% 95%;
  --muted-foreground: 205 25% 30%;
  --accent: 189 70% 93%;
  --accent-foreground: 191 90% 28%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 100%;
  --border: 200 22% 87%;
  --input: 200 22% 87%;
  --ring: 191 90% 32%;
}

.dark {
  /* Dark mode values */
  --background: 206 45% 8%;
  --foreground: 190 30% 96%;
  --card: 204 35% 13%;
  --card-foreground: 190 30% 96%;
  --popover: 204 35% 13%;
  --popover-foreground: 190 30% 96%;
  --primary: 191 90% 32%;
  --primary-foreground: 0 0% 100%;
  --secondary: 204 30% 16%;
  --secondary-foreground: 190 35% 80%;
  --muted: 204 30% 16%;
  --muted-foreground: 205 20% 80%;
  --accent: 204 30% 16%;
  --accent-foreground: 191 90% 28%;
  --destructive: 0 63% 31%;
  --destructive-foreground: 210 40% 98%;
  --border: 204 28% 22%;
  --input: 204 28% 22%;
  --ring: 191 90% 32%;
}
```

---

## 🎨 Customizing Colors for Your Brand

The example values above use the Blancski indigo color palette. **You can and
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

- Hex: `--color-primary: #08809b;`
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
- [Storybook - @blancski/ui](https://ui.appski.me)
- [GitHub Repository](https://github.com/jazinski/appski-ui-components)

---

## 💡 Need Help?

If you encounter theming issues:

1. Verify all required variables are defined in your `@theme` block
2. Check that HSL variables are defined in `:root` and `.dark`
3. Ensure your Tailwind build process includes the `@blancski/ui` components
4. Check the browser console for CSS variable errors
5. Open an issue on
   [GitHub](https://github.com/jazinski/appski-ui-components/issues)
