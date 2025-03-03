
import './index.css';

console.log('👋 This message is being logged by "renderer.js", included via webpack');

const app = document.createElement("div");
app.innerHTML = `<h2>FakeStore Products</h2><ul id="product-list"></ul>`;
document.body.appendChild(app);

const productList = document.getElementById("product-list");

const loadProducts = async () => {
  const products =  await window.storeAPI.fetchProducts();
  if (products.length > 0) {
    productList!.innerHTML = products
      .map((product) => `<li>${product.title} - $${product.price}</li>`)
      .join("");
  } else {
    productList!.innerHTML = "<li>No products available. Please come back soon!</li>";
  }
};

loadProducts();

