import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://thebalancedchiro.com.au',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({ filter: (page) => !page.includes('/offer') }),
  ],
});
