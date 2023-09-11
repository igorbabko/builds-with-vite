import { pluckAndLog } from '@igorbabko.teach/pluck'
import { log } from '@igorbabko.teach/pluck/log'

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
