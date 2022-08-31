const tabList = document.querySelector('[role="tablist"]')
const tabs = Array.from(tabList.querySelectorAll('[role="tab"]'))
// const articles = Array.from(document.querySelectorAll('.destination-info'))
// const images = Array.from(document.querySelectorAll('.destination-img'))

tabList.addEventListener('keydown', changeTabFocus)

tabs.forEach(tab => {
  tab.addEventListener('click', changeTabPanel)
})

let tabFocus = 0
function changeTabFocus (e) {
  const keydownLeft = 37
  const keydownRight = 39

  if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
    tabs[tabFocus].setAttribute('tabindex', -1)

    if (e.keyCode === keydownRight) {
      tabFocus++
      if (tabFocus >= tabs.length) {
        tabFocus = 0
      }
    } else if (e.keyCode === keydownLeft) {
      tabFocus--
      if (tabFocus < 0) {
        tabFocus = tabs.length - 1
      }
    }

    tabs[tabFocus].setAttribute('tabindex', 0)
    tabs[tabFocus].focus()
  }

  /*
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
  */
}

/* tabList.addEventListener('click', e => {
  const currentTab = e.target.closest('button[role="tab"]')
  const theme = currentTab.getAttribute('data-theme')
  const currentArticle = document.querySelector(`article[data-theme="${theme}"]`)
  const currentImage = document.querySelector(`picture[data-theme="${theme}"]`)
  if (!currentTab) return

  tabs.forEach(t => t.setAttribute('aria-selected', false))
  currentTab.setAttribute('aria-selected', true)

  articles.forEach(article => article.setAttribute('hidden', true))
  images.forEach(image => image.setAttribute('data-visible', false))

  currentArticle.removeAttribute('hidden')
  currentImage.setAttribute('data-visible', true)
}) */

function changeTabPanel (e) {
  const targetTab = e.target
  const targetPanel = targetTab.getAttribute('aria-controls')
  const targetImage = targetTab.getAttribute('data-image')

  const tabContainer = targetTab.parentNode
  const mainContainer = tabContainer.parentNode

  tabContainer
    .querySelector('[aria-selected="true"]')
    .setAttribute('aria-selected', false)

  targetTab.setAttribute('aria-selected', true)

  hideContent(mainContainer, '[role="tabpanel"]')
  showContent(mainContainer, [`#${targetPanel}`])

  hideContent(mainContainer, 'picture')
  showContent(mainContainer, [`#${targetImage}`])
  // mainContainer.querySelector([`#${targetImage}`]).setAttribute('data-visible', true)
}

function hideContent (parent, content) {
  parent
    .querySelectorAll(content)
    .forEach((item) => item.setAttribute('hidden', true))
}

function showContent (parent, content) {
  parent.querySelector(content).removeAttribute('hidden')
}
