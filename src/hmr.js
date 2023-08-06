import messageFromDep1 from './dep1.js'
import messageFromDep2 from './dep2.js'

console.log('hmr.js')
console.log(messageFromDep1, ' / ', messageFromDep2)

if (import.meta.hot) {
  console.log('HMR')

  import.meta.hot.accept('./dep1.js', (updatedDep1) => {
    console.log('dep1.js updated', updatedDep1)
  })

  // Can also accept an array of dep modules:
  import.meta.hot.accept(
    ['./dep1.js', './dep2.js'],
    ([updatedDep1, updatedDep2]) => {
      if (updatedDep1) {
        console.log('dep1.js updated', updatedDep1)
      }

      if (updatedDep2) {
        console.log('dep2.js updated', updatedDep2)
      }

      // The callback receives an array where only the updated module is
      // non null. If the update was not successful (syntax error for ex.),
      // the array is empty
    }
  )
}
