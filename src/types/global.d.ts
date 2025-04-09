
import { Product } from './product';
import { ApiError } from '../fake-store-api-client';
export interface IStoreAPI {
    fetchProducts: () => Promise<Product[]| ApiError>;
}
declare global {
    interface Window {
        storeAPI:IStoreAPI;
    }
}