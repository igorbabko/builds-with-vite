export const title = 'hello world'

export default 'default message'

let styles

function addStylesheet() {
  styles = document.createElement('style')

  styles.innerHTML = 'body { background: indigo; color: white }'

  document.head.appendChild(styles)
}

function removeStylesheet() {
  styles.remove()
}

addStylesheet()

if (import.meta.hot) {
  import.meta.hot.accept((updatedModule) => {
    // remove the brace to fire 'vite:error' event
    if (updatedModule) {
      // newModule is undefined when SyntaxError happened
      console.log(updatedModule)
      // console.log(updatedModule.message)
    }
  })

  import.meta.hot.dispose(() => {
    // cleanup side effect
    removeStylesheet()
  })

  import.meta.hot.on('vite:beforeUpdate', (b) => {
    console.log('vite:beforeUpdate', b)
  })

  import.meta.hot.on('vite:afterUpdate', (b) => {
    console.log('vite:afterUpdate', b)
  })

  import.meta.hot.on('vite:error', (b) => {
    console.log('vite:error', b)
  })
}
