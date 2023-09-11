const { pluck } = require('pluck')
const { log } = require('pluck/log')

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

log(pluck(users, 'name'))
