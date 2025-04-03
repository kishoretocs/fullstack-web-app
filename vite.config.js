import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "./static",
  base: "base: process.env.NODE_ENV === 'production' ? '/fullstack-web-app/' : '/',",
});
