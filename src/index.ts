import { app, BrowserWindow, ipcMain } from 'electron';
import { ApiError, getProductsOrError } from './fake-store-api-client';
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
  // public async getProducts(): Promise<Product[]> {
  //   return getProducts();
  // }
  public async getProductsOrError(): Promise<Product[] | ApiError> {
    return getProductsOrError();
  }
}
export class EmptyStore extends StoreRepository {
  // public async getProducts(): Promise<Product[]> {
  //   return [];
  // }
  public async getProductsOrError(): Promise<Product[] | ApiError> {
    return [];
  }
}


let storeRepo = new StoreRepository();

async function initializeStore(){
  const products = await storeRepo.getProductsOrError();
  storeWindow.webContents.send('load-products', products);
}

ipcMain.on('set-empty-store', async (event) => {
  storeRepo = new EmptyStore();
  await initializeStore();
});
