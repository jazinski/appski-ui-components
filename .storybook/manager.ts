import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

// Get commit hash - replaced at build time by build-storybook-with-hash.sh
const COMMIT_HASH = '__COMMIT_HASH__';

const darkTheme = create({
  base: 'dark',
  brandTitle: `Appski UI`,
  brandUrl: 'https://github.com/jazinski/appski-ui-components',
  brandImage: undefined, // Remove image, use text only
  brandTarget: '_blank',

  // UI colors - INDIGO THEME
  colorPrimary: '#818cf8', // indigo-400
  colorSecondary: '#818cf8',

  // App background - DARK SLATE
  appBg: '#0f172a', // slate-900
  appContentBg: '#1e293b', // slate-800
  appPreviewBg: '#0f172a', // DARK background for previews
  appBorderColor: '#334155', // slate-700
  appBorderRadius: 8,

  // Text colors
  textColor: '#f1f5f9', // slate-100
  textInverseColor: '#0f172a',

  // Toolbar colors - ALL DARK
  barTextColor: '#cbd5e1', // slate-300
  barSelectedColor: '#818cf8',
  barHoverColor: '#818cf8',
  barBg: '#1e293b', // DARK slate-800

  // Form colors
  inputBg: '#1e293b',
  inputBorder: '#334155',
  inputTextColor: '#f1f5f9',
  inputBorderRadius: 6,

  // Font
  fontBase: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontCode: 'ui-monospace, SFMono-Regular, Monaco, Consolas, monospace',
});

addons.setConfig({
  theme: darkTheme,
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
  // FORCE dark mode, disable light mode toggle
  enableShortcuts: true,
});

// Add custom CSS for branding with commit hash and FORCE DARK MODE
const style = document.createElement('style');
style.innerHTML = `
  /* FORCE DARK MODE EVERYWHERE */
  body, html, #storybook-root, .sb-show-main, .sb-main-padded {
    background-color: #0f172a !important;
    color: #f1f5f9 !important;
  }
  
  /* Force sidebar dark */
  .sidebar-container, [class*="sidebar"] {
    background-color: #1e293b !important;
  }
  
  /* Custom branding header */
  .sidebar-header {
    padding: 16px !important;
    background-color: #1e293b !important;
  }
  
  /* Style the brand title */
  .sidebar-header a {
    display: flex !important;
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 4px !important;
    text-decoration: none !important;
  }
  
  /* Main title - APPSKI in indigo */
  .sidebar-header a > div {
    font-size: 20px !important;
    font-weight: 700 !important;
    color: #818cf8 !important;
    letter-spacing: -0.02em !important;
    line-height: 1 !important;
  }
  
  /* Add commit hash after title */
  .sidebar-header a::after {
    content: 'commit: ${COMMIT_HASH}' !important;
    font-size: 11px !important;
    font-weight: 500 !important;
    color: #64748b !important;
    font-family: ui-monospace, SFMono-Regular, Monaco, Consolas, monospace !important;
    opacity: 0.8 !important;
    line-height: 1 !important;
  }
  
  /* Remove image */
  .sidebar-header img {
    display: none !important;
  }
  
  /* Hide theme toggle if it exists */
  [title="Change theme"], 
  button[aria-label*="theme" i],
  button[aria-label*="dark" i],
  button[aria-label*="light" i] {
    display: none !important;
  }
`;
document.head.appendChild(style);
