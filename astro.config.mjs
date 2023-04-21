import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { loadEnv } from "vite";
import react from "@astrojs/react";

const { PUBLIC_BASE_URL } = loadEnv(import.meta.env.MODE, process.cwd(), "");
// https://astro.build/config
export default defineConfig({
  site: "https://arkemishub.github.io",
  base: PUBLIC_BASE_URL ?? '/',
  trailingSlash: "never",
  integrations: [tailwind(), react()],
});
