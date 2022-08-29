const tabList = document.querySelector('[role="tablist"]')
const tabs = Array.from(tabList.querySelectorAll('[role="tab"]'))
const articles = Array.from(document.querySelectorAll('.destination-info'))
const images = Array.from(document.querySelectorAll('.destination-img'))

tabList.addEventListener('keydown', changeTabFocus)

let tabFocus = 0
function changeTabFocus (e) {
  const keydownLeft = 37
  const keydownRight = 39

  // change the tabindex of the current tab to -1
  if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
    tabs[tabFocus].setAttribute('tabindex', -1)
  }
  // if the right key is pushed, move to the next tab on the right
  if (e.keyCode === keydownRight) {
    tabFocus++
    if (tabFocus >= tabs.length) {
      tabFocus = 0
    }
  }

  // if the left key is pushed, move to the next tab on the left

  if (e.keyCode === keydownLeft) {
    tabFocus--
    if (tabFocus < 0) {
      tabFocus = tabs.length - 1
    }
  }

  const theme = tabs[tabFocus].getAttribute('data-theme')
  const currentArticle = document.querySelector(`article[data-theme="${theme}"]`)
  const currentImage = document.querySelector(`picture[data-theme="${theme}"]`)

  tabs[tabFocus].setAttribute('tabindex', 0)
  tabs[tabFocus].focus()
  tabs.forEach(tab => tab.setAttribute('aria-selected', false))
  tabs[tabFocus].setAttribute('aria-selected', true)

  articles.forEach(article => article.setAttribute('hidden', true))
  images.forEach(image => image.setAttribute('data-visible', false))

  currentArticle.removeAttribute('hidden')
  currentImage.setAttribute('data-visible', true)
}
