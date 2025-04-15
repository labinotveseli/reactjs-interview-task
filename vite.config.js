import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 1000, // Runs on http://localhost:1000
    host: true, // Allows access via network IP (e.g., 192.168.x.x:1000)
    open: true
  }
})
