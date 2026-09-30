/**
 * Curated color palettes for @blancski/ui — light and dark mode pairs.
 *
 * Every palette uses the same semantic token names as `src/theme.css`, so a
 * palette can be applied by overriding the CSS custom properties (see
 * `applyPalette`). All foreground/background pairs were verified to meet
 * WCAG 2.1 AA (>= 4.5:1 text, >= 3:1 UI) programmatically; the measured
 * ratios live in `palettes.test.ts` assertions and PALETTES.md.
 */

export type PaletteMode = 'light' | 'dark';

export interface PaletteTokens {
  background: string;
  foreground: string;
  card: string;
  'card-foreground': string;
  popover: string;
  'popover-foreground': string;
  primary: string;
  'primary-foreground': string;
  secondary: string;
  'secondary-foreground': string;
  muted: string;
  'muted-foreground': string;
  accent: string;
  'accent-foreground': string;
  destructive: string;
  'destructive-foreground': string;
  success: string;
  'success-foreground': string;
  warning: string;
  'warning-foreground': string;
  info: string;
  'info-foreground': string;
  border: string;
  input: string;
  ring: string;
}

export interface Palette {
  /** Human description of the palette's intended use. */
  description: string;
  light: PaletteTokens;
  dark: PaletteTokens;
}

/** Default palette family (refined). */
export const indigo_slate: Palette = {
  description: 'Indigo primary on slate neutrals — the house style (refined default; brighter dark-mode primary for AA).',
  light: {
    background: '210 20% 98%',
    foreground: '215 25% 27%',
    card: '0 0% 100%',
    'card-foreground': '215 25% 27%',
    popover: '0 0% 100%',
    'popover-foreground': '215 25% 27%',
    primary: '239 84% 55%',
    'primary-foreground': '0 0% 100%',
    secondary: '226 100% 94%',
    'secondary-foreground': '234 89% 56%',
    muted: '210 40% 96%',
    'muted-foreground': '215 25% 27%',
    accent: '226 100% 94%',
    'accent-foreground': '239 84% 55%',
    destructive: '0 72% 51%',
    'destructive-foreground': '0 0% 100%',
    success: '142 76% 28%',
    'success-foreground': '0 0% 100%',
    warning: '25 95% 53%',
    'warning-foreground': '222 47% 11%',
    info: '217 91% 50%',
    'info-foreground': '0 0% 100%',
    border: '214 32% 91%',
    input: '214 32% 91%',
    ring: '239 84% 55%',
  },
  dark: {
    background: '222 47% 11%',
    foreground: '210 40% 98%',
    card: '215 28% 17%',
    'card-foreground': '210 40% 98%',
    popover: '215 28% 17%',
    'popover-foreground': '210 40% 98%',
    primary: '239 92% 66%',
    'primary-foreground': '236 100% 99%',
    secondary: '217 33% 17%',
    'secondary-foreground': '215 28% 85%',
    muted: '217 33% 17%',
    'muted-foreground': '215 20% 82%',
    accent: '217 33% 17%',
    'accent-foreground': '234 89% 74%',
    destructive: '0 74% 53%',
    'destructive-foreground': '0 0% 100%',
    success: '142 76% 28%',
    'success-foreground': '0 0% 100%',
    warning: '38 92% 50%',
    'warning-foreground': '222 47% 11%',
    info: '217 91% 50%',
    'info-foreground': '0 0% 100%',
    border: '217 33% 24%',
    input: '217 33% 24%',
    ring: '239 92% 67%',
  },
};

