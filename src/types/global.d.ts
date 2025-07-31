
import { Product } from '../domain/Product';
import { ApiError } from '../fake-store-api-client';

/**
 * Interface defining the Store API available in the renderer process
 * This represents the contract between main and renderer processes
 */
export interface IStoreAPI {
    /**
     * Fetches products from the store
     * @returns Promise containing either Product array or ApiError
     */
    fetchProducts: () => Promise<Product[] | ApiError>;

    /**
     * Registers a callback for when products are loaded
     * @param callback Function that receives the loaded products or error
     */
    loadProducts: (callback: (event: Electron.IpcRendererEvent, productsOrError: Product[] | ApiError) => void) => void;
}

declare global {
    interface Window {
        /**
         * Store API exposed to the renderer process via contextBridge
         */
        storeAPI: IStoreAPI;
    }
}