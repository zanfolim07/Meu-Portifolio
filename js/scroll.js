export function iniciarScroll() {
  let velocidade = 0;
  let posicao = window.scrollY;
  let alvo = window.scrollY;
  let animando = false;

  window.addEventListener('wheel', (e) => {
    e.preventDefault();
    alvo += e.deltaY * 0.8;
    alvo = Math.max(0, Math.min(alvo, document.body.scrollHeight - window.innerHeight));
    if (!animando) animar();
  }, { passive: false });

  function animar() {
    animando = true;
    posicao += (alvo - posicao) * 0.08;

    if (Math.abs(alvo - posicao) < 0.5) {
      posicao = alvo;
      animando = false;
    }

    window.scrollTo(0, posicao);
    if (animando) requestAnimationFrame(animar);
  }
}