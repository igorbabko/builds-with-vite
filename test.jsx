function create(el, attrs, content) {
  console.log(el, attrs, content)

  const node = document.createElement(el, attrs)

  Object.entries(attrs || {}).forEach(([name, value]) => {
    console.log(name, value)

    node.setAttribute(name, value)
  })

  if (typeof content === 'string') {
    content = document.createTextNode(content)
  }

  node.appendChild(content)

  return node
}

export const template = (
  <div class="bg-red-500">
    <p>
      <a href="#">something</a>
    </p>
  </div>
)
