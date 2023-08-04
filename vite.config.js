// vite.config.js
export default {
  // ...autres options de configuration...
  build: {
    rollupOptions: {
      external: ['/javascript.svg'] // Ajoute ici les chemins que Rollup doit considérer comme externes
    }
  }
}
