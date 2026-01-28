import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Optimize React refresh
      fastRefresh: true,
    }),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize chunk size
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules/react')) {
            return 'react-vendor';
          }
          if (id.includes('node_modules/three')) {
            return 'three-vendor';
          }
          if (id.includes('node_modules/@react-three')) {
            return 'three-vendor';
          }
          if (id.includes('node_modules/gsap') || id.includes('node_modules/@gsap') || id.includes('node_modules/motion') || id.includes('node_modules/lenis')) {
            return 'animation-vendor';
          }
          if (id.includes('node_modules/@splinetool')) {
            return 'spline-vendor';
          }
          // Separate components
          if (id.includes('components')) {
            return 'components';
          }
        },
      },
    },
    // Increase chunk size warning limit to reduce warnings
    chunkSizeWarningLimit: 2000,
    // Use esbuild for faster minification (default)
    minify: 'esbuild',
  },
  // Optimize dependencies pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'three', '@react-three/fiber'],
    exclude: ['@splinetool/runtime'],
  },
})
