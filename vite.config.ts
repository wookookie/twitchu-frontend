import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const URL = "http://127.0.0.1:8000";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 18000,
    proxy: {
      "/auth": URL,
      "/chat": URL,
      "/socket.io": {
        target: URL,
        ws: true,
      },
    },
  },
  plugins: [react()],
});
