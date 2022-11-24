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
    sourcemap: true,
    terserOptions: {
      compress: {
        keep_infinity: true, // 防止 Infinity 被压缩成 1/0，可能会导致 Chrome 上的性能问题
        drop_console: true, // 去除 console
        drop_debugger: true, // 去除 debugger
      },
    },
    // chunkSizeWarningLimit: 1500,
  },
  // plugins: [vue()],
})

// https://vitejs.dev/config/
export default defineConfig({
  ...ViteBaseConfig,
})
