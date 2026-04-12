import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  // Relative base keeps the built app working both on GitHub Pages (/CV/)
  // and local preview/dev scenarios that open index from root.
  base: './',
});
