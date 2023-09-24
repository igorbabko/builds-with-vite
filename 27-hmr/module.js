import './submodule'

export const message = 'message from module.js'

export default 'default message from module.js'

console.log('from module.js')

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
}
