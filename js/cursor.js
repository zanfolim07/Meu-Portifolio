export function iniciarCursor() {
  const glow = document.createElement('div');
  glow.classList.add('cursor-glow');
  document.body.appendChild(glow);

  const apresentacao = document.querySelector('.apresentacao');
  const header = document.querySelector('.header');

  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';

    const dentroDeArea = [apresentacao, header].some(el => {
      const rect = el.getBoundingClientRect();
      return (
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right
      );
    });

    glow.style.opacity = dentroDeArea ? '1' : '0';
  });
}