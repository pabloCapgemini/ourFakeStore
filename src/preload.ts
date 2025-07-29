// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from "electron";
import { IStoreAPI } from "./types/global";

// Create an implementation of the IStoreAPI interface
const storeAPI: IStoreAPI = {
    fetchProducts: () => ipcRenderer.invoke("fetch-products"),
    loadProducts: (callback) => ipcRenderer.on("load-products", callback)
};

// Expose the API to the renderer process
contextBridge.exposeInMainWorld("storeAPI", storeAPI);