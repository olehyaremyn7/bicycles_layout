(function ibg() {
  let ibg = document.querySelectorAll('.ibg')
  for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')'
    }
  }
})()

document.querySelector('.icon-menu').addEventListener('click', (event) => {
  const $menu_body = document.querySelector('.menu__body')
  if (event.target.classList.contains('active')) {
    event.target.classList.remove('active')
    $menu_body.classList.remove('active')
  } else {
    event.target.classList.add('active')
    $menu_body.classList.add('active')
  }
})