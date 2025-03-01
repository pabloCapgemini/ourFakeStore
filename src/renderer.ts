/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/latest/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css';

console.log('👋 This message is being logged by "renderer.js", included via webpack');
import { getProducts } from "./fake-store-api-client";

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
    productList!.innerHTML = "<li>Failed to load products</li>";
  }
};

loadProducts();

