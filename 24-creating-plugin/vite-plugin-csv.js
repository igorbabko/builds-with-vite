import { parse } from 'csv-parse/sync'

export default () => ({
  name: 'csv',
  transform(src, id) {
    if (/\.csv$/.test(id)) {
      const records = parse(src, { columns: true })

      return {
        code: `export default ${JSON.stringify(records)}`
      }
    }
  }
})
