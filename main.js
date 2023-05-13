import '@/style.scss'

const modules = import.meta.glob('./src/*.js')

console.log(modules)

for (const path in modules) {
  modules[path]().then((mod) => {
    console.log(path, mod)
  })
}
