import imgUrl from '@/img/javascript.svg'
import scriptUrl from './counter.js?url'
import scriptAsString from './counter.js?raw'
import MyWorker from './worker.js?worker'

console.log(imgUrl)
console.log(scriptUrl)
console.log(scriptAsString)
console.log(MyWorker)

new MyWorker()

document.getElementById('img').src = imgUrl
