const openButton = document.querySelector('.js-open-menu')
const closeButton = document.querySelector('.js-close-menu')
console.log(closeButton)

openButton.addEventListener('click', e => {
  document.body.classList.add('menu-is-open')
})

closeButton.addEventListener('click', e => {
  document.body.classList.remove('menu-is-open')
})
