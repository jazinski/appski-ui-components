import { addons } from '@storybook/manager-api';
import { appskiDarkTheme } from './theme';

// Get commit hash - replaced at build time by build-storybook-with-hash.sh
const COMMIT_HASH = '__COMMIT_HASH__';

addons.setConfig({
  theme: appskiDarkTheme,
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
  
  /* Style the brand link with logo */
  .sidebar-header a {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    gap: 12px !important;
    text-decoration: none !important;
  }
  
  /* Logo styling */
  .sidebar-header img {
    display: block !important;
    width: 32px !important;
    height: 32px !important;
    object-fit: contain !important;
  }
  
  /* Brand title container */
  .sidebar-header a > div {
    display: flex !important;
    flex-direction: column !important;
    gap: 2px !important;
  }
  
  /* Main title - APPSKI UI in blue */
  .sidebar-header a > div > span:first-child {
    font-size: 16px !important;
    font-weight: 700 !important;
    color: #3b82f6 !important;
    letter-spacing: -0.02em !important;
    line-height: 1.2 !important;
  }
  
  /* Add commit hash after title */
  .sidebar-header a::after {
    content: 'commit: ${COMMIT_HASH}' !important;
    position: absolute !important;
    bottom: 12px !important;
    left: 16px !important;
    font-size: 10px !important;
    font-weight: 500 !important;
    color: #64748b !important;
    font-family: ui-monospace, SFMono-Regular, Monaco, Consolas, monospace !important;
    opacity: 0.7 !important;
    line-height: 1 !important;
  }
  
  .sidebar-header {
    position: relative !important;
    padding-bottom: 28px !important;
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
