import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configuração de testes (Vitest) - jsdom simula ambiente de browser.
  test: {
    environment: 'jsdom', // Necessário para componentes React que usam DOM
    setupFiles: './setupTests.js' // Arquivo com setup global (jest-dom)
  }
})
