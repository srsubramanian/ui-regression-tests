import { test, expect } from '@playwright/test';

test.describe('Page Tests', () => {
    test('should load the homepage correctly', async ({ page }) => {
        await page.goto('http://localhost:3000'); // Replace with your application's URL
        await expect(page).toHaveTitle(/Home/); // Adjust the title as needed
        await expect(page.locator('h1')).toHaveText('Welcome to the Homepage'); // Adjust the selector and text as needed
    });

    test('should navigate to the about page', async ({ page }) => {
        await page.goto('http://localhost:3000'); // Replace with your application's URL
        await page.click('text=About'); // Adjust the selector as needed
        await expect(page).toHaveURL(/about/);
        await expect(page.locator('h1')).toHaveText('About Us'); // Adjust the selector and text as needed
    });

    // Add more tests as needed for other pages
});