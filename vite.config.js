import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import checker from 'vite-plugin-checker'

import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/assets'),
    },
  },
  plugins: [
    Inspect(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./*.ts"',
      },
    }),
  ],
})
