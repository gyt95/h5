import path from 'path'
import { defineConfig } from 'vite'

export const ViteBaseConfig = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // plugins: [vue()],
}

// https://vitejs.dev/config/
export default defineConfig({
  ...ViteBaseConfig,
})
