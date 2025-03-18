
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: "::",
    port: 8080,
  },
  // Ensure we're not relying on TypeScript configuration
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
})
