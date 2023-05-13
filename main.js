import '@/style.scss'

// const modules = import.meta.glob('./src/*.js')
const modules1 = import.meta.glob('./src/a.js', { import: 'a1', eager: true })
const modules2 = import.meta.glob('./src/*.js', { as: 'raw', eager: true })
const modules3 = import.meta.glob('./src/*.js')

console.log(modules1)

for (const path in modules3) {
  modules3[path]().then((mod) => {
    console.log(path, mod)
  })
}
