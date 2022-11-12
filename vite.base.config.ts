import path from 'path'
import { defineConfig } from 'vite'

type ViteBaseConfig = {
  port: number
}

export const ViteBaseConfig = ({ port }: ViteBaseConfig) => ({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: port,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'https://xxx.com',
        // target: 'http://192.168.2.17:9756',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    target: 'esnext',
  },
  // plugins: [vue()],
})

// https://vitejs.dev/config/
export default defineConfig({
  ...ViteBaseConfig,
})
