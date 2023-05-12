import imgUrl from '@/img/javascript.svg'
import scriptUrl from './counter.js?url'
import scriptAsString from './counter.js?raw'

console.log(imgUrl)
console.log(scriptUrl)
console.log(scriptAsString)

document.getElementById('img').src = imgUrl
