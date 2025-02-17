import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/lit-card.ts", // Change this to your component entry file
      name: "NjCard",
      fileName: () => "nj-card.js",
      formats: ["es"]
    },
    rollupOptions: {
      output: {
        assetFileNames: "[name].[ext]",
        chunkFileNames: "[name].js",
        entryFileNames: "nj-card.js"
      }
    }
  }
});
