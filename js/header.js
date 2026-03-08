export function iniciarHeader() {
  const hamburger = document.querySelector('.hamburger');
  const header = document.querySelector('.header');
  const nav = document.querySelector('.nav');

  hamburger.addEventListener('click', () => {
    header.classList.toggle('menu-open');
    nav.classList.toggle('mobile-open');
  });
}