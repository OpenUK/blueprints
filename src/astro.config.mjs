import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://openuk.github.io',
  base: '/blueprints',
  integrations: [tailwind()]
});