export function iniciarCertificados() {
  const items = [
    { bg: '../img/certificados-react-com-javascript.png'},
    { bg: '../img/certificados-react-com-javascript.png' },
    { bg: '../img/certificados-react-com-javascript.png' },
    { bg: '../img/certificados-react-com-javascript.png' },
    { bg: '../img/certificados-react-com-javascript.png' },
  ];

  const container = document.getElementById('options');

  items.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'option' + (i === 0 ? ' active' : '');
    el.style.backgroundImage = `url('${item.bg}')`;
    el.addEventListener('click', () => {
      document.querySelectorAll('.option').forEach(o => o.classList.remove('active'));
      el.classList.add('active');
    });
    container.appendChild(el);
  });
}