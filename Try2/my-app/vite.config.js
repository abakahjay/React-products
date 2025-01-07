import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 7005, // Replace 4000 with your desired port
  },
  test: {//This is how we setup the tests
    environment: 'jsdom',
    setupFiles: './setupTests.js',
  }
})