export const ocean: Palette = {
  description: 'Trustworthy blue/cyan family — dashboards, data-heavy internal tools.',
  light: {
    background: '210 30% 98%',
    foreground: '215 30% 22%',
    card: '0 0% 100%',
    'card-foreground': '215 30% 22%',
    popover: '0 0% 100%',
    'popover-foreground': '215 30% 22%',
    primary: '221 83% 45%',
    'primary-foreground': '0 0% 100%',
    secondary: '203 100% 94%',
    'secondary-foreground': '221 70% 38%',
    muted: '210 40% 96%',
    'muted-foreground': '215 25% 30%',
    accent: '203 100% 94%',
    'accent-foreground': '221 83% 45%',
    destructive: '0 72% 51%',
    'destructive-foreground': '0 0% 100%',
    success: '142 76% 28%',
    'success-foreground': '0 0% 100%',
    warning: '25 95% 53%',
    'warning-foreground': '222 47% 11%',
    info: '217 91% 50%',
    'info-foreground': '0 0% 100%',
    border: '214 32% 91%',
    input: '214 32% 91%',
    ring: '221 83% 45%',
  },
  dark: {
    background: '222 50% 8%',
    foreground: '210 40% 98%',
    card: '217 35% 14%',
    'card-foreground': '210 40% 98%',
    popover: '217 35% 14%',
    'popover-foreground': '210 40% 98%',
    primary: '199 95% 62%',
    'primary-foreground': '222 60% 10%',
    secondary: '217 35% 16%',
    'secondary-foreground': '203 60% 82%',
    muted: '217 35% 16%',
    'muted-foreground': '211 25% 82%',
    accent: '217 35% 16%',
    'accent-foreground': '199 90% 70%',
    destructive: '0 74% 53%',
    'destructive-foreground': '0 0% 100%',
    success: '142 76% 28%',
    'success-foreground': '0 0% 100%',
    warning: '38 92% 50%',
    'warning-foreground': '222 47% 11%',
    info: '217 91% 50%',
    'info-foreground': '0 0% 100%',
    border: '217 33% 22%',
    input: '217 33% 22%',
    ring: '199 95% 62%',
  },
};

export const forest: Palette = {
  description: 'Calm green family — sustainability, monitoring, "operational" feel.',
  light: {
    background: '150 12% 97%',
    foreground: '155 22% 20%',
    card: '0 0% 100%',
    'card-foreground': '155 22% 20%',
    popover: '0 0% 100%',
    'popover-foreground': '155 22% 20%',
    primary: '150 70% 27%',
    'primary-foreground': '0 0% 100%',
    secondary: '150 45% 92%',
    'secondary-foreground': '152 60% 26%',
    muted: '150 15% 94%',
    'muted-foreground': '152 18% 28%',
    accent: '150 45% 92%',
    'accent-foreground': '150 70% 27%',
    destructive: '0 72% 51%',
    'destructive-foreground': '0 0% 100%',
    success: '142 76% 28%',
    'success-foreground': '0 0% 100%',
    warning: '25 95% 53%',
    'warning-foreground': '222 47% 11%',
    info: '217 91% 50%',
    'info-foreground': '0 0% 100%',
    border: '152 18% 88%',
    input: '152 18% 88%',
    ring: '150 70% 27%',
  },
  dark: {
    background: '160 25% 8%',
    foreground: '150 20% 96%',
    card: '158 20% 13%',
    'card-foreground': '150 20% 96%',
    popover: '158 20% 13%',
    'popover-foreground': '150 20% 96%',
    primary: '160 70% 55%',
    'primary-foreground': '163 80% 8%',
    secondary: '158 18% 15%',
    'secondary-foreground': '152 20% 80%',
    muted: '158 18% 15%',
    'muted-foreground': '152 15% 80%',
    accent: '158 18% 15%',
    'accent-foreground': '160 60% 62%',
    destructive: '0 74% 53%',
    'destructive-foreground': '0 0% 100%',
    success: '142 76% 28%',
    'success-foreground': '0 0% 100%',
    warning: '38 92% 50%',
    'warning-foreground': '222 47% 11%',
    info: '217 91% 50%',
    'info-foreground': '0 0% 100%',
    border: '158 16% 21%',
    input: '158 16% 21%',
    ring: '160 70% 55%',
  },
};

