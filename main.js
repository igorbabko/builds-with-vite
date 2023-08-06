import products from './src/assets/products.csv'
import './src/hmr.js'

document.querySelector('pre').textContent = JSON.stringify(products)

// needs to use this conditional to make it tree-shaken in production
if (import.meta.hot) {
  import.meta.hot.on('csv-update', ({ url, data }) => {
    // console.log(data)
    console.log(`[vite] hot updated: ${url}`)

    document.querySelector('pre').textContent = JSON.stringify(data)
  })
}
