var isVisible = function (elem) {
  return (
    !!elem &&
    !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length)
  )
}

var menuIcon = document.querySelector('header > i.menu')

var menu = document.querySelector('nav')

document.addEventListener('click', function (e) {
  console.log('chaling')

  if (isVisible(menu) && !menu.contains(e.target)) {
    document.body.classList.remove('menu-open')
  }
})

menuIcon.addEventListener('click', function (e) {
  document.body.classList.add('menu-open')
  e.stopPropagation()
})
