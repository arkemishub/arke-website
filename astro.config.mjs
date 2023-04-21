import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://arkemishub.github.io",
  base: "/arke-website",
  trailingSlash: "never",
  integrations: [tailwind(), react()],
});
