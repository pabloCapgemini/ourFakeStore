import { Product } from './domain/Product';
import { ApiError, getProductsOrError, StoreAdapter } from './fake-store-api-client';

export class StoreRepository {
    private adapter: StoreAdapter;
    constructor(adapter:StoreAdapter = new StoreAdapter()) {
        this.adapter = adapter;
    }
    public async getProductsOrError(): Promise<Product[] | ApiError> {
        try {
            const response = await this.adapter.getProducts();
            return response.data;
        } catch (error) {
            console.error("Error fetching products:", error);
            return new ApiError("Failed to fetch products");
        }
    }
}

