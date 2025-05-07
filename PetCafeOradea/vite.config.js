import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    sitemap({
      hostname: 'https://petcafeoradea.com',
      urls: [
        '/',
        '/meniu',
        '/galerie',
        '/contact',
        '/galerie/Mira',
        '/animal/Ash',
        '/animal/Chili',
        '/animal/Daisy',
        '/animal/Kira',
        '/animal/Mira',
        '/animal/Misu',
        '/animal/Tiramisu',
        '/animal/Wendy',
        '/animal/Winnie'
      ],
      exclude: ['/404'],
      lastmod: new Date().toISOString(),
    })
  ],
  build: {
    outDir: 'dist',
  },
})