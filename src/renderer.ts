
import { Product } from './domain/Product';
import './index.css';

console.log('👋 This message is being logged by "renderer.js", included via webpack');

const app = document.createElement("div");
app.innerHTML = `<h2>FakeStore Products</h2><ul id="product-list"></ul>`;
document.body.appendChild(app);

const productList = document.getElementById("product-list");

const loadProducts = async () => {
  const products = await window.storeAPI.fetchProducts();
  if (products instanceof Error) {
    productList!.innerHTML = "<li>Failed to fetch products</li>";
    return;
  } else {
    const loadedProducts = products as Product[];
    if (products.length > 0) {
      productList!.innerHTML = loadedProducts
        .map((product) => `<li>${product.title} - $${product.price}</li>`)
        .join("");
    } else {
      productList!.innerHTML = "<li>No products available. Please come back soon!</li>";
    }
  }

};

loadProducts();

