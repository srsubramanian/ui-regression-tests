export function selectElement(selector: string) {
    return document.querySelector(selector);
}

export async function waitForElement(selector: string, timeout: number = 5000) {
    return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
            const element = selectElement(selector);
            if (element) {
                clearInterval(interval);
                resolve(element);
            }
        }, 100);

        setTimeout(() => {
            clearInterval(interval);
            reject(new Error(`Element not found: ${selector}`));
        }, timeout);
    });
}

export function log(message: string) {
    console.log(`[Test Log] ${message}`);
}