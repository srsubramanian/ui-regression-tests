import { test, expect } from '@playwright/test';

test.describe('Wikipedia Sample Tests', () => {
  // Basic navigation tests
  test('should load the Wikipedia homepage', async ({ page }) => {
    await page.goto('https://www.wikipedia.org/');
    await expect(page).toHaveTitle(/Wikipedia/);
    await expect(page.locator('#js-link-box-en')).toBeVisible();
  });

  test('should navigate to English Wikipedia', async ({ page }) => {
    await page.goto('https://www.wikipedia.org/');
    await page.click('#js-link-box-en');
    await expect(page).toHaveURL(/en.wikipedia.org/);
    await expect(page.locator('#firstHeading')).toHaveText(/Welcome to Wikipedia/);
  });

  // Search functionality tests
  test('should perform a search and show results', async ({ page }) => {
    await page.goto('https://en.wikipedia.org/');
    await page.fill('#searchInput', 'Playwright');
    await page.press('#searchInput', 'Enter');
    
    // Check that search results page loaded
    await expect(page.locator('#firstHeading')).toBeVisible();
    await expect(page.locator('#mw-content-text')).toContainText(/Playwright/i);
  });

  // UI element tests
  test('should verify main navigation elements', async ({ page }) => {
    await page.goto('https://en.wikipedia.org/');
    
    // Check main navigation components
    await expect(page.locator('#p-navigation')).toBeVisible();
    await expect(page.locator('#p-interaction')).toBeVisible();
    
    // Verify language selection is present
    await expect(page.locator('.interlanguage-link')).toBeVisible();
  });

  // Responsive design tests
  test('should adapt to mobile viewport', async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('https://en.wikipedia.org/');
    
    // Check that mobile elements are visible
    await expect(page.locator('.mw-header-menu-toggle')).toBeVisible();
    
    // Open mobile menu
    await page.click('.mw-header-menu-toggle');
    await expect(page.locator('.menu-main')).toBeVisible();
  });

  // Visual comparison tests
  test('should match the Wikipedia logo appearance', async ({ page }) => {
    await page.goto('https://en.wikipedia.org/');
    
    // Take screenshot of the logo
    const logoLocator = page.locator('.mw-wiki-logo');
    await expect(logoLocator).toBeVisible();
    
    // Example of taking a screenshot for visual comparison
    await logoLocator.screenshot({ 
      path: 'test-results/wikipedia-logo.png',
    });
    
    // In a real test, you would compare this with a baseline image
  });

  // Accessibility tests
  test('should have proper heading structure', async ({ page }) => {
    await page.goto('https://en.wikipedia.org/wiki/Web_accessibility');
    
    // Check that headings are in proper order
    const headings = await page.locator('h1, h2, h3, h4, h5, h6').all();
    expect(headings.length).toBeGreaterThan(0);
    
    // Check specific accessibility content
    await expect(page.locator('#firstHeading')).toHaveText('Web accessibility');
  });

  // Content verification tests
  test('should display featured content', async ({ page }) => {
    await page.goto('https://en.wikipedia.org/');
    
    // Check featured article section
    await expect(page.locator('#mp-tfa')).toBeVisible();
    
    // Check "On this day" section
    await expect(page.locator('#mp-otd')).toBeVisible();
  });

  // Error handling tests
  test('should show 404 page for non-existent articles', async ({ page }) => {
    await page.goto('https://en.wikipedia.org/wiki/ThisPageDoesNotExistAtAll12345');
    
    // Check for 404-like message
    await expect(page.locator('#firstHeading')).toContainText(/not exist/i);
  });
});
