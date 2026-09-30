import { create } from '@storybook/theming/create';

/**
 * Unified dark theme for Blancski UI Components Storybook
 * Used by both manager (sidebar/UI) and preview (docs/canvas)
 * Last updated: 2026-01-25 - Testing cache purge
 */
export const blancskiDarkTheme = create({
  base: 'dark',

  // Brand
  brandTitle: 'Blancski',
  brandUrl: 'https://ui.appski.me',
  brandImage: '/logo-dark.png',
  brandTarget: '_self',

  // Colors - Glacier cyan accents on arctic slate
  colorPrimary: '#22d3ee', // cyan-400 (glacier)
  colorSecondary: '#67e8f9', // cyan-300 (glacier light)

  // UI backgrounds
  appBg: '#0f172a', // slate-900 - Main app background
  appContentBg: '#1e293b', // slate-800 - Content area background
  appPreviewBg: '#0f172a', // slate-900 - Preview/canvas background
  appBorderColor: '#334155', // slate-700 - Border color
  appBorderRadius: 4,

  // Typography
  fontBase: '"Inter", "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',
  fontCode: '"Fira Code", "Fira Mono", "Consolas", "Monaco", monospace',

  // Text colors
  textColor: '#f1f5f9', // slate-100 - Primary text
  textInverseColor: '#0f172a', // slate-900 - Inverse text (for light backgrounds)
  textMutedColor: '#94a3b8', // slate-400 - Secondary/muted text

  // Toolbar and addons
  barTextColor: '#cbd5e1', // slate-300 - Toolbar text
  barSelectedColor: '#22d3ee', // cyan-400 (glacier)
  barHoverColor: '#67e8f9', // cyan-300 (glacier light)
  barBg: '#1e293b', // slate-800 - Toolbar background

  // Buttons
  buttonBg: '#334155', // slate-700 - Button background
  buttonBorder: '#475569', // slate-600 - Button border
  booleanBg: '#475569', // slate-600 - Boolean toggle background
  booleanSelectedBg: '#22d3ee', // cyan-400 (glacier)

  // Form inputs
  inputBg: '#1e293b', // slate-800 - Input background
  inputBorder: '#475569', // slate-600 - Input border
  inputTextColor: '#f1f5f9', // slate-100 - Input text
  inputBorderRadius: 4,

  // Grid and layout
  gridCellSize: 12,
});

export default blancskiDarkTheme;
