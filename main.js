import products from './src/assets/products.csv'
import './src/assets/12.css'

document.querySelector('pre').textContent = JSON.stringify(products)

if (import.meta.hot) {
  import.meta.hot.on('csv-update', ({ url, data }) => {
    // console.log(data)
    console.log(`[vite] hot updated: ${url}`);

    document.querySelector('pre').textContent = JSON.stringify(data)
  })
}
