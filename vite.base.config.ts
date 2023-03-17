import path from 'path'
import { defineConfig } from 'vite'

type ViteBaseConfig = {
  port: number
  proxy_url?: string
}

export const ViteBaseConfig = ({ port, proxy_url }: ViteBaseConfig) => ({
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
        target: proxy_url,
        // target: 'http://192.168.2.17:9756',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, ''),
      },
    },
  },
  esbuild: {
    pure: ['console.log'],
  },
  build: {
    target: 'esnext',
    sourcemap: true,
    // chunkSizeWarningLimit: 1500,
  },
  // plugins: [vue()],
})

// https://vitejs.dev/config/
export default defineConfig({
  ...ViteBaseConfig,
})
