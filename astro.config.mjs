import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/P3224',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
});
