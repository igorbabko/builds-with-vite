import styles from './src/assets/style.css?inline'
import styles2 from './src/assets/style2.css'

console.log(styles)
console.log(styles2)

const styleEl = document.createElement('style')

styleEl.innerText = styles

document.querySelector('head').append(styleEl)
