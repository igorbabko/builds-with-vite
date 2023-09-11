import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import Inspect from 'vite-plugin-inspect'

export default {
  plugins: [
    Inspect(),
    ViteImageOptimizer({
      jpg: {
        quality: 80
      }
    })
  ]
}
