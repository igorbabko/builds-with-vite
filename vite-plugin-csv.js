import { parse } from 'csv-parse/sync'

export default () => {
  let config = null

  return {
    name: 'csv',
    // apply: 'serve', // 'build'
    apply(config, { command, mode }) {
      // console.log(config)

      return true // mode === 'development'
    },
    configResolved(resolvedConfig) {
      config = resolvedConfig
    },
    async transform(src, id) {
      const columns = config.command === 'serve'

      if (/\.csv$/.test(id)) {
        // console.log(src, id)
        // console.log(records)

        const records = parse(src, { columns })

        return {
          code: `export default ${JSON.stringify(records)}`
        }
      }
    },
    // transformIndexHtml(html) {
    //   console.log('--------------------------------------');
    //   return html.replace(/<\/body>/, `<script>alert('aa')</script><\/body>`)
    // },
    async handleHotUpdate(context) {
      // console.log(context.modules[0].url)

      if (/\.csv$/.test(context.file)) {
        context.server.ws.send({
          type: 'custom',
          event: 'csv-update',
          // data: await context.read()
          data: {
            url: context.modules[0].url,
            data: parse(await context.read(), { columns: true })
          }
        })

        return []
      }
    }
  }
}