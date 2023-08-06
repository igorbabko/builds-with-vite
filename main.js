import products from './src/assets/products.csv'

document.querySelector('pre').textContent = JSON.stringify(products)

if (import.meta.hot) {
  import.meta.hot.on('csv-update', ({ url, data }) => {
    // console.log(data)
    console.log(`[vite] hot updated: ${url}`)

    document.querySelector('pre').textContent = JSON.stringify(data)
  })

  import.meta.hot.on('connected', (message) => {
    console.log(message)

    import.meta.hot.send('ping', 'Hello server!')
  })

  import.meta.hot.on('pong', (message) => {
    console.log(message)
  })
}
