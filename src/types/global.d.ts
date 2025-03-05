

import { Product } from '../domain/Product';
export interface IStoreAPI {
    fetchProducts: () => Promise<Product[]>;
    loadProducts: (callback: (event: Electron.IpcRendererEvent, products: Product[]) => void) => void;
}
declare global {
    interface Window {
        storeAPI:IStoreAPI;
    }
}