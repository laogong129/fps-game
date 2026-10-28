import { defineConfig } from 'vite'

export default defineConfig({
  base: '/fps-game/',
  optimizeDeps: { noDiscovery: true, include: [] },
  build: {
    outDir: 'docs',
  }
})
