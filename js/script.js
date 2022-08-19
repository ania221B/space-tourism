/* =========
/* METHOD 1 - WITH CLASSES

const openButton = document.querySelector('.js-open-menu')
const closeButton = document.querySelector('.js-close-menu')
console.log(closeButton)

openButton.addEventListener('click', e => {
  document.body.classList.add('menu-is-open')
})

closeButton.addEventListener('click', e => {
  document.body.classList.remove('menu-is-open')
})
 ========== */

/* ==========
/* METHOD 2 - WITH DATA ATTRIBUTES */

const nav = document.querySelector('.primary-nav')
const navToggleButton = document.querySelector('.mobile-nav-toggle')

navToggleButton.addEventListener('click', e => {
  const visibility = nav.getAttribute('data-visibility')

  if (visibility === 'false') {
    nav.setAttribute('data-visibility', true)
    navToggleButton.setAttribute('aria-expanded', true)
  } else {
    nav.setAttribute('data-visibility', false)
    navToggleButton.setAttribute('aria-expanded', false)
  }
})
