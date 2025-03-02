import { _electron as electron, test, expect } from '@playwright/test';

test('should launch Electron app', async () => {
    const app = await electron.launch({ args: ['.webpack/arm64/main/'] });

    const window = await app.firstWindow();
    const title = await window.title();
    expect(title).toBe('Fake Store');

    // Take a screenshot for debugging
    await window.screenshot({ path: 'test-results/app.png', fullPage: true });

    // Close the app
    await app.close();
});
