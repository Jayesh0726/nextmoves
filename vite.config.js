import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Optimize React refresh
      fastRefresh: true,
    }),
    tailwindcss(),
    // Bundle size analyzer - generates stats.html
    visualizer({
      open: false,
      filename: 'dist/stats.html',
      title: 'Bundle Analyzer',
    })
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
    // Enable CSS minification
    cssMinify: true,
    // Improve source maps in production
    sourcemap: false,
  },
  // Optimize dependencies pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'three', '@react-three/fiber', 'gsap', 'lenis'],
    exclude: ['@splinetool/runtime'],
  },
})
