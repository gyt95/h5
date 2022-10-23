import { defineConfig } from 'vite'
// import ViteBaseConfig from '../../vite.base.config'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // ...ViteBaseConfig,
  server: {
    port: 8020,
    host: '0.0.0.0',
  },
  plugins: [vue()],
})
