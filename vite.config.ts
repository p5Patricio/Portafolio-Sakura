import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('react') || id.includes('react-router-dom')) return 'react'
          if (id.includes('framer-motion')) return 'motion'
          if (id.includes('lucide-react') || id.includes('react-icons')) return 'icons'
        },
      },
    },
  },
})
