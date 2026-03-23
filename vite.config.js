import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/underwriterdash/', // Matches the JBoss deployment context path

  build: {
    outDir: 'dist'
  }
})

