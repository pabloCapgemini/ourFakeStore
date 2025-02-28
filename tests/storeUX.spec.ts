import { _electron as electron, test, expect } from '@playwright/test';

test('should launch Electron app', async () => {
    // Launch the Electron app
    const app = await electron.launch({ args: ['.webpack/arm64/main/'] });

    // Get the first window
    const window = await app.firstWindow();

    // Verify the title of the app
    const title = await window.title();
    expect(title).toBe('Fake Store');

    // Take a screenshot for debugging
    await window.screenshot({ path: 'test-results/app.png', fullPage: true });

    // Close the app
    await app.close();
});
