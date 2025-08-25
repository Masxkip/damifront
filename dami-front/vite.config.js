import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/",                 // ensures assets resolve from root
  build: {
    outDir: "dist"           // Vercel will serve from /dist after build
  }
})
