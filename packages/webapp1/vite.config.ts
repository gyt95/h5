import { defineConfig } from 'vite'
import ViteBaseConfig from '../../vite.base.config'

// https://vitejs.dev/config/
export default defineConfig({
  ...ViteBaseConfig,
  server: {
    port: 8020,
  },
})
