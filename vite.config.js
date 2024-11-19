import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/flowers/",
  plugins: [react()],
  // Add other configurations if necessary
})