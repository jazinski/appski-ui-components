# Theme Guidelines

## Overview

This project uses **semantic color tokens** defined in `src/theme.css` for all
styling. These tokens ensure consistent theming across light and dark modes.

## Important Rules

### ✅ DO: Always use semantic tokens

```tsx
// ✅ CORRECT - Uses semantic token
<div className="text-muted-foreground">Secondary text</div>

// ✅ CORRECT - Uses semantic token with hover
<a className="text-muted-foreground hover:text-foreground">Link</a>
```

### ❌ DON'T: Use hardcoded Tailwind colors

```tsx
// ❌ WRONG - Hardcoded colors
<div className="text-slate-600 dark:text-slate-400">Secondary text</div>

// ❌ WRONG - Hardcoded colors with hover
<a className="text-slate-600 hover:text-slate-700">Link</a>
```

## When Components Look Wrong

If a component has poor contrast or visibility issues:

1. **DO NOT** hardcode Tailwind colors in the component
2. **DO** adjust the semantic token in `src/theme.css`
3. **DO** test the change in both light and dark modes
4. **DO** ensure all components using that token still look good

### Example: Fixing Low Contrast

If breadcrumbs are hard to read in light mode:

```tsx
// ❌ WRONG APPROACH - Hardcoding colors
<a className="text-slate-600 dark:text-slate-400">Home</a>

// ✅ CORRECT APPROACH - Fix the theme token
// In src/theme.css:
--muted-foreground: 215 20% 40%;  /* Darker for better contrast */
```

## Available Semantic Tokens

### Color Tokens

| Token                      | Light Mode Use        | Dark Mode Use         |
| -------------------------- | --------------------- | --------------------- |
| `--foreground`             | Primary text          | Primary text          |
| `--background`             | Page background       | Page background       |
| `--muted-foreground`       | Secondary/dimmed text | Secondary/dimmed text |
| `--primary`                | Brand color, CTAs     | Brand color, CTAs     |
| `--primary-foreground`     | Text on primary bg    | Text on primary bg    |
| `--secondary`              | Secondary buttons     | Secondary buttons     |
| `--secondary-foreground`   | Text on secondary bg  | Text on secondary bg  |
| `--accent`                 | Hover states          | Hover states          |
| `--accent-foreground`      | Text on accent bg     | Text on accent bg     |
| `--destructive`            | Error states          | Error states          |
| `--destructive-foreground` | Text on error bg      | Text on error bg      |
| `--muted`                  | Muted backgrounds     | Muted backgrounds     |
| `--border`                 | Borders               | Borders               |
| `--input`                  | Input borders         | Input borders         |
| `--ring`                   | Focus rings           | Focus rings           |
| `--card`                   | Card backgrounds      | Card backgrounds      |
| `--card-foreground`        | Card text             | Card text             |
| `--popover`                | Popover backgrounds   | Popover backgrounds   |
| `--popover-foreground`     | Popover text          | Popover text          |

### Usage in Components

```tsx
// Text colors
className = "text-foreground"; // Primary text
className = "text-muted-foreground"; // Secondary text
className = "text-primary"; // Brand colored text
className = "text-destructive"; // Error text

// Backgrounds
className = "bg-background"; // Page background
className = "bg-card"; // Card background
className = "bg-primary"; // Primary button
className = "bg-muted"; // Muted background

// Borders
className = "border-border"; // Standard border
className = "border-input"; // Input border

// Interactive states
className = "hover:bg-accent"; // Hover background
className = "hover:text-accent-foreground"; // Hover text
className = "focus-visible:ring-ring"; // Focus ring
```

## Modifying Theme Tokens

### Location

All theme tokens are defined in `src/theme.css`:

```css
@layer base {
  :root {
    /* Light mode values */
    --muted-foreground: 215 20% 40%;
  }

  .dark {
    /* Dark mode values */
    --muted-foreground: 215 20% 65%;
  }
}
```

### HSL Format

Colors use HSL format without the `hsl()` wrapper:

```css
/* ✅ CORRECT */
--primary: 239 84% 67%;

/* ❌ WRONG */
--primary: hsl(239, 84%, 67%);
```

This allows us to use opacity modifiers in Tailwind:

```tsx
<div className="bg-primary/50">50% opacity primary</div>;
```

### Testing Changes

When modifying theme tokens:

1. Test in **both light and dark modes**
2. Check **all components** using that token:
   - Buttons
   - Navigation
   - Forms
   - Cards
   - Typography
3. Verify **hover states** and **focus states**
4. Check **accessibility contrast ratios** (WCAG AA minimum: 4.5:1 for text)

## Contrast Requirements

For accessibility (WCAG AA):

- Normal text: 4.5:1 contrast ratio minimum
- Large text (18px+): 3:1 contrast ratio minimum
- Interactive elements: 3:1 contrast ratio minimum

Use tools like
[WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) to
verify.

## Notes for Main Project

When using this component library in your main project:

1. You can override theme tokens by redefining CSS variables
2. Keep semantic token names consistent
3. If you need different values, override in your project's CSS:

```css
/* In your project's CSS */
:root {
  --muted-foreground: 215 20% 35%; /* Even darker */
}
```

## Recent Changes

### 2026-01-25: Improved Light Mode Contrast

- Changed `--muted-foreground` from `215 16% 47%` (slate-500) to `215 20% 40%`
  (slate-600)
- Reason: Breadcrumbs and secondary text were too light in light mode
- Impact: All components using `text-muted-foreground` now have better contrast
- Tested: Buttons, PageHeader breadcrumbs, form labels, card descriptions
