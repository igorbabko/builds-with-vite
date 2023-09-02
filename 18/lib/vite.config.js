import Inspect from 'vite-plugin-inspect'
import { resolve } from 'path'

export default {
  plugins: [Inspect()],
  build: {
    lib: {
      entry: [
        resolve(__dirname, 'lib/index.js'),
        resolve(__dirname, 'lib/log.js')
      ],
      name: 'Pluck',
      fileName: (format, name) => `${name}.${format}.js`
    },
    rollupOptions: {
      external: ['collect.js'],
      // output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        // globals: {
          // vue: 'Vue'
        // }
      // }
    }
  }
}
