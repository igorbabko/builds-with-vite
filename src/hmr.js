export const message = 'hello worl'

export default 'default message'

if (import.meta.hot) {
  import.meta.hot.accept((updatedModule) => {
    // remove the brace to fire 'vite:error' event
    if (updatedModule) {
      // newModule is undefined when SyntaxError happened
      console.log(updatedModule)
      // console.log(updatedModule.message)
    }
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
