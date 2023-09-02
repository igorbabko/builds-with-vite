export function pluck(collection, field) {
  return collection.map((item) => item[field])
}
