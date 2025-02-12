import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:8000', // Proxy API calls to Laravel backend
    },
    watch: {
      usePolling: true, // Solución para detección de cambios en sistemas de archivos
    },
    hmr: {
      overlay: false, // Evita que la pantalla se congele por errores menores
    }
  },
})
