import styles from './src/assets/style.module.css'
import styles2 from './src/assets/style2.module.css'

console.log(styles)
console.log(styles2)

document.querySelector('#app').classList = styles.wrapper
document.querySelector('#app2').classList = styles2.wrapper
