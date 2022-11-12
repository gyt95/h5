import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import federation from '@originjs/vite-plugin-federation'
// import { ViteBaseConfig } from '../../vite.base.config'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // ...ViteBaseConfig,
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    // federation({
    //   name: '@h5/core',
    //   exposes: {
    //     // './Button': './src/components/Button.vue',
    //     // './Footer': './src/components/Footer.vue',
    //   },
    //   shared: ['vue'],
    // })
  ],
  build: {
    target: 'esnext',
  },
})
