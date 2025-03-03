import { Product } from './domain/Product';
import { getProducts } from './fake-store-api-client';


export class StoreRepository {
    async getProducts(): Promise<Product[]> {
        return getProducts();
    }
}

export class EmptyStoreRepository {
    async getProducts(): Promise<Product[]> {
        return [];
    }
}   
