

import { ApiError } from 'src/fake-store-api-client';
import { Product } from '../domain/Product';
export interface IStoreAPI {
    loadProducts: (callback: (event: Electron.IpcRendererEvent, products: Product[] | ApiError) => void) => void,
}
declare global {
    interface Window {
        storeAPI: IStoreAPI
    }
}