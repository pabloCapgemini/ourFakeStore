import { Product } from './domain/Product';
import { ApiError, getProductsOrError } from './fake-store-api-client';

export class StoreRepository {
    public async getProductsOrError(): Promise<Product[] | ApiError> {
        return getProductsOrError();
    }
}
export class EmptyStore extends StoreRepository {
    public async  getProductsOrError(): Promise<Product[] | ApiError> {
        return [];
    }
}
export class ErrorStore extends StoreRepository {
    public async getProductsOrError(): Promise<Product[] | ApiError> {
        return new ApiError("Failed to fetch products");
    }
}
