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

/* ============= */
/* TABBY         */
/* ============ */

/* const tabList = document.querySelector('.tabs')
const tabs = [...tabList.children]
const contentList = document.querySelector('.tab__content')
const contentItems = [...contentList.children]

tabList.addEventListener('click', e => {
  if (!e.target.closest('button')) return

  const tab = e.target.closest('button')
  const theme = tab.getAttribute('data-theme')
  const tabContent = contentList.querySelector(`#${theme}`)

  tabs.forEach(tab => {
    tab.classList.remove('active')
  })
  contentItems.forEach(item => {
    item.classList.remove('active')
  })
  tab.classList.add('active')
  tabContent.classList.add('active')
})

*/

/* ============= */
/* METHOD 2       */
/* ============ */

/* const tabList = document.querySelector('.tabs')
const tabs = [...tabList.children]
const contentList = document.querySelector('.tab__content')
const contentItems = [...contentList.children]

tabList.addEventListener('click', e => {
  if (!e.target.closest('button')) return

  const tab = e.target.closest('button')
  const theme = tab.getAttribute('data-theme')
  const tabContent = contentList.querySelector(`#${theme}`)

  tabs.forEach(t => {
    t.setAttribute('aria-selected', false)
  })
  contentItems.forEach(item => {
    item.setAttribute('data-visibility', false)
  })
  tab.setAttribute('aria-selected', true)
  tabContent.setAttribute('data-visibility', true)
})
*/
