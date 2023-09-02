const { pluck } = require('pluck')

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

const plucked = pluck(users, 'name')

console.log(plucked)
