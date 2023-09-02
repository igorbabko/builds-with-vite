import { pluck } from 'pluck'
import { log } from 'pluck/log'
console.log(log)

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

log(plucked)
