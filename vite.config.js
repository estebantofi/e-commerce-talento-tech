import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = "e-commerce-talento-tech";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
});
