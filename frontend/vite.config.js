import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/movies-app",
  build: {
    outDir: "dist"
  },
  server: {
    historyApiFallback: true
  }
})
