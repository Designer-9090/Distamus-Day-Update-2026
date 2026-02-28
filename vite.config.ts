import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ddu2025: resolve(__dirname, 'ddu2025.html'),
      },
    },
  },
})
