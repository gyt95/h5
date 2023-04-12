import { defineConfig } from 'vite'
import federation from '@originjs/vite-plugin-federation'
import { ViteBaseConfig } from '../../vite.base.config'

// https://vitejs.dev/config/
export default defineConfig({
  ...ViteBaseConfig({
    dirname: __dirname,
    port: 6020,
    proxy_url: 'https://webapp2.com',
    plugins: [
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
  }),
})
