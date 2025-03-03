import { Product } from './domain/Product';
import { ApiError, getProductsOrError, StoreAdapter } from './fake-store-api-client';


export class StoreRepository {
    private storeAdapter: StoreAdapter;
    constructor(storeAdapter: StoreAdapter) {
        this.storeAdapter = storeAdapter;
    }
    async getProductsOrError(): Promise<Product[] | ApiError> {
        try {
            const response = await this.storeAdapter.getProducts();
            return response.data;
        } catch (error) {
            return new ApiError(error.message);
        }
    }
}
