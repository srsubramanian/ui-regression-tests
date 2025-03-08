export const waitForElement = async (page, selector, timeout = 5000) => {
    await page.waitForSelector(selector, { timeout });
};

export const clickElement = async (page, selector) => {
    await waitForElement(page, selector);
    await page.click(selector);
};

export const fillInput = async (page, selector, value) => {
    await waitForElement(page, selector);
    await page.fill(selector, value);
};

export const assertElementVisible = async (page, selector) => {
    const isVisible = await page.isVisible(selector);
    if (!isVisible) {
        throw new Error(`Element ${selector} is not visible`);
    }
};