
import './index.css';

console.log('👋 This message is being logged by "renderer.js", included via webpack');
import { ApiError, getProducts } from "./fake-store-api-client";
import { Product } from './domain/Product';

const app = document.createElement("div");
app.innerHTML = `<h2>FakeStore Products</h2><ul id="product-list"></ul>`;
document.body.appendChild(app);

const productList = document.getElementById("product-list");

const loadProducts = async () => {
  const productsOrError = await window.storeAPI.fetchProducts();
  if (productsOrError instanceof Error) {
    productList!.innerHTML = "<li>Failed to fetch products</li>";
    return;
  }
  const products = productsOrError as Product[];
  if (products.length > 0) {
    productList!.innerHTML = products
      .map((product) => `<li>${product.title} - $${product.price}</li>`)
      .join("");
  } else {
    productList!.innerHTML = "<li>Store is empty.  Please come back soon!</li>";
  }


};

loadProducts();

