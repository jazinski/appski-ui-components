import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const darkTheme = create({
  base: 'dark',
  brandTitle: 'Appski',
  brandUrl: 'https://github.com/jazinski/appski-ui-components',
  brandImage: '/icon.png',
  brandTarget: '_blank',

  // UI colors
  colorPrimary: '#818cf8', // indigo-400
  colorSecondary: '#818cf8',

  // App background
  appBg: '#0f172a', // slate-900
  appContentBg: '#1e293b', // slate-800
  appPreviewBg: '#1e293b',
  appBorderColor: '#334155', // slate-700
  appBorderRadius: 8,

  // Text colors
  textColor: '#f1f5f9', // slate-100
  textInverseColor: '#0f172a',

  // Toolbar colors
  barTextColor: '#cbd5e1', // slate-300
  barSelectedColor: '#818cf8',
  barHoverColor: '#818cf8',
  barBg: '#1e293b',

  // Form colors
  inputBg: '#1e293b',
  inputBorder: '#334155',
  inputTextColor: '#f1f5f9',
  inputBorderRadius: 6,

  // Font
  fontBase: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontCode: 'ui-monospace, SFMono-Regular, Monaco, Consolas, monospace',
});

const lightTheme = create({
  base: 'light',
  brandTitle: 'Appski',
  brandUrl: 'https://github.com/jazinski/appski-ui-components',
  brandImage: '/icon.png',
  brandTarget: '_blank',

  // UI colors
  colorPrimary: '#6366f1', // indigo-500
  colorSecondary: '#6366f1',

  // App background
  appBg: '#f8fafc', // slate-50
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#e2e8f0', // slate-200
  appBorderRadius: 8,

  // Text colors
  textColor: '#0f172a', // slate-900
  textInverseColor: '#ffffff',

  // Toolbar colors
  barTextColor: '#64748b', // slate-500
  barSelectedColor: '#6366f1',
  barHoverColor: '#6366f1',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#e2e8f0',
  inputTextColor: '#0f172a',
  inputBorderRadius: 6,

  // Font
  fontBase: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontCode: 'ui-monospace, SFMono-Regular, Monaco, Consolas, monospace',
});

addons.setConfig({
  theme: darkTheme, // DEFAULT TO DARK MODE
  sidebar: {
    showRoots: true,
    collapsedRoots: [],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
});
