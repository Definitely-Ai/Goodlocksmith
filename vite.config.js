import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),
        angier: resolve(process.cwd(), 'domains/angier.html'),
        dunn: resolve(process.cwd(), 'domains/dunn.html'),
        harnett: resolve(process.cwd(), 'domains/harnett.html'),
        wake: resolve(process.cwd(), 'domains/wake.html'),
        fuquay: resolve(process.cwd(), 'domains/fuquay.html'),
        lillington: resolve(process.cwd(), 'domains/lillington.html'),
      },
    },
  },
})
