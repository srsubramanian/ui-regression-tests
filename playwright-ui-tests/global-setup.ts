import { FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
    // Perform any global setup actions here, such as initializing databases or starting services.
    console.log('Global setup is running...');
}

export default globalSetup;