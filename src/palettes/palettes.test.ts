import { describe, expect, it } from 'vitest';
import { palettes, applyPalette, type PaletteTokens } from './palettes';

const TOKEN_PATTERN = /^\d{1,3} \d{1,3}% \d{1,3}%$/;

function hslToRgb(value: string): [number, number, number] {
  const [h, s, l] = value.split(' ').map((part) => Number.parseFloat(part));
  const sat = s / 100;
  const light = l / 100;
  const c = (1 - Math.abs(2 * light - 1)) * sat;
  const hp = h / 60;
  const x = c * (1 - Math.abs((hp % 2) - 1));
  let rgb: [number, number, number];
  if (hp < 1) rgb = [c, x, 0];
  else if (hp < 2) rgb = [x, c, 0];
  else if (hp < 3) rgb = [0, c, x];
  else if (hp < 4) rgb = [0, x, c];
  else if (hp < 5) rgb = [x, 0, c];
  else rgb = [c, 0, x];
  const m = light - c / 2;
  return rgb.map((v) => (v + m) * 255) as [number, number, number];
}

function luminance(rgb: [number, number, number]): number {
  const [r, g, b] = rgb.map((v) => {
    const c = v / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrastRatio(a: string, b: string): number {
  const la = luminance(hslToRgb(a));
  const lb = luminance(hslToRgb(b));
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

// WCAG 2.1 AA: 4.5:1 for text, 3:1 for UI components against their background.
const TEXT_PAIRS: [keyof PaletteTokens, keyof PaletteTokens][] = [
  ['foreground', 'background'],
  ['card-foreground', 'card'],
  ['popover-foreground', 'popover'],
  ['primary-foreground', 'primary'],
  ['secondary-foreground', 'secondary'],
  ['muted-foreground', 'muted'],
  ['muted-foreground', 'background'],
  ['accent-foreground', 'accent'],
  ['destructive-foreground', 'destructive'],
  ['success-foreground', 'success'],
  ['warning-foreground', 'warning'],
  ['info-foreground', 'info'],
];

const UI_PAIRS: [keyof PaletteTokens, keyof PaletteTokens][] = [
  ['primary', 'background'],
  ['ring', 'background'],
  ['destructive', 'background'],
];

const EXPECTED_TOKENS = Object.keys(palettes.mono.light) as (keyof PaletteTokens)[];

describe('palettes', () => {
  for (const [name, palette] of Object.entries(palettes)) {
    describe(name, () => {
      it('has a description', () => {
        expect(palette.description.length).toBeGreaterThan(10);
      });

      for (const mode of ['light', 'dark'] as const) {
        it(`${mode} mode defines every semantic token in H S% L% format`, () => {
          const tokens = palette[mode];
          for (const token of EXPECTED_TOKENS) {
            expect(tokens[token], `${name}.${mode}.${token}`).toMatch(TOKEN_PATTERN);
          }
        });

        it(`${mode} mode meets WCAG AA text contrast (>= 4.5:1)`, () => {
          for (const [fg, bg] of TEXT_PAIRS) {
            const ratio = contrastRatio(palette[mode][fg], palette[mode][bg]);
            expect(ratio, `${name}.${mode} ${fg} on ${bg}`).toBeGreaterThanOrEqual(4.5);
          }
        });

        it(`${mode} mode meets WCAG AA UI contrast (>= 3:1)`, () => {
          for (const [fg, bg] of UI_PAIRS) {
            const ratio = contrastRatio(palette[mode][fg], palette[mode][bg]);
            expect(ratio, `${name}.${mode} ${fg} on ${bg}`).toBeGreaterThanOrEqual(3);
          }
        });
      }
    });
  }

  describe('applyPalette', () => {
    it('overrides semantic CSS custom properties on the root element', () => {
      applyPalette(palettes.ocean, 'light');
      const root = document.documentElement;
      expect(root.style.getPropertyValue('--primary')).toBe('221 83% 45%');
      expect(root.style.getPropertyValue('--background')).toBe('210 30% 98%');
      expect(root.style.getPropertyValue('--card-foreground')).toBe('215 30% 22%');
      expect(root.style.getPropertyValue('--muted-foreground')).toBe('215 25% 30%');
    });

    it('applies dark mode values when requested', () => {
      applyPalette(palettes.forest, 'dark');
      const root = document.documentElement;
      expect(root.style.getPropertyValue('--primary')).toBe('160 70% 55%');
      expect(root.style.getPropertyValue('--background')).toBe('160 25% 8%');
    });
  });
});
