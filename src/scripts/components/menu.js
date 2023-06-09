const menu = document.querySelector('.header__menu');
const menuItem = document.querySelector('.header__menu-item');

let selected = menuItem;

function addClass(event) {
    const {target} = event;

    if (target.tagName !== 'A') return;

    if (selected) {
        selected.classList.remove('active');
    }

    selected = target;
    selected.classList.add('active');
}



menu.addEventListener('click', addClass)
