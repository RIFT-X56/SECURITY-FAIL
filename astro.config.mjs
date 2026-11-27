// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://xfivesecurity.dev',
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: (page) => !page.endsWith('/404/') })],
  build: {
    // Aucune feuille de style en ligne : la CSP peut rester en style-src 'self'
    inlineStylesheets: 'never',
  },
  vite: {
    build: {
      // Aucune ressource convertie en data: dans le JS/CSS (polices comprises)
      assetsInlineLimit: 0,
    },
  },
});
