const menu = document.querySelector('.header__menu');
const menuMobile = document.querySelector('.header__menu-mobile');
const menuItem = document.querySelector('.header__menu-item');
const hamburger = document.querySelector('.header__hamburger');
const html = document.querySelector('html');
let selected = menuItem;

function addClass(event,) {
    const { target } = event;

    if (target.tagName !== 'A') return;

    if (selected) {
        selected.classList.remove('active');
    }

    selected = target;
    selected.classList.add('active');
}

function openMenu(event) {

    const { target } = event

    if (target.tagName !== 'DIV') return;

    menuMobile.classList.toggle('active')
    target.classList.toggle('active')

    noScroll(html)
}

function noScroll(html) {
  if (html.getAttribute('scroll')) {
     return html.removeAttribute('scroll')
  }

    html.setAttribute('scroll', 'none')
}


menu.addEventListener('click', addClass)
menuMobile.addEventListener('click', addClass)
hamburger.addEventListener('click', openMenu)
