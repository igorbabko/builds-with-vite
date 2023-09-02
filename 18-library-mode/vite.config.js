import Inspect from 'vite-plugin-inspect'
import { resolve } from 'path'

export default {
  plugins: [Inspect()],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.js'),
      name: 'Pluck',
      fileName: 'pluck'
    }
  }
}
