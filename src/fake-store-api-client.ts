import axios from "axios";

const API_URL = "https://fakestoreapi.com";

// Define types for the API responses
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface Cart {
  userId: number;
  date: string;
  products: { productId: number; quantity: number }[];
}

// Fetch all products
export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Fetch a single product by ID
export const getProductById = async (id: number): Promise<Product | null> => {
  try {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

// Simulate adding a product to a cart
export const addToCart = async (userId: number, productId: number, quantity: number): Promise<Cart | null> => {
  try {
    const response = await axios.post(`${API_URL}/carts`, {
      userId,
      date: new Date().toISOString().split("T")[0],
      products: [{ productId, quantity }],
    });
    return response.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    return null;
  }
};

// Example usage
(async () => {
  console.log("Fetching products...");
  const products = await getProducts();
  console.log(products);

  if (products.length > 0) {
    console.log("Fetching product details for ID 1...");
    const product = await getProductById(1);
    console.log(product);
  }

  console.log("Adding product ID 1 to user ID 1's cart...");
  const cart = await addToCart(1, 1, 2);
  console.log(cart);
})();
