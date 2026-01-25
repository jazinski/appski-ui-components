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
    padding: 20px 16px !important;
    background-color: #1e293b !important;
  }
  
  /* Style the brand link - horizontal layout */
  .sidebar-header a {
    display: flex !important;
    flex-direction: row !important;
    align-items: flex-start !important;
    gap: 12px !important;
    text-decoration: none !important;
  }
  
  /* Logo styling */
  .sidebar-header img {
    width: 40px !important;
    height: 40px !important;
    object-fit: contain !important;
    flex-shrink: 0 !important;
  }
  
  /* Hide default brand title */
  .sidebar-header a > div {
    display: none !important;
  }
  
  /* Custom brand text container */
  .appski-brand-text {
    display: flex !important;
    flex-direction: column !important;
    gap: 4px !important;
    justify-content: center !important;
    padding-top: 2px !important;
  }
  
  .appski-brand-text .brand-name {
    font-size: 24px !important;
    font-weight: 700 !important;
    color: #f1f5f9 !important;
    letter-spacing: -0.02em !important;
    line-height: 1.2 !important;
  }
  
  .appski-brand-text .brand-commit {
    font-size: 11px !important;
    font-weight: 500 !important;
    color: #64748b !important;
    font-family: ui-monospace, SFMono-Regular, Monaco, Consolas, monospace !important;
    opacity: 0.8 !important;
    line-height: 1 !important;
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

// Build the brand layout with JavaScript
setTimeout(() => {
  const brandLink = document.querySelector('.sidebar-header a');
  if (brandLink) {
    // Create text container
    const textContainer = document.createElement('div');
    textContainer.className = 'appski-brand-text';

    // Add brand name
    const brandName = document.createElement('div');
    brandName.className = 'brand-name';
    brandName.textContent = 'AppSki';

    // Add commit hash
    const commitHash = document.createElement('div');
    commitHash.className = 'brand-commit';
    commitHash.textContent = `commit: ${COMMIT_HASH}`;

    textContainer.appendChild(brandName);
    textContainer.appendChild(commitHash);

    // Add to brand link after the logo
    brandLink.appendChild(textContainer);
  }
}, 100);
