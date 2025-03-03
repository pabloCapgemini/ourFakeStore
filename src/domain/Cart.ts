
export interface Cart {
    userId: number;
    date: string;
    products: { productId: number; quantity: number; }[];
}
