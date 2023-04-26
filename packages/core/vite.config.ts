import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import federation from '@originjs/vite-plugin-federation'
import { ViteBaseConfig } from '../../vite.base.config'

// https://vitejs.dev/config/
export default defineConfig({
  ...ViteBaseConfig({
    port: 6000,
    dirname: __dirname,
  }),
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
})
