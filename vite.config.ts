import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
  base: "/my-react-app/", // ⚠️ GitHub Pages 部署設定（確保與 GitHub Repository 名稱相同）
});
