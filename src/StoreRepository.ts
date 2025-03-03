import { Product } from './domain/Product';
import { ApiError, getProducts, getProductsOrError } from './fake-store-api-client';


export class StoreRepository {
    async getProducts(): Promise<Product[]> {
        return getProducts();
    }
    async getProductsOrError(): Promise<Product[] | ApiError> {
        return getProductsOrError();
    }
}

export class EmptyStoreRepository extends StoreRepository {
    async getProducts(): Promise<Product[]> {
        return [];
    }
    async getProductsOrError(): Promise<Product[] | ApiError> {
        return this.getProducts();
    }
}   
