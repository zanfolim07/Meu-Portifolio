export function iniciarContato() {
  emailjs.init("13ZU0JJ9z_h5gnSKd");

  document.querySelector('.contato-btn').addEventListener('click', function() {
    const nome = document.querySelector('.contato-nome').value.trim();
    const email = document.querySelector('.contato-email').value.trim();
    const mensagem = document.querySelector('.contato-mensagem').value.trim();

    if (!nome || !email || !mensagem) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const btn = document.querySelector('.contato-btn');
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    emailjs.send("service_17rq9k1", "template_hiakuct", {
      from_name: nome,
      from_email: email,
      message: mensagem
    })
    .then(() => {
      alert('Mensagem enviada com sucesso!');
      document.querySelector('.contato-nome').value = '';
      document.querySelector('.contato-email').value = '';
      document.querySelector('.contato-mensagem').value = '';
      btn.textContent = 'ENVIAR';
      btn.disabled = false;
    })
    .catch((error) => {
  console.error('Erro detalhado:', JSON.stringify(error));
  alert('Erro: ' + JSON.stringify(error));
  btn.textContent = 'ENVIAR';
  btn.disabled = false;
});
  });
}