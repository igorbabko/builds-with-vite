import { pluckAndLog } from 'pluck'
import { log } from 'pluck/log'

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

pluckAndLog(users, 'name')