export const sunset: Palette = {
  description: 'Warm orange/amber family — energy, highlights, consumer-flavored apps.',
  light: {
    background: '30 25% 97%',
    foreground: '25 25% 20%',
    card: '0 0% 100%',
    'card-foreground': '25 25% 20%',
    popover: '0 0% 100%',
    'popover-foreground': '25 25% 20%',
    primary: '24 85% 40%',
    'primary-foreground': '0 0% 100%',
    secondary: '28 100% 93%',
    'secondary-foreground': '20 80% 35%',
    muted: '30 20% 94%',
    'muted-foreground': '25 20% 30%',
    accent: '28 100% 93%',
    'accent-foreground': '24 90% 33%',
    destructive: '0 72% 51%',
    'destructive-foreground': '0 0% 100%',
    success: '142 76% 28%',
    'success-foreground': '0 0% 100%',
    warning: '25 95% 53%',
    'warning-foreground': '222 47% 11%',
    info: '217 91% 50%',
    'info-foreground': '0 0% 100%',
    border: '26 20% 88%',
    input: '26 20% 88%',
    ring: '24 85% 40%',
  },
  dark: {
    background: '20 30% 9%',
    foreground: '35 30% 96%',
    card: '22 26% 14%',
    'card-foreground': '35 30% 96%',
    popover: '22 26% 14%',
    'popover-foreground': '35 30% 96%',
    primary: '27 95% 58%',
    'primary-foreground': '25 60% 9%',
    secondary: '22 24% 16%',
    'secondary-foreground': '30 25% 80%',
    muted: '22 24% 16%',
    'muted-foreground': '30 20% 80%',
    accent: '22 24% 16%',
    'accent-foreground': '28 90% 65%',
    destructive: '0 74% 53%',
    'destructive-foreground': '0 0% 100%',
    success: '142 76% 28%',
    'success-foreground': '0 0% 100%',
    warning: '38 92% 50%',
    'warning-foreground': '222 47% 11%',
    info: '217 91% 50%',
    'info-foreground': '0 0% 100%',
    border: '22 22% 22%',
    input: '22 22% 22%',
    ring: '27 95% 58%',
  },
};

export const mono: Palette = {
  description: 'Pure neutral grayscale — documentation, code-adjacent UI, maximal sobriety.',
  light: {
    background: '0 0% 98%',
    foreground: '0 0% 12%',
    card: '0 0% 100%',
    'card-foreground': '0 0% 12%',
    popover: '0 0% 100%',
    'popover-foreground': '0 0% 12%',
    primary: '0 0% 12%',
    'primary-foreground': '0 0% 100%',
    secondary: '0 0% 94%',
    'secondary-foreground': '0 0% 20%',
    muted: '0 0% 94%',
    'muted-foreground': '0 0% 28%',
    accent: '0 0% 92%',
    'accent-foreground': '0 0% 12%',
    destructive: '0 72% 51%',
    'destructive-foreground': '0 0% 100%',
    success: '142 76% 28%',
    'success-foreground': '0 0% 100%',
    warning: '25 95% 53%',
    'warning-foreground': '222 47% 11%',
    info: '217 91% 50%',
    'info-foreground': '0 0% 100%',
    border: '0 0% 87%',
    input: '0 0% 87%',
    ring: '0 0% 12%',
  },
  dark: {
    background: '0 0% 7%',
    foreground: '0 0% 95%',
    card: '0 0% 12%',
    'card-foreground': '0 0% 95%',
    popover: '0 0% 12%',
    'popover-foreground': '0 0% 95%',
    primary: '0 0% 95%',
    'primary-foreground': '0 0% 7%',
    secondary: '0 0% 15%',
    'secondary-foreground': '0 0% 80%',
    muted: '0 0% 15%',
    'muted-foreground': '0 0% 70%',
    accent: '0 0% 18%',
    'accent-foreground': '0 0% 95%',
    destructive: '0 74% 53%',
    'destructive-foreground': '0 0% 100%',
    success: '142 76% 28%',
    'success-foreground': '0 0% 100%',
    warning: '38 92% 50%',
    'warning-foreground': '222 47% 11%',
    info: '217 91% 50%',
    'info-foreground': '0 0% 100%',
    border: '0 0% 22%',
    input: '0 0% 22%',
    ring: '0 0% 95%',
  },
};

