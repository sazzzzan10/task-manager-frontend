import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
  build: {
    outDir: 'docs', // Change the output directory to 'docs'
    emptyOutDir: true, // Optional: Cleans the output directory before building
  },
});