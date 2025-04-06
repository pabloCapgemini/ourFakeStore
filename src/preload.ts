// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from "electron";
import { Product } from "./domain/Product";
import { ApiError } from "./fake-store-api-client";

contextBridge.exposeInMainWorld("storeAPI", {
    loadProducts: (callback: (event: Electron.IpcRendererEvent, productsOrError: Product[] | ApiError) => void) => ipcRenderer.on("load-products", callback)
});