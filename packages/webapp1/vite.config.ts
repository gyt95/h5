import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'
import { ViteBaseConfig } from '../../vite.base.config'

// https://vitejs.dev/config/
export default defineConfig({
  ...ViteBaseConfig,
  server: {
    port: 8010,
    host: '0.0.0.0',
  },
  plugins: [
    vue(),
    federation({
      name: '@webapp1',
      remotes: {
        '@webapp2': 'http://localhost:4173/assets/bundle.js',
      },
      shared: ['vue'],
    }),
  ],
})
