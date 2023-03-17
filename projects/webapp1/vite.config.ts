import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'
import { ViteBaseConfig } from '../../vite.base.config'

// https://vitejs.dev/config/
export default defineConfig({
  ...ViteBaseConfig({
    port: 6010,
    proxy_url: 'https://webapp1.com',
  }),
  plugins: [
    vue(),
    splitVendorChunkPlugin(),
    federation({
      name: '@webapp1',
      remotes: {
        '@webapp2': 'http://localhost:4173/assets/bundle.js',
      },
      shared: ['vue'],
    }),
  ],
})
