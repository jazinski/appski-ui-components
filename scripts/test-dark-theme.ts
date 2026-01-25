#!/usr/bin/env bun
/**
 * Test script to verify dark theme is applied throughout Storybook
 * Tests sidebar, docs area, and canvas backgrounds
 */

import { chromium } from 'playwright';

const STORYBOOK_URL = process.env.STORYBOOK_URL || 'http://10.0.0.169:6007';
const DOCS_URL = `${STORYBOOK_URL}/?path=/docs/ui-avatar--docs`;

async function testDarkTheme() {
  console.log('🧪 Testing Storybook Dark Theme...\n');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    console.log(`📍 Navigating to: ${DOCS_URL}`);
    await page.goto(DOCS_URL, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000); // Wait for theme to apply

    // Test 1: Sidebar background
    console.log('\n1️⃣  Testing sidebar background...');
    const sidebarBg = await page.evaluate(() => {
      const sidebar =
        document.querySelector('.sidebar-container') ||
        document.querySelector('[class*="sidebar"]');
      if (!sidebar) return null;
      return window.getComputedStyle(sidebar).backgroundColor;
    });

    const isSidebarDark = sidebarBg?.includes('30, 41, 59'); // rgb(30, 41, 59) = slate-800
    console.log(`   Sidebar background: ${sidebarBg}`);
    console.log(`   ✅ Sidebar is ${isSidebarDark ? 'DARK' : 'LIGHT'}`);

    // Test 2: Main docs area background
    console.log('\n2️⃣  Testing docs area background...');
    const docsBg = await page.evaluate(() => {
      const docsArea =
        document.querySelector('.sbdocs') ||
        document.querySelector('.sb-show-main') ||
        document.querySelector('main');
      if (!docsArea) return null;
      return window.getComputedStyle(docsArea).backgroundColor;
    });

    const isDocsDark =
      docsBg &&
      (docsBg.includes('15, 23, 42') || // rgb(15, 23, 42) = slate-900
        docsBg.includes('30, 41, 59')); // rgb(30, 41, 59) = slate-800
    console.log(`   Docs background: ${docsBg}`);
    console.log(
      `   ${isDocsDark ? '✅' : '❌'} Docs area is ${isDocsDark ? 'DARK' : 'LIGHT/TRANSPARENT'}`
    );

    // Test 3: Body/HTML background (fallback)
    console.log('\n3️⃣  Testing body background...');
    const bodyBg = await page.evaluate(() => {
      return window.getComputedStyle(document.body).backgroundColor;
    });

    const isBodyDark = bodyBg && bodyBg.includes('15, 23, 42'); // slate-900
    console.log(`   Body background: ${bodyBg}`);
    console.log(`   ${isBodyDark ? '✅' : '❌'} Body is ${isBodyDark ? 'DARK' : 'LIGHT'}`);

    // Test 4: Check for logo
    console.log('\n4️⃣  Testing logo...');
    const logoSrc = await page.evaluate(() => {
      const logo = document.querySelector('.sidebar-header img');
      return logo ? logo.getAttribute('src') : null;
    });

    const hasLogo = logoSrc && logoSrc.includes('logo-dark');
    console.log(`   Logo src: ${logoSrc}`);
    console.log(`   ${hasLogo ? '✅' : '❌'} Logo ${hasLogo ? 'found' : 'missing'}`);

    // Test 5: Text color (should be light on dark background)
    console.log('\n5️⃣  Testing text color...');
    const textColor = await page.evaluate(() => {
      const heading = document.querySelector('.sbdocs h1') || document.querySelector('h1');
      if (!heading) return null;
      return window.getComputedStyle(heading).color;
    });

    const isTextLight =
      textColor &&
      (textColor.includes('241, 245, 249') || // rgb(241, 245, 249) = slate-100
        textColor.includes('248, 250, 252')); // rgb(248, 250, 252) = slate-50
    console.log(`   Text color: ${textColor}`);
    console.log(`   ${isTextLight ? '✅' : '⚠️ '} Text is ${isTextLight ? 'LIGHT' : 'NOT LIGHT'}`);

    // Summary
    console.log('\n📊 RESULTS:');
    console.log('═══════════════════════════════════════');

    const allPassed = isSidebarDark && isDocsDark && isBodyDark && hasLogo;

    if (allPassed) {
      console.log('✅ ALL TESTS PASSED - Dark theme is working!');
    } else {
      console.log('❌ SOME TESTS FAILED:');
      if (!isSidebarDark) console.log('   - Sidebar is not dark');
      if (!isDocsDark) console.log('   - Docs area is not dark');
      if (!isBodyDark) console.log('   - Body is not dark');
      if (!hasLogo) console.log('   - Logo not found');
    }

    console.log('═══════════════════════════════════════\n');

    // Take screenshot
    const screenshotPath = 'screenshots/dark-theme-verification.png';
    await page.screenshot({ path: screenshotPath, fullPage: false });
    console.log(`📸 Screenshot saved: ${screenshotPath}\n`);

    return allPassed ? 0 : 1;
  } catch (error) {
    console.error('❌ Error during testing:', error);
    return 1;
  } finally {
    await browser.close();
  }
}

// Run the test
testDarkTheme()
  .then((exitCode) => {
    process.exit(exitCode);
  })
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
