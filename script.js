// Componentes
let campoSenha = document.getElementById('campo-senha');
let botao = document.getElementById('botao-gerar');
let botaoCopiar = document.getElementById('botao-copiar');
let slider = document.getElementById('slider');
let sliderValue = document.getElementById('slider-value');
let regSenha =  '!@#$%&*0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?@#$%&*^'

      // Função para atualizar o valor exibido do slider
      function updateSliderValue(value) {
        sliderValue.textContent = value;
      }

botao.addEventListener('click', ()=>{

  let senhaAtual = ''
  for (let i = 0; i <10; i++){
      senhaAtual +=regSenha [Math.floor(Math.random() *regSenha.length)]
  }

  campoSenha.value = senhaAtual

});

botaoCopiar.addEventListener('click', () => {
    campoSenha.select(); // Seleciona o texto do campo
    navigator.clipboard.writeText(campoSenha.value).then(() => {
        alert('Senha copiada para a área de transferência');
    }).catch(err => {
        console.error('Erro ao copiar para a área de transferência: ', err);
    });
  });