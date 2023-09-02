import collect from 'collect.js'

export function pluck(collection, field) {
  const plucked = collect(collection).pluck(field)

  console.log(plucked)

  return plucked
  // return collection.map((item) => item[field])
}
