const MOBILE_MAX_WIDTH = 767;

const header = document.querySelector('.header');
const navigation = document.querySelector('.navigation');
const MenuButton = document.querySelector('.header__menu-toggle');
const overlay = document.querySelector('.navigation__overlay');

function openHeaderMenu() {

  MenuButton.removeEventListener(`click`, openHeaderMenu);
  MenuButton.addEventListener(`click`, closeHeaderMenu);
  overlay.addEventListener(`click`, closeHeaderMenu);

  document.addEventListener(`keydown`, onEscPress);

  document.body.classList.add(`no-scroll`)
  header.classList.add(`header_colored`);
  navigation.classList.add(`navigation_open`);
  MenuButton.classList.add(`header__menu-button_active`);

  setMenuHeight();
}

function closeHeaderMenu() {
  MenuButton.removeEventListener(`click`, closeHeaderMenu);
  MenuButton.addEventListener(`click`, openHeaderMenu);
  overlay.removeEventListener(`click`, closeHeaderMenu);

  document.removeEventListener(`keydown`, onEscPress);

  document.body.classList.remove(`no-scroll`);
  if (!isScrolled()) {
    header.classList.remove(`header_colored`);
  }
  navigation.classList.remove(`navigation_open`);
  MenuButton.classList.remove(`header__menu-button_active`);
}

function onEscPress(evt) {
  if (evt.keyCode === 27) {
    closeHeaderMenu();
  }
}

function isScrolled() {
  const pxAmount = 0
  const scrollTop = document.documentElement.scrollTop;

  return scrollTop > pxAmount;
}

function setMenuHeight() {
  navigation.removeAttribute(`style`);

  const deltaHeight = document.body.offsetHeight - header.offsetHeight;
  const menuHeight = menu.offsetHeight;

  if (deltaHeight < menuHeight) {
    navigation.setAttribute(`style`, `height: ${deltaHeight}px`);
  }
}

if (navigation) {
  window.addEventListener(`scroll`, function () {
    if (isScrolled()) {
      header.classList.add(`header_colored`);
    } else {
      header.classList.remove(`header_colored`);
    }
  })

  closeHeaderMenu();
}
