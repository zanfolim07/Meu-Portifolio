export function iniciarTheme() {
  const btn = document.querySelector('.theme-toggle');
  const iconSun = btn.querySelector('.icon-sun');
  const iconMoon = btn.querySelector('.icon-moon');
  const temaSalvo = localStorage.getItem('tema') || 'light';

  if (temaSalvo === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    btn.classList.add('dark');
    iconSun.style.display = 'none';
    iconMoon.style.display = 'inline';
  }

  btn.addEventListener('click', () => {
    const isDark = btn.classList.toggle('dark');
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      iconSun.style.display = 'none';
      iconMoon.style.display = 'inline';
      iconMoon.src = 'img/icon-lua-branca.svg';
      localStorage.setItem('tema', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      iconSun.style.display = 'inline';
      iconMoon.style.display = 'none';
      iconSun.src = 'img/icon-sol-preto.svg';
      localStorage.setItem('tema', 'light');
    }
  });
}