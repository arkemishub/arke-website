import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
    site: 'https://arkemishub.github.io',
    base: '/arke-website',
    trailingSlash: 'never',
    integrations: [preact(), tailwind()],
});
