export default {
  server: {
    port: '3333',
    strictPort: true,
    headers: {
      a: 'b'
    },
    proxy: {
      // '/products': 'https://dummyjson.com',
      '/api': {
        target: 'https://dummyjson.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  preview: {
    port: '4444',
    strictPort: true,
    open: '/api/products',
    proxy: {
      '/api': {
        target: 'https://dummyjson.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
}
