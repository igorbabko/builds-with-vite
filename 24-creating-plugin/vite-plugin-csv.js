import { parse } from 'csv-parse/sync'

export default () => {
  let config = null

  return {
    name: 'csv',
    // apply: 'serve', // 'build'
    apply(config, { command, mode }) {
      // console.log(config)

      return mode === 'development'
    },
    configResolved(resolvedConfig) {
      config = resolvedConfig
    },
    transform(src, id) {
      const columns = config.command === 'serve'

      if (/\.csv$/.test(id)) {
        const records = parse(src, { columns })

        return {
          code: `export default ${JSON.stringify(records)}`
        }
      }
    }
    // transformIndexHtml(html) {
    //   console.log('--------------------------------------');
    //   return html.replace(/<\/body>/, `<script>alert('aa')</script><\/body>`)
    // },
  }
}
