

export interface IStoreAPI {
    fetchProducts: () => Promise<Product[]>;
}
declare global {
    interface Window {
        storeAPI:IStoreAPI;
    }
}