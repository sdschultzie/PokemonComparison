import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Proxy requests made to /api to the backend api service
    proxy: {
      '/api': {
        target: 'http://api:1111',
        changeOrigin: true
      }
    },
    watch: {
      usePolling: true
    },
    host: true,
    strictPort: true,
    port: 1112, // Need to explicitly set port to something other than the default 5173 for HMR to work
  },
})
