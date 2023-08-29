export function create(el, attrs, content) {
  const node = document.createElement(el)

  Object.entries(attrs || {}).forEach(([name, value]) => {
    node.setAttribute(name, value)
  })

  if (typeof content === 'string') {
    content = document.createTextNode(content)
  }

  node.appendChild(content)

  return node
}
