

export interface IStoreAPI {
    fetchProducts: () => Promise<Product[] | ApiError>,
    loadProducts: (callback: (event: Electron.IpcRendererEvent, productsOrError: Product[] | ApiError) => void) => void
}
declare global {
    interface Window {
        storeAPI: IStoreAPI;
    }
}