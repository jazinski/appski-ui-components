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
  
  /* Logo styling - bigger logo */
  .sidebar-header img {
    display: block !important;
    width: 48px !important;
    height: 48px !important;
    object-fit: contain !important;
    flex-shrink: 0 !important;
  }
  
  /* Brand title container */
  .sidebar-header a > div {
    display: flex !important;
    flex-direction: column !important;
    gap: 4px !important;
    align-items: flex-start !important;
  }
  
  /* Main title - Appski text */
  .sidebar-header a > div > span:first-child {
    font-size: 20px !important;
    font-weight: 700 !important;
    color: #f1f5f9 !important;
    letter-spacing: -0.02em !important;
    line-height: 1 !important;
    margin: 0 !important;
  }
  
  /* Subtitle/version text (UI Components) */
  .sidebar-header a > div > span:last-child {
    font-size: 11px !important;
    font-weight: 500 !important;
    color: #64748b !important;
    letter-spacing: 0.02em !important;
    line-height: 1 !important;
    text-transform: uppercase !important;
  }
  
  /* Add commit hash below the brand */
  .sidebar-header::after {
    content: 'commit: ${COMMIT_HASH}' !important;
    display: block !important;
    margin-top: 8px !important;
    font-size: 10px !important;
    font-weight: 500 !important;
    color: #64748b !important;
    font-family: ui-monospace, SFMono-Regular, Monaco, Consolas, monospace !important;
    opacity: 0.7 !important;
    line-height: 1 !important;
  }
  
  .sidebar-header {
    position: relative !important;
    padding-bottom: 12px !important;
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

// Add subtitle "UI COMPONENTS" after the brand title
setTimeout(() => {
  const brandLink = document.querySelector('.sidebar-header a');
  if (brandLink) {
    const titleDiv = brandLink.querySelector('div');
    if (titleDiv) {
      const subtitle = document.createElement('span');
      subtitle.textContent = 'UI COMPONENTS';
      subtitle.style.cssText = `
        font-size: 11px;
        font-weight: 500;
        color: #64748b;
        letter-spacing: 0.02em;
        line-height: 1;
        text-transform: uppercase;
        margin-top: 4px;
        display: block;
      `;
      titleDiv.appendChild(subtitle);
    }
  }
}, 100);
