import { defineConfig } from 'vite'

export default defineConfig({
  esbuild: {
    jsxFactory: 'create',
    jsxFragment: 'frag',
    // jsxInject: `import './mod.js'`,
    // loader: { '.js': 'jsx' },
  },
})
