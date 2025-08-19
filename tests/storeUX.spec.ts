import { _electron as electron, test, expect, ElectronApplication, Page } from '@playwright/test';
import { ipcMain } from 'electron';

let app: ElectronApplication;
let homePage: Page;

test.beforeEach(async () => {
    app = await electron.launch({ args: [`.webpack/${process.arch}/main/`] });
    homePage = await app.firstWindow();
});
test.afterEach(async () => {
    await app.close();
});
test('should launch Electron app', async () => {
    const title = await homePage.title();
    expect(title).toBe('Fake Store');

    await homePage.screenshot({ path: 'test-results/app.png', fullPage: true });
});
test('should display professional header instead of old titles', async () => {
    // The new professional header should be present
    const headerTitle = homePage.getByText('OurFakeStore');
    await expect(headerTitle).toBeVisible();

    // The old "FakeStore Products" title should no longer be present
    const oldProductsTitle = homePage.getByText('FakeStore Products');
    await expect(oldProductsTitle).not.toBeVisible();

    // The old "Our Fake Store" title should no longer be present
    const oldStoreTitle = homePage.getByText('Our Fake Store');
    await expect(oldStoreTitle).not.toBeVisible();

    await homePage.screenshot({ path: 'test-results/professional-header.png', fullPage: true });
});
test('fake store displays products', async () => {
    // Use MockStoreAdapter for reliable testing (no external API dependency)
    await app.evaluate(({ ipcMain }) => {
        ipcMain.emit('set-store-with-mock-products');
    });

    const productList = homePage.locator('#product-list');
    const listItems = productList.getByRole('listitem');

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
    const productList = homePage.locator('#product-list');
    const listItems = productList.getByRole('listitem');
    await expect(listItems).toHaveCount(1);
    await expect(listItems).toContainText(['No products available. Please come back soon!']);
});
test('when there is an error fetching products the Store will display a nice error message', async () => {
    await app.evaluate(({ ipcMain }) => {
        ipcMain.emit('set-store-with-error');
    });

    await homePage.screenshot({ path: 'test-results/store-with-Error.png', fullPage: true });
    const productList = homePage.locator('#product-list');
    const listItems = productList.getByRole('listitem');
    await expect(listItems).toHaveCount(1);
    await expect(listItems).toContainText(['Failed to fetch products']);
});
