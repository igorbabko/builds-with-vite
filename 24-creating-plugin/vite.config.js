import Inspect from 'vite-plugin-inspect'
import { parse } from 'csv-parse/sync'

export default {
  plugins: [
    Inspect(),
    {
      name: 'vite:csv',
      async transform(src, id) {
        if (/\.csv$/.test(id)) {
          const records = parse(src, { columns: true })

          return {
            code: `export default ${JSON.stringify(records)}`
          }
        }
      }
    }
  ]
}
