import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 5180, // 你的 Vite 伺服器埠號
    host: "0.0.0.0", // 允許外部訪問
    allowedHosts: [".ngrok-free.app"], // 允許 ngrok 網址
  },
});
