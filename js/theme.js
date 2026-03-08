export function iniciarTheme() {
  const btn = document.querySelector('.theme-toggle');
  const iconSun = btn.querySelector('.icon-sun');
  const iconMoon = btn.querySelector('.icon-moon');

  const iconesDark = [
    { selector: '.icons a:nth-child(1) img', light: 'img/icon-github.svg', dark: 'img/icon-github-dark.svg' },
    { selector: '.icons a:nth-child(2) img', light: 'img/icon-linkedin.svg', dark: 'img/icon-linkedin-dark.svg' },
    { selector: '.icons a:nth-child(3) img', light: 'img/icon-instagram.svg', dark: 'img/icon-instagram-dark.svg' },
    { selector: '.icons a:nth-child(4) img', light: 'img/icon-gmail.svg', dark: 'img/icon-gmail-dark.svg' },
    { selector: '.contato-social a:nth-child(1) img', light: 'img/icon-linkedin.svg', dark: 'img/icon-linkedin-dark.svg' },
    { selector: '.contato-social a:nth-child(2) img', light: 'img/icon-github.svg', dark: 'img/icon-github-dark.svg' },
    { selector: '.contato-social a:nth-child(3) img', light: 'img/icon-gmail.svg', dark: 'img/icon-gmail-dark.svg' },
  ];

  function aplicarTema(isDark) {
    
    btn.classList.toggle('dark', isDark);
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : '');
    if (!isDark) document.documentElement.removeAttribute('data-theme');


    iconSun.style.display = isDark ? 'none' : 'inline';
    iconMoon.style.display = isDark ? 'inline' : 'none';


    iconesDark.forEach(({ selector, light, dark }) => {
      const el = document.querySelector(selector);
      if (el) el.src = isDark ? dark : light;
    });
  }


  const temaSalvo = localStorage.getItem('tema') === 'dark';
  aplicarTema(temaSalvo);


  btn.addEventListener('click', () => {
    const isDark = !btn.classList.contains('dark');
    aplicarTema(isDark);
    localStorage.setItem('tema', isDark ? 'dark' : 'light');
  });
}