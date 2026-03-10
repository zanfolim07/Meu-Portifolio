export function iniciarCertificados() {
  const items = [
    { bg: '../img/REACT-JAVASCRIPT.png' },
    { bg: '../img/HTML-E-CSS-AMBIENTE,ESTRUTURA-E-ESTILO.png'},
    { bg: '../img/HTML-E-CSS-RESPONSIVIDADE.png' },
    { bg: '../img/HTML-E-CSS-FORMULARIOS.png' },
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