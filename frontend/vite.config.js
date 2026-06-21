import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Конфигурация сборщика Vite с поддержкой React
export default defineConfig({
  plugins: [react()],
})