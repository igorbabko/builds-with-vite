import { defineConfig } from 'vite'

export default defineConfig({
  // build: {
  //   cssCodeSplit: false,
  // },
  esbuild: {
    jsxFactory: 'create',
    jsxFragment: 'frag',
    // jsxInject: `import './mod.js'`,
    // loader: { '.js': 'jsx' },
  },
})
