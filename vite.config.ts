import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        ddu2025: 'ddu2025.html',
        ddu2026: 'ddu2026.html',
        next_chapter: 'next-chapter.html',
        secret_vault: 'secret-vault.html',
      },
    },
  },
})
