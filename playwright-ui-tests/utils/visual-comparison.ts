import { expect } from '@playwright/test';
import { ScreenshotOptions } from '@playwright/test';

export async function compareScreenshots(actualScreenshot: Buffer, expectedScreenshotPath: string, options?: ScreenshotOptions) {
    const expectedScreenshot = await fs.promises.readFile(expectedScreenshotPath);
    expect(actualScreenshot).toEqual(expectedScreenshot, {
        message: `Visual comparison failed for ${expectedScreenshotPath}`,
        ...options,
    });
}

export async function saveScreenshot(page, screenshotPath: string, options?: ScreenshotOptions) {
    await page.screenshot({ path: screenshotPath, ...options });
}