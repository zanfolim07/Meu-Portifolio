export function iniciarApresentacao() {
  const nome = document.getElementById('nome');
  const cargo = document.getElementById('cargo');

  const rotacao = [
    { antes: 'Desenvolvedor ', destaque: 'Full-Stack' },
    { antes: 'Estudante de ', destaque: 'ADS' },
  ];

  let letraIndex = 0;
  let rotacaoIndex = 0;
  let apagando = false;
  const nomeTexto = 'Guilherme Zanfolim';
  let nomeIndex = 0;

  function digitarNome() {
    if (nomeIndex < nomeTexto.length) {
      nome.innerHTML = nomeTexto.substring(0, nomeIndex + 1) + '<span class="cursor">|</span>';
      nomeIndex++;
      setTimeout(digitarNome, 80);
    } else {
      
      nome.textContent = nomeTexto;
      cargo.innerHTML = '<span class="cursor">|</span>';
      setTimeout(rodar, 500);
    }
  }

  function rodar() {
    const item = rotacao[rotacaoIndex];
    const textoCompleto = item.antes + item.destaque;

    if (!apagando) {
      if (letraIndex < textoCompleto.length) {
        if (letraIndex < item.antes.length) {
          cargo.innerHTML = textoCompleto.substring(0, letraIndex + 1) + '<span class="cursor">|</span>';
        } else {
          cargo.innerHTML = item.antes + '<span>' + item.destaque.substring(0, letraIndex - item.antes.length + 1) + '</span><span class="cursor">|</span>';
        }
        letraIndex++;
        setTimeout(rodar, 80);
      } else {
        setTimeout(() => {
          apagando = true;
          setTimeout(rodar, 100);
        }, 1500);
      }
    } else {
      if (letraIndex > 0) {
        letraIndex--;
        if (letraIndex <= item.antes.length) {
          cargo.innerHTML = textoCompleto.substring(0, letraIndex) + '<span class="cursor">|</span>';
        } else {
          cargo.innerHTML = item.antes + '<span>' + item.destaque.substring(0, letraIndex - item.antes.length) + '</span><span class="cursor">|</span>';
        }
        setTimeout(rodar, 50);
      } else {
        apagando = false;
        rotacaoIndex = (rotacaoIndex + 1) % rotacao.length;
        setTimeout(rodar, 300);
      }
    }
  }

  digitarNome();
}

export function atualizarTextoApresentacao(lang) {
  // Reservado para futura integração com idioma
}