

export interface IStoreAPI {
    loadProducts: (callback: (event: Electron.IpcRendererEvent, productsOrError: Product[] | ApiError) => void) => void;
}
declare global {
    interface Window {
        storeAPI:IStoreAPI;
    }
}