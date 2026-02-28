import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        ddu2025: 'ddu2025.html',
      },
    },
  },
})
