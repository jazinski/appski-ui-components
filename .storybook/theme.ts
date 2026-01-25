import { create } from '@storybook/theming/create';

/**
 * Unified dark theme for Appski UI Components Storybook
 * Used by both manager (sidebar/UI) and preview (docs/canvas)
 * Last updated: 2026-01-25 - Testing cache purge
 */
export const appskiDarkTheme = create({
  base: 'dark',

  // Brand
  brandTitle: 'Appski',
  brandUrl: 'https://ui.appski.me',
  brandImage: '/logo-dark.png',
  brandTarget: '_self',

  // Colors - Using Tailwind slate colors
  colorPrimary: '#3b82f6', // blue-500
  colorSecondary: '#60a5fa', // blue-400

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
  barSelectedColor: '#3b82f6', // blue-500 - Selected item
  barHoverColor: '#60a5fa', // blue-400 - Hover state
  barBg: '#1e293b', // slate-800 - Toolbar background

  // Buttons
  buttonBg: '#334155', // slate-700 - Button background
  buttonBorder: '#475569', // slate-600 - Button border
  booleanBg: '#475569', // slate-600 - Boolean toggle background
  booleanSelectedBg: '#3b82f6', // blue-500 - Boolean toggle selected

  // Form inputs
  inputBg: '#1e293b', // slate-800 - Input background
  inputBorder: '#475569', // slate-600 - Input border
  inputTextColor: '#f1f5f9', // slate-100 - Input text
  inputBorderRadius: 4,

  // Grid and layout
  gridCellSize: 12,
});

export default appskiDarkTheme;
