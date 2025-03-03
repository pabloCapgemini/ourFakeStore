import { _electron as electron, test, expect, ElectronApplication, Page } from '@playwright/test';
import { ipcMain } from 'electron';

let app: ElectronApplication;
let homePage: Page;

test.beforeEach(async () => {
    app = await electron.launch({ args: ['.webpack/arm64/main/'] });
    homePage = await app.firstWindow();
});
test.afterEach(async () => {
    await app.close();
});
test('should launch Electron app', async () => {
    const app = await electron.launch({ args: ['.webpack/arm64/main/'] });

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
test('when there are no products the Store displays special message', async () => {
    await app.evaluate(({ ipcMain }) => {
        ipcMain.emit('set-store-with-no-products');
    });

    await homePage.screenshot({ path: 'test-results/store-with-NoProducts.png', fullPage: true });
    const listItems = homePage.getByRole('listitem');
    await expect(listItems).toHaveCount(1);
    await expect(listItems).toContainText(['No products available. Please come back soon!']);
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
