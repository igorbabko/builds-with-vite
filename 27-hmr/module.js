import './submodule'

export const message = 'message from module.js'

export default 'default message from module.js'

console.log('from module.js')

let styles

function addStylesheet() {
  styles = document.createElement('style')
  
  styles.innerHTML = 'body { background: indigo; color: yellow; }'
  
  document.head.appendChild(styles)
}

function removeStylesheet() {
  styles.remove()
}

addStylesheet()

if (import.meta.hot) {
  import.meta.hot.accept((updatedModule) => {
    if (updatedModule) {
      console.log(updatedModule)
    }
  })

  import.meta.hot.accept(['./submodule.js'], ([newSubmodule]) => {
    if (newSubmodule) {
      console.log(newSubmodule)
    }
  })
  
  import.meta.hot.dispose(() => {
    removeStylesheet()
  })
  
  import.meta.hot.on('vite:beforeUpdate', (data) => {
    console.log('before update', data)
  })

  import.meta.hot.on('vite:afterUpdate', (data) => {
    console.log('after update', data)
  })

  import.meta.hot.on('vite:error', (data) => {
    console.log('error', data)
  })
}
