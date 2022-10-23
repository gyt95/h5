import path from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export const ViteBaseConfig = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [vue()],
}

// https://vitejs.dev/config/
export default defineConfig({
  ...ViteBaseConfig,
})
