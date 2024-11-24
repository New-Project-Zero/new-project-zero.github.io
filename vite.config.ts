import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  base: '/new-project-zero.github.io/', // repo name
  build: {
    outDir: 'dist', // Ensure the build directory is correct
  },
  plugins: [
    react(),
    nodePolyfills({
      include: ['buffer']
    })
  ],
  define: {
    'global': {},
    'process.env': {}
  }
})