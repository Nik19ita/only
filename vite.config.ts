import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    svgr(),
    react(),
    tsconfigPaths({
      projects: ["tsconfig.json"],
    }),
  ],
  base: "/only/",
});
