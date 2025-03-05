import { app, BrowserWindow, ipcMain } from 'electron';
import { ApiError, EmptyStoreAdapter, ErrorStoreAdapter, getProductsOrError, StoreAdapter } from './fake-store-api-client';
import { Product } from './domain/Product';

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

if (require('electron-squirrel-startup')) {
  app.quit();
}

let storeWindow: BrowserWindow;
const createWindow = async (): Promise<void> => {
  storeWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  storeWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  storeWindow.webContents.on('did-finish-load', async () => {
    await initializeStore();
  });

};

app.on('ready', createWindow);


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

export class StoreRepository {
  constructor(private storeAdapter: StoreAdapter) { }
  public async getProductsOrError(): Promise<Product[] | ApiError> {
    try {
      const response = await this.storeAdapter.getProducts();
      return response.data;
    } catch (error) {
      const apiError = new ApiError("Failed to fetch products");
      return apiError;
    }
  }
}

let storeAdapter = new StoreAdapter();

let storeRepo = new StoreRepository(storeAdapter);

async function initializeStore() {
  const products = await storeRepo.getProductsOrError();
  storeWindow.webContents.send('load-products', products);
}

ipcMain.on('set-empty-store', async (event) => {
  const emptyStoreAdapter = new EmptyStoreAdapter();
  storeRepo = new StoreRepository(emptyStoreAdapter);
  await initializeStore();
});
ipcMain.on('set-store-with-error', async (event) => {
  const errorAStoreAdapter = new ErrorStoreAdapter();
  storeRepo = new StoreRepository(errorAStoreAdapter);
  await initializeStore();
});
