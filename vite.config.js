import { defineConfig } from 'vite'

import path from 'path'

export default defineConfig({
  // build: {
  //   cssCodeSplit: false,
  // },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/assets'),
    },
  },
  esbuild: {
    jsxFactory: 'create',
    jsxFragment: 'frag',
    // jsxInject: `import './mod.js'`,
    // loader: { '.js': 'jsx' },
  },
})
