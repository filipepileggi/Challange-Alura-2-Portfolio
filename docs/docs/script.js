// Validação do formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obter os valores dos campos
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var assunto = document.getElementById('assunto').value;
    var mensagem = document.getElementById('mensagem').value;

    // Validar nome (não pode estar vazio e deve ter no máximo 50 caracteres)
    if (nome.trim() === '' || nome.length > 50) {
        alert('Por favor, insira um nome válido (até 50 caracteres).');
        return;
    }

    // Validar e-mail (deve ser um formato válido)
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    // Validar assunto (não pode estar vazio e deve ter no máximo 50 caracteres)
    if (assunto.trim() === '' || assunto.length > 50) {
        alert('Por favor, insira um assunto válido (até 50 caracteres).');
        return;
    }

    // Validar mensagem (não pode estar vazia e deve ter no máximo 300 caracteres)
    if (mensagem.trim() === '' || mensagem.length > 500) {
        alert('Por favor, insira uma mensagem válida (até 500 caracteres).');
        return;
    }

    // Se todos os campos são válidos, enviar o formulário
    alert('Formulário enviado com sucesso!');
    document.getElementById('contact-form').reset(); // Limpar os campos do formulário
});
