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
export declare const indigo_slate: Palette;
export declare const ocean: Palette;
export declare const forest: Palette;
export declare const sunset: Palette;
export declare const mono: Palette;
export declare const frost: Palette;
export declare const palettes: {
    readonly frost: Palette;
    readonly 'indigo-slate': Palette;
    readonly ocean: Palette;
    readonly forest: Palette;
    readonly sunset: Palette;
    readonly mono: Palette;
};
export type PaletteName = keyof typeof palettes;
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
export declare function applyPalette(palette: Palette, mode: PaletteMode, root?: HTMLElement | null): void;
//# sourceMappingURL=palettes.d.ts.map