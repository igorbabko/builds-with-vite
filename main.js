const modules = import.meta.glob('./src/10/*.js', { eager: true })

console.log(modules)

// document.addEventListener('click', () => {
//   Object.values(modules).forEach((module) => {
//     module().then((data) => {
//       console.log(data)
//     })
//   })
// })
