import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import Inspect from 'vite-plugin-inspect'
import checker from 'vite-plugin-checker'
import path from 'path'

export default {
  esbuild: {
    jsxFactory: 'create',
    jsxInject: 'import { create } from "/src/12-create.js"'
  },
  plugins: [
    Inspect(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./**/*.{ts,tsx}"',
      },
    }),
    ViteImageOptimizer({
      jpg: {
        quality: 80,
      },
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/assets')
    }
  }
}
