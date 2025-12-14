import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../static', // Rocket will serve from static/
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: `index.js`,     // fixed JS name
        chunkFileNames: `[name].js`,    // optional, fixed chunk names
        assetFileNames: `index.css`,    // fixed CSS name
      },
    },
  }
})
