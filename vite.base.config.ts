import path from 'path'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

type ViteBaseConfig = {
  dirname: string
  port: number
  proxy_url?: string
  plugins?: any
}

export const ViteBaseConfig = ({
  dirname,
  port,
  proxy_url,
  plugins = [],
}: ViteBaseConfig) => ({
  resolve: {
    alias: {
      '@': path.resolve(dirname, 'src'), // use dirname instead of __dirname
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
  plugins: [vue(), vueJsx(), splitVendorChunkPlugin(), ...plugins],
})

// https://vitejs.dev/config/
export default defineConfig({
  ...ViteBaseConfig,
})
