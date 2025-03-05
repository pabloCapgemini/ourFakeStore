import { app, BrowserWindow, ipcMain } from 'electron';
import { ApiError, getProductsOrError, StoreAdapter } from './fake-store-api-client';
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
      const apiError = new ApiError("Failed to fetch products", error.response.status);
      return apiError;
    }
  }
}
export class EmptyStore extends StoreRepository {
  public async getProductsOrError(): Promise<Product[] | ApiError> {
    return [];
  }
}
export class ErrorStore extends StoreRepository {
  public async getProductsOrError(): Promise<Product[] | ApiError> {
    return new ApiError("Failed to fetch products", 500);
  }
}

let storeAdapter = new StoreAdapter();

let storeRepo = new StoreRepository(storeAdapter);

async function initializeStore() {
  const products = await storeRepo.getProductsOrError();
  storeWindow.webContents.send('load-products', products);
}

ipcMain.on('set-empty-store', async (event) => {
  storeRepo = new EmptyStore(storeAdapter);
  await initializeStore();
});
ipcMain.on('set-store-with-error', async (event) => {
  storeRepo = new ErrorStore(storeAdapter);
  await initializeStore();
});
