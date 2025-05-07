import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://mxaltundal.github.io/portfolio',
  base: '/portfolio/',
  outDir: 'docs'
});