export const frost: Palette = {
  description: 'Alpine-winter identity — glacier-blue primary on powder-white in light mode, ice-cyan over deep slate in dark. Default palette.',
  light: {
    background: '210 40% 98%',
    foreground: '215 25% 27%',
    card: '0 0% 100%',
    'card-foreground': '215 25% 27%',
    popover: '0 0% 100%',
    'popover-foreground': '215 25% 27%',
    primary: '199 89% 36%',
    'primary-foreground': '0 0% 100%',
    secondary: '199 60% 94%',
    'secondary-foreground': '201 90% 27%',
    muted: '210 30% 95%',
    'muted-foreground': '215 20% 40%',
    accent: '199 60% 94%',
    'accent-foreground': '199 89% 32%',
    destructive: '0 72% 48%',
    'destructive-foreground': '0 0% 100%',
    success: '142 76% 28%',
    'success-foreground': '0 0% 100%',
    warning: '25 95% 53%',
    'warning-foreground': '222 47% 11%',
    info: '217 91% 50%',
    'info-foreground': '0 0% 100%',
    border: '210 30% 90%',
    input: '210 30% 90%',
    ring: '199 89% 42%',
  },
  dark: {
    background: '215 30% 9%',
    foreground: '210 40% 96%',
    card: '215 26% 14%',
    'card-foreground': '210 40% 96%',
    popover: '215 26% 14%',
    'popover-foreground': '210 40% 96%',
    primary: '187 90% 56%',
    'primary-foreground': '212 40% 9%',
    secondary: '200 30% 17%',
    'secondary-foreground': '187 75% 72%',
    muted: '216 25% 15%',
    'muted-foreground': '214 20% 76%',
    accent: '200 30% 17%',
    'accent-foreground': '187 85% 75%',
    destructive: '0 80% 65%',
    'destructive-foreground': '222 47% 11%',
    success: '152 60% 45%',
    'success-foreground': '222 47% 11%',
    warning: '38 92% 55%',
    'warning-foreground': '222 47% 11%',
    info: '199 90% 60%',
    'info-foreground': '212 40% 9%',
    border: '214 25% 22%',
    input: '214 25% 22%',
    ring: '187 90% 56%',
  },
};

export const palettes = {
  frost,
  'indigo-slate': indigo_slate,
  ocean,
  forest,
  sunset,
  mono,
} as const;

export type PaletteName = keyof typeof palettes;

const CSS_PROPERTY_NAMES: Record<keyof PaletteTokens, string> = {
  background: '--background',
  foreground: '--foreground',
  card: '--card',
  'card-foreground': '--card-foreground',
  popover: '--popover',
  'popover-foreground': '--popover-foreground',
  primary: '--primary',
  'primary-foreground': '--primary-foreground',
  secondary: '--secondary',
  'secondary-foreground': '--secondary-foreground',
  muted: '--muted',
  'muted-foreground': '--muted-foreground',
  accent: '--accent',
  'accent-foreground': '--accent-foreground',
  destructive: '--destructive',
  'destructive-foreground': '--destructive-foreground',
  success: '--success',
  'success-foreground': '--success-foreground',
  warning: '--warning',
  'warning-foreground': '--warning-foreground',
  info: '--info',
  'info-foreground': '--info-foreground',
  border: '--border',
  input: '--input',
  ring: '--ring',
};

/**
 * Apply a palette by overriding the semantic CSS custom properties on a root
 * element (defaults to `document.documentElement`, i.e. `:root`). Values keep
 * the `H S% L%` format used by `src/theme.css` so Tailwind's
 * `hsl(var(--token))` mapping keeps working, including opacity modifiers.
 *
 * Toggle dark mode separately (e.g. the `dark` class) and call this again with
 * the matching mode, or apply both modes under `:root` / `.dark` selectors
 * yourself when generating static CSS.
 */
export function applyPalette(
  palette: Palette,
  mode: PaletteMode,
  root: HTMLElement | null = typeof document !== 'undefined' ? document.documentElement : null,
): void {
  if (!root) return;
  const tokens = palette[mode];
  for (const token of Object.keys(tokens) as (keyof PaletteTokens)[]) {
    root.style.setProperty(CSS_PROPERTY_NAMES[token], tokens[token]);
  }
}
