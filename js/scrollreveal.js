export function iniciarScrollReveal() {
  const esquerda = document.querySelectorAll(
    '.section-title, .img-projetos, .text-sobre, .contato-desc, .footer-logo'
  );
  const direita = document.querySelectorAll(
    '.inf-projetos, .img-sobre, .contato-form, .footer-nav'
  );
  const baixo = document.querySelectorAll(
    '.options, .projeto-rodape, .footer-bottom'
  );

  const observar = (els, classe) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('reveal-visible');
          }, i * 100);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3, rootMargin: '0px 0px -80px 0px' });

    els.forEach(el => {
      el.classList.add('reveal', classe);
      observer.observe(el);
    });
  };

  observar(esquerda, 'reveal-esquerda');
  observar(direita, 'reveal-direita');
  observar(baixo, 'reveal-baixo');
}