import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import collect from 'collect.js'
import { template } from './test.jsx'
// import collect from  '/node_modules/.vite/deps/collect__js.js?v=4e5c16cb'

setTimeout(() => {
  console.log(collect([1, 5, 2, 3, 4]).max())
})

document.querySelector('#app').appendChild(template)
