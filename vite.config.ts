import { defineConfig } from 'vite'
import path from 'path'
import { createVitePlugins } from './config/vite/plugin'

export default defineConfig({
  plugins: createVitePlugins(),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/style/main.scss";',
      },
    },
  },
})
