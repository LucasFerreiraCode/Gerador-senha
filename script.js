// Função para atualizar o valor mostrado ao lado do slider
function updateSliderValue(value) {
    document.getElementById('slider-value').textContent = value;
}

// Define o evento de entrada para o slider
document.getElementById('slider').addEventListener('input', function() {
    updateSliderValue(this.value);
});

// Função para gerar a senha com base nas opções selecionadas
document.getElementById('botao-gerar').addEventListener('click', function() {
    let usarMaiusculas = document.getElementById('checkbox-maiusculas').checked;
    let usarMinusculas = document.getElementById('checkbox-minusculas').checked;
    let usarNumeros = document.getElementById('checkbox-numeros').checked;

    let caracteres = '';

    if (usarMaiusculas) {
        caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (usarMinusculas) {
        caracteres += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (usarNumeros) {
        caracteres += '0123456789';
    }

    if (caracteres === '') {
        caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    }

    let comprimento = document.getElementById('slider').value;
    let senha = '';
    for (let i = 0; i < comprimento; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    document.getElementById('campo-senha').value = senha;
});

// Função para copiar a senha para a área de transferência
document.getElementById('botao-copiar').addEventListener('click', function() {
    let campoSenha = document.getElementById('campo-senha');

    if (campoSenha.value !== "") {
        campoSenha.select();
        campoSenha.setSelectionRange(0, 99999); // Para dispositivos móveis
        document.execCommand('copy');

        alert("Senha copiada com sucesso!");
    } else {
        alert("Por favor, gere uma senha antes de copiá-la.");
    }
});
