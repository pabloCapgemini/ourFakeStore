

export interface IStoreAPI {
    fetchProducts: () => Promise<Product[]|ApiError>;
}
declare global {
    interface Window {
        storeAPI:IStoreAPI;
    }
}