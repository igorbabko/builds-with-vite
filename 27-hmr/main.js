import products from './products.csv'

document.querySelector('pre').textContent = JSON.stringify(products)

if (import.meta.hot) {
  import.meta.hot.on('csv-update', ({ url, data }) => {
    console.log(`[vite] hot updated: ${url}`)

    document.querySelector('pre').textContent = JSON.stringify(data)
  })
}
