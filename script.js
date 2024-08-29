// Substitua este bloco:
document.getElementById('botao-gerar').addEventListener('click', function() {
    let senha = gerarSenhaAleatoria(); // Função que você deve ter para gerar a senha
    const usarMaiusculas = document.getElementById('checkbox-maiusculas').checked;
    
    if (usarMaiusculas) {
        senha = converterParaMaiusculas(senha);
    }

    document.getElementById('campo-senha').value = senha;
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

document.getElementById('botao-gerar').addEventListener('click', function() {
    let usarApenasMinusculas = document.getElementById('checkbox-minusculas').checked;
    let senha = usarApenasMinusculas ? gerarSenhaApenasMinusculas() : gerarSenhaAleatoria();

    document.getElementById('campo-senha').value = senha;
});

// Por este bloco simplificado:
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

    // Se nenhum checkbox estiver marcado, usar todos os caracteres
    if (caracteres === '') {
        caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    }

    let senha = '';
    let comprimento = document.getElementById('slider').value;

    for (let i = 0; i < comprimento; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    document.getElementById('campo-senha').value = senha;
});
