
import { Product } from './domain/Product';
import './index.css';

console.log('👋 This message is being logged by "renderer.js", included via webpack');

const app = document.createElement("div");
app.innerHTML = `<h2>FakeStore Products</h2><ul id="product-list"></ul>`;
document.body.appendChild(app);

const productList = document.getElementById("product-list");

window.storeAPI.loadProducts((event, productsOrError) => {
  if (productsOrError instanceof Error) {
    productList!.innerHTML = "<li>Failed to fetch products</li>";
    return;
  } else {
    const products = productsOrError as Product[];
    if (products.length > 0) {
      productList!.innerHTML = products
        .map((product) => `<li>${product.title} - $${product.price}</li>`)
        .join("");
    } else {
      productList!.innerHTML = "<li>Store is empty, please come back soon!</li>";
    }
  }
});

