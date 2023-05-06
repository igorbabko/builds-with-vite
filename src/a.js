console.log('module a');

document.body.addEventListener('click', () => {
  import('./b').then((a) => console.log(a))
})

export default 'module a'
