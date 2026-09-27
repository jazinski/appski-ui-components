# Color Palettes

Curated light/dark color palettes for `@appski/ui`, built on the library's
existing semantic token system (`src/theme.css`). The default theme is
unchanged; palettes are opt-in.

## Available palettes

| Palette         | Vibe / intended use                                                        |
| --------------- | -------------------------------------------------------------------------- |
| `indigo-slate`  | Refined default family: indigo primary on slate neutrals.                   |
| `ocean`         | Trustworthy blue/cyan family — dashboards, data-heavy internal tools.       |
| `forest`        | Calm green family — sustainability, monitoring, "operational" feel.         |
| `sunset`        | Warm orange/amber family — energy, highlights, consumer-flavored apps.      |
| `mono`          | Pure neutral grayscale — documentation, code-adjacent UI, max sobriety.     |

Every palette defines the full set of semantic tokens (background, foreground,
card, popover, primary, secondary, muted, accent, destructive, success,
warning, info, border, input, ring — plus each `*-foreground` pair) in both
`light` and `dark` modes.

## Usage

Palettes are plain data + a tiny runtime helper:

```tsx
import { palettes, applyPalette } from '@appski/ui/palettes';
// or: import { palettes, applyPalette } from './src/palettes';

// On theme init / mode toggle:
applyPalette(palettes.ocean, resolvedMode === 'dark' ? 'dark' : 'light');
```

`applyPalette` overrides the semantic CSS custom properties (e.g.
`--primary`) on `document.documentElement`, keeping the `H S% L%` format that
`src/theme.css` and Tailwind's `hsl(var(--token))` mapping expect — so opacity
modifiers like `bg-primary/50` keep working. Dark mode itself is toggled the
same way the library already supports (`.dark` class); call `applyPalette`
again with `'dark'` when it flips, or write both blocks into static CSS under
`:root` / `.dark` if you prefer zero runtime.

Status colors (`destructive`, `success`, `warning`, `info`) are intentionally
shared across palettes so alerting semantics stay consistent between themes.

## Accessibility

All palettes are verified WCAG 2.1 AA compliant programmatically (see
`src/palettes/palettes.test.ts`, which recomputes the contrast ratios from the
shipped token values on every test run):

- Text tokens vs their background: >= 4.5:1 (12 pairs per mode)
- UI tokens (primary, ring, destructive) vs background: >= 3:1
- Border/input vs background is intentionally subtle (~1.2:1), matching the
  default theme — borders are never the sole affordance in the components.

## Measured contrast (worst-case pairs)

| Palette         | Mode  | lowest text | lowest UI |
| --------------- | ----- | ----------- | --------- |
| indigo-slate    | light | 4.80        | 4.58      |
| indigo-slate    | dark  | 4.56        | 3.65      |
| ocean           | light | 4.80        | 4.58      |
| ocean           | dark  | 4.56        | 3.92      |
| forest          | light | 4.80        | 4.51      |
| forest          | dark  | 4.56        | 3.91      |
| sunset          | light | 4.80        | 4.58      |
| sunset          | dark  | 4.56        | 3.92      |
| mono            | light | 4.80        | 4.58      |
| mono            | dark  | 4.56        | 3.92      |
