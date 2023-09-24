import { parse } from 'csv-parse/sync'

export default () => {
  let config = null

  return {
    name: 'csv',
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
    },
    // configureServer(server) {
    //   server.ws.on('connection', () => {
    //     server.ws.send('connected', 'Connection established')
    //   })

    //   server.ws.on('ping', (message, client) => {
    //     console.log(message)

    //     client.send('pong', 'Hello client!')
    //   })
    // },
    async handleHotUpdate(context) {
      if (/\.csv$/.test(context.file)) {
        context.server.ws.send({
          type: 'custom',
          event: 'csv-update',
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
