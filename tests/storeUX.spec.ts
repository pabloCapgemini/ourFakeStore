import { _electron as electron, test, expect, ElectronApplication, Page } from '@playwright/test';
import { ipcMain } from 'electron';

let app: ElectronApplication;
let homePage: Page;

test.beforeAll(async () => {
    app = await electron.launch({ args: [`.webpack/${process.arch}/main/`] });
    homePage = await app.firstWindow();
});
test.afterAll(async () => {
    await app.close();
});
test('should launch Electron app', async () => {
    const title = await homePage.title();
    expect(title).toBe('Fake Store');

    await homePage.screenshot({ path: 'test-results/app.png', fullPage: true });
});
test('fake store displays products', async () => {
    const listItems = homePage.getByRole('listitem');

    await expect(listItems).toHaveCount(20);
    await expect(listItems).toContainText(['Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops']);
    await expect(listItems).toContainText(['DANVOUY Womens T Shirt Casual Cotton Short']);

    await homePage.screenshot({ path: 'test-results/store-with-products.png', fullPage: true });
});
test('when store is empty our app will display a nice message', async () => {
    await app.evaluate(({ ipcMain }) => {
        ipcMain.emit('set-empty-store');
    });

    const listItems = homePage.getByRole('listitem');
    await expect(listItems).toHaveCount(1);
    await expect(listItems).toContainText(['Store is empty, please come back soon!']);
});
test('when there is an error fetching products the Store will display a nice error message', async () => {
    await app.evaluate(({ ipcMain }) => {
        ipcMain.emit('set-store-with-error');
    });

    await homePage.screenshot({ path: 'test-results/store-with-Error.png', fullPage: true });
    const listItems = homePage.getByRole('listitem');
    await expect(listItems).toHaveCount(1);
    await expect(listItems).toContainText(['Failed to fetch products']);
});
