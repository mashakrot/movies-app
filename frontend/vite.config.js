import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/movies-app",
  base: "https://mashakrot.github.io/movie-app/",
  build: {
    outDir: "dist"
  },
  server: {
    historyApiFallback: true
  }
})
