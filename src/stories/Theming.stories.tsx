import type { Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Introduction/Theming',
  parameters: {
    layout: 'fullscreen',
    previewTabs: {
      'storybook/docs/panel': { index: -1 },
    },
  },
  tags: ['autodocs'],
};

export default meta;

/**
 * # Theming Guide for @appski/ui
 *
 * The @appski/ui component library is **brand-agnostic** and uses a **semantic theming system**.
 * Components reference semantic color names (like `primary`, `secondary`, `destructive`) rather than hardcoded color values.
 *
 * **Your application defines what these semantic names mean** by providing color values in your Tailwind configuration.
 *
 * ---
 *
 * ## 🎨 Two Theming Systems
 *
 * @appski/ui uses two complementary theming approaches:
 *
 * ### 1. HSL Variables (for Component Library Internal Use)
 *
 * CSS custom properties using HSL values that support light/dark mode switching:
 *
 * ```css
 * :root {
 *   --primary: 239 84% 67%;
 *   --primary-foreground: 0 0% 100%;
 * }
 * ```
 *
 * ### 2. Tailwind Theme Variables (for Utility Class Generation)
 *
 * Variables defined in Tailwind's `@theme` block that generate utility classes:
 *
 * ```css
 * @theme {
 *   --color-primary: #6366f1;
 *   --color-primary-foreground: #ffffff;
 * }
 * ```
 *
 * **Both systems must be configured** for components to display correctly.
 *
 * ---
 *
 * ## 🚀 Quick Start
 *
 * ### For Tailwind v4 Projects (Recommended)
 *
 * Add these variables to your `src/index.css` (or main CSS file):
 *
 * ```css
 * @import "tailwindcss";
 *
 * @theme {
 *   // @appski/ui Design System - Semantic Colors
 *
 *   // Primary colors
 *   --color-primary: #6366f1;
 *   --color-primary-foreground: #ffffff;
 *
 *   // Secondary colors
 *   --color-secondary: #e0e8ff;
 *   --color-secondary-foreground: #828df8;
 *
 *   // Accent colors
 *   --color-accent: #e0e8ff;
 *   --color-accent-foreground: #6467f2;
 *
 *   // Destructive colors
 *   --color-destructive: #ef4343;
 *   --color-destructive-foreground: #ffffff;
 *
 *   // Neutral colors
 *   --color-background: #f9fafb;
 *   --color-foreground: #344256;
 *   --color-muted: #f1f5f9;
 *   --color-muted-foreground: #64748b;
 *
 *   // Card colors
 *   --color-card: #ffffff;
 *   --color-card-foreground: #344256;
 *
 *   // Border and form colors
 *   --color-border: #e1e7ef;
 *   --color-input: #e1e7ef;
 *   --color-ring: #6467f2;
 * }
 *
 * // HSL variables for light/dark mode support
 * :root {
 *   --background: 210 20% 98%;
 *   --foreground: 215 25% 27%;
 *   --card: 0 0% 100%;
 *   --card-foreground: 215 25% 27%;
 *   --primary: 239 84% 67%;
 *   --primary-foreground: 0 0% 100%;
 *   --secondary: 226 100% 94%;
 *   --secondary-foreground: 234 89% 74%;
 *   --muted: 210 40% 96%;
 *   --muted-foreground: 215 16% 47%;
 *   --accent: 226 100% 94%;
 *   --accent-foreground: 239 84% 67%;
 *   --destructive: 0 84% 60%;
 *   --destructive-foreground: 0 0% 100%;
 *   --border: 214 32% 91%;
 *   --input: 214 32% 91%;
 *   --ring: 239 84% 67%;
 * }
 *
 * .dark {
 *   --background: 222 47% 11%;
 *   --foreground: 210 40% 98%;
 *   --card: 215 28% 17%;
 *   --card-foreground: 210 40% 98%;
 *   --primary: 239 84% 67%;
 *   --primary-foreground: 0 0% 100%;
 *   --secondary: 217 33% 17%;
 *   --secondary-foreground: 226 100% 94%;
 *   --muted: 217 33% 17%;
 *   --muted-foreground: 215 20% 65%;
 *   --accent: 217 33% 17%;
 *   --accent-foreground: 239 84% 67%;
 *   --destructive: 0 63% 31%;
 *   --destructive-foreground: 210 40% 98%;
 *   --border: 217 33% 17%;
 *   --input: 217 33% 17%;
 *   --ring: 239 84% 67%;
 * }
 * ```
 *
 * ---
 *
 * ## 📋 Required Theme Variables
 *
 * ### Core Colors (Required for Most Components)
 *
 * | Variable | Purpose | Example | Components |
 * |----------|---------|---------|------------|
 * | `--color-primary` | Main brand color | `#6366f1` | Button, Badge, Checkbox, Switch, Tabs |
 * | `--color-primary-foreground` | Text on primary | `#ffffff` | Button, Badge, Checkbox |
 * | `--color-secondary` | Secondary background | `#e0e8ff` | Button, Badge |
 * | `--color-secondary-foreground` | Text on secondary | `#828df8` | Button, Badge |
 * | `--color-accent` | Hover backgrounds | `#e0e8ff` | Button, Dialog, Tabs |
 * | `--color-accent-foreground` | Text on accent | `#6467f2` | Button, Dialog |
 * | `--color-destructive` | Error/delete color | `#ef4343` | Button, Badge, Alert, Input |
 * | `--color-destructive-foreground` | Text on destructive | `#ffffff` | Button, Badge |
 *
 * ### Neutral Colors (Required for Layout)
 *
 * | Variable | Purpose | Example | Components |
 * |----------|---------|---------|------------|
 * | `--color-background` | Page background | `#f9fafb` | All components |
 * | `--color-foreground` | Main text | `#344256` | All components |
 * | `--color-muted` | Muted backgrounds | `#f1f5f9` | PageHeader, Tabs, Skeleton |
 * | `--color-muted-foreground` | Muted text | `#64748b` | Helper text, placeholders |
 *
 * ### Component-Specific Colors
 *
 * | Variable | Purpose | Example | Components |
 * |----------|---------|---------|------------|
 * | `--color-card` | Card background | `#ffffff` | Card |
 * | `--color-card-foreground` | Card text | `#344256` | Card |
 * | `--color-border` | Borders | `#e1e7ef` | Dialog, PageHeader |
 * | `--color-input` | Input borders | `#e1e7ef` | Input, Select, Textarea |
 * | `--color-ring` | Focus rings | `#6467f2` | All interactive components |
 *
 * ---
 *
 * ## 🎨 Customizing for Your Brand
 *
 * The example values use Appski's indigo palette. **Change these to match your brand:**
 *
 * ### Example: Blue Brand
 *
 * ```css
 * @theme {
 *   --color-primary: #3b82f6;                // Blue-500
 *   --color-primary-foreground: #ffffff;
 *   --color-secondary: #dbeafe;              // Blue-100
 *   --color-secondary-foreground: #60a5fa;   // Blue-400
 *   --color-accent: #dbeafe;
 *   --color-accent-foreground: #3b82f6;
 * }
 * ```
 *
 * ### Example: Green Brand
 *
 * ```css
 * @theme {
 *   --color-primary: #10b981;                // Green-500
 *   --color-primary-foreground: #ffffff;
 *   --color-secondary: #d1fae5;              // Green-100
 *   --color-secondary-foreground: #34d399;   // Green-400
 *   --color-accent: #d1fae5;
 *   --color-accent-foreground: #10b981;
 * }
 * ```
 *
 * ---
 *
 * ## 🌓 Dark Mode Support
 *
 * Enable dark mode by adding the `dark` class to your HTML:
 *
 * ```html
 * <html class="dark">
 * ```
 *
 * Or toggle dynamically:
 *
 * ```javascript
 * document.documentElement.classList.toggle('dark');
 * localStorage.setItem('theme', isDark ? 'dark' : 'light');
 * ```
 *
 * Make sure to define dark mode values in your HSL variables (see Quick Start example).
 *
 * ---
 *
 * ## ❓ Common Questions
 *
 * ### Why define colors twice?
 *
 * - **HSL variables** enable dynamic light/dark mode switching
 * - **Tailwind theme variables** generate utility classes like `bg-primary`
 *
 * Both are needed for the complete system.
 *
 * ### What happens if I don't define a variable?
 *
 * Components will display with incorrect, missing, or transparent colors. Always define all required variables.
 *
 * ### Can I use different color formats?
 *
 * For `@theme` variables: Yes! Use hex, RGB, or oklch.
 * For HSL variables: Must use HSL format without `hsl()` wrapper.
 *
 * ---
 *
 * ## 📚 Additional Resources
 *
 * - [Complete Theming Guide (THEMING.md)](https://github.com/jazinski/appski-ui-components/blob/main/THEMING.md)
 * - [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs/v4-beta)
 * - [Component Examples](https://ui.appski.me)
 *
 * ---
 *
 * ## 💡 Need Help?
 *
 * 1. Check that all variables are defined in `@theme` and `:root`
 * 2. Verify Tailwind includes `@appski/ui` components in build
 * 3. Open an issue: [GitHub Issues](https://github.com/jazinski/appski-ui-components/issues)
 */
export const ThemingGuide = () => null;
