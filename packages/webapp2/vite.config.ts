import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'
import { ViteBaseConfig } from '../../vite.base.config'

// https://vitejs.dev/config/
export default defineConfig({
  ...ViteBaseConfig({
    port: 6020,
  }),
  plugins: [
    vue(),
    federation({
      name: '@webapp2',
      filename: 'bundle.js',
      exposes: {
        './Button': './src/components/Button.vue',
        './Footer': './src/components/Footer.vue',
      },
      shared: ['vue'],
    }),
  ],
})
