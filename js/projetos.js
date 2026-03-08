export function iniciarProjetos() {
  const slides = document.querySelectorAll('.projeto-slide');
  const dots = document.querySelectorAll('.dot');
  const total = slides.length;
  let atual = 0;
  let trocando = false;
  let autoplayTimer;

  function mostrarProjeto(index) {
    if (trocando || index === atual) return;
    trocando = true;

    const direcao = index > atual ? 1 : -1;
    slides[atual].style.transform = `translateX(${-120 * direcao}px)`;
    slides[atual].style.opacity = '0';
    slides[atual].classList.remove('active');
    dots[atual].classList.remove('active');

    slides[index].style.transform = `translateX(${120 * direcao}px)`;
    slides[index].classList.add('active');

    setTimeout(() => {
      slides[index].style.transform = 'translateX(0)';
      slides[index].style.opacity = '1';
      dots[index].classList.add('active');
      atual = index;
      setTimeout(() => {
        trocando = false;
      }, 800);
    }, 50);
  }

  function proximoProjeto() {
    const proximo = (atual + 1) % total;
    mostrarProjeto(proximo);
  }

  function iniciarAutoplay() {
    autoplayTimer = setInterval(proximoProjeto, 4000);
  }

  function pararAutoplay() {
    clearInterval(autoplayTimer);
  }

  // Dots
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      pararAutoplay();
      mostrarProjeto(i);
      iniciarAutoplay();
    });
  });

  // Setas do teclado
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' && atual < total - 1) {
      pararAutoplay();
      mostrarProjeto(atual + 1);
      iniciarAutoplay();
    }
    if (e.key === 'ArrowLeft' && atual > 0) {
      pararAutoplay();
      mostrarProjeto(atual - 1);
      iniciarAutoplay();
    }
  });

  // Pausar ao passar o mouse
  const secao = document.querySelector('.projetos');
  if (secao) {
    secao.addEventListener('mouseenter', pararAutoplay);
    secao.addEventListener('mouseleave', iniciarAutoplay);
  }

  iniciarAutoplay();
}