import { parse } from 'csv-parse/sync'

export default () => ({
  name: 'vite:csv',
  async transform(src, id) {
    if (/\.csv$/.test(id)) {
      // console.log(src, id)
      // console.log(records)

      const records = parse(src, { columns: true })

      return {
        code: `export default ${JSON.stringify(records)}`
      }
    }
  }
})
