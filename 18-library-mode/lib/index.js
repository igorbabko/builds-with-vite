export function pluck(collection, field) {
  return collection.map((item) => item[field])
}

const users = [
  {
    name: 'John',
    age: 26
  },
  {
    name: 'Jane',
    age: 32
  },
  {
    name: 'Johnny',
    age: 2
  }
]

console.log(pluck(users, 'name'))
