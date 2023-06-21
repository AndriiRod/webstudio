const refs = {
  body: document.body,
  btnOpen: document.getElementById('menu-open'),
  btnClose: document.getElementById('menu-close'),
};

refs.btnOpen.addEventListener('click', toggleMenu);
refs.btnClose.addEventListener('click', toggleMenu);

function toggleMenu() {
  refs.body.classList.toggle('mobile-menu__show');
  document.body.style.overflow = document.body.style.overflow === 'hidden' ? 'visible' : 'hidden';
}
