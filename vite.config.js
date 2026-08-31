import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        app: resolve(import.meta.dirname, "index.html"),
        contact: resolve(import.meta.dirname, "contact.html"),
        support: resolve(import.meta.dirname, "support.html"),
      },
    },
  },
});
