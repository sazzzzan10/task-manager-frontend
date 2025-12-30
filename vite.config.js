import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base:"https://sazzzzan10.github.io/",
  build: {
    outDir: 'docs', // Change the output directory to 'docs'
    emptyOutDir: true, // Optional: Cleans the output directory before building
  },
});