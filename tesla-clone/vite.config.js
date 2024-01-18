import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginPages from "vite-plugin-gh-pages";

export default defineConfig({
  base: "./", // Set the base path to "./"
  plugins: [react(), vitePluginPages],
});
