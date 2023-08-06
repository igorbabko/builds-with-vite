import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import Inspect from 'vite-plugin-inspect'
import checker from 'vite-plugin-checker'
import Csv from './vite-plugin-csv'
import path from 'path'

export default {
  server: {
    port: '3333',
    strictPort: true,
    open: true, // '/api/products',
    headers: {
      'a': 'b'
    },
    proxy: {
      // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
      // '/products': 'https://dummyjson.com',

      // with options: http://localhost:5173/api/bar-> http://jsonplaceholder.typicode.com/bar
      '/api': {
        target: 'https://dummyjson.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  esbuild: {
    jsxFactory: 'create',
    jsxInject: 'import { create } from "/src/12-create.js"'
  },
  plugins: [
    Csv(),
    Inspect(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./**/*.{ts,tsx}"'
      }
    }),
    ViteImageOptimizer({
      jpg: {
        quality: 80
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/assets')
    }
  }
}
