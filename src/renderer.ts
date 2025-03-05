
import { Product } from './domain/Product';
import { ApiError } from './fake-store-api-client';
import './index.css';

console.log('👋 This message is being logged by "renderer.js", included via webpack');

const app = document.createElement("div");
app.innerHTML = `<h2>FakeStore Products</h2><ul id="product-list"></ul>`;
document.body.appendChild(app);

const productList = document.getElementById("product-list");

window.storeAPI.loadProducts((event, products) => {

  if (products instanceof ApiError) {
    productList!.innerHTML = `<li>Failed to fetch products</li>`;
  } else {
    const listOfProducts = products as Product[];
    if (listOfProducts.length > 0) {
      productList!.innerHTML = listOfProducts
        .map((product) => `<li>${product.title} - $${product.price}</li>`)
        .join("");
    } else {
      productList!.innerHTML = "<li>There are no products available.  Please come back soon!</li>";
    }
  }

});


