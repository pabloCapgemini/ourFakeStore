import { Product } from './domain/Product';
import { ApiError, getProductsOrError, StoreAdapter } from './fake-store-api-client';


export class StoreRepository {
    private storeAdapter: StoreAdapter;
    constructor(storeAdapter:StoreAdapter) {
        this.storeAdapter = storeAdapter;
    }
    async getProductsOrError(): Promise<Product[] | ApiError> {
        return getProductsOrError();
    }
}

export class EmptyStoreRepository extends StoreRepository {
    async getProductsOrError(): Promise<Product[] | ApiError> {
        return [];
    }
}   

export class ErrorStoreRepository extends StoreRepository {

    async getProductsOrError(): Promise<Product[] | ApiError> {
        return new ApiError("Failed to fetch products");
    }
}
