import { Product } from './domain/Product';
import { ApiError, getProductsOrError } from './fake-store-api-client';

export class StoreRepository {

    public getProductsOrError(): Promise<Product[] | ApiError> {
        return getProductsOrError();
    }
}
export class EmptyStore extends StoreRepository {
    public getProductsOrError(): Promise<Product[] | ApiError> {
        return Promise.resolve([]);
    }
}
export class ErrorStore extends StoreRepository {
    public getProductsOrError(): Promise<Product[] | ApiError> {
        return Promise.resolve(new ApiError("Failed to fetch products"));
    }
}
