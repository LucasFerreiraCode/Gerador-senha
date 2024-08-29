// Componentes
let campoSenha = document.getElementById('campo-senha');
let botaoGerar = document.getElementById('botao-gerar');
let botaoCopiar = document.getElementById('botao-copiar');
let slider = document.getElementById('slider');
let sliderValue = document.getElementById('slider-value');
let regSenha = '!@#$%&*0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?@#$%&*+-=^'

// Função para atualizar o valor exibido do slider
function updateSliderValue(value) {
    sliderValue.textContent = value;
}

// Evento de clique para gerar senha
botaoGerar.addEventListener('click', () => {
    let senhaAtual = '';
    let senhaLength = parseInt(slider.value);
    for (let i = 0; i < senhaLength; i++) {
        senhaAtual += regSenha[Math.floor(Math.random() * regSenha.length)];
    }
    campoSenha.value = senhaAtual;
});

// Evento de clique para copiar senha
botaoCopiar.addEventListener('click', () => {
    campoSenha.select(); // Seleciona o texto do campo
    navigator.clipboard.writeText(campoSenha.value).then(() => {
        alert('Senha copiada para a área de transferência');
    }).catch(err => {
        console.error('Erro ao copiar para a área de transferência: ', err);
    });
});

document.getElementById('botao-gerar').addEventListener('click', function() {
    let senha = gerarSenhaAleatoria(); // Função que você deve ter para gerar a senha
    const usarMaiusculas = document.getElementById('checkbox-maiusculas').checked;
    
    if (usarMaiusculas) {
        senha = converterParaMaiusculas(senha);
    }

    document.getElementById('campo-senha').value = senha;
});

function gerarSenhaAleatoria() {
    const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let senha = '';
    const comprimento = document.getElementById('slider').value;

    for (let i = 0; i < comprimento; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    return senha;
}

function converterParaMaiusculas(texto) {
    return texto.toUpperCase();
}

document.getElementById('slider').addEventListener('input', function() {
    document.getElementById('slider-value').textContent = this.value;
});

document.getElementById('botao-gerar').addEventListener('click', function() {
    let usarApenasNumeros = document.getElementById('checkbox-numeros').checked;
    let senha = usarApenasNumeros ? gerarSenhaNumerica() : gerarSenhaAleatoria(); // Função que você deve ter para gerar a senha

    const usarMaiusculas = document.getElementById('checkbox-maiusculas').checked;
    
    if (usarMaiusculas && !usarApenasNumeros) {
        senha = converterParaMaiusculas(senha);
    }

    document.getElementById('campo-senha').value = senha;
});

function gerarSenhaNumerica() {
    const caracteres = '0123456789'; // Apenas números
    let senha = '';
    const comprimento = document.getElementById('slider').value;

    for (let i = 0; i < comprimento; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    return senha;
}

document.getElementById('botao-gerar').addEventListener('click', function() {
    let usarApenasMinusculas = document.getElementById('checkbox-minusculas').checked;
    let senha = usarApenasMinusculas ? gerarSenhaApenasMinusculas() : gerarSenhaAleatoria();

    document.getElementById('campo-senha').value = senha;
});

function gerarSenhaApenasMinusculas() {
    const caracteres = 'abcdefghijklmnopqrstuvwxyz'; // Apenas letras minúsculas
    let senha = '';
    const comprimento = document.getElementById('slider').value;

    for (let i = 0; i < comprimento; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    return senha;
}

