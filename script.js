// Aguarda o documento inteiro carregar antes de rodar os scripts
document.addEventListener("DOMContentLoaded", function() {

    // --- 1. Lógica do Formulário de Contato ---
    const formContato = document.getElementById('form-contato');

    formContato.addEventListener('submit', function(event) {
        // Impede o envio real do formulário (recarregamento da página)
        event.preventDefault();

        // Coleta os valores digitados e remove espaços em branco das pontas
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // Validação 1: Verifica se há campos vazios
        if (nome === '' || email === '' || mensagem === '') {
            alert('Atenção: Todos os campos (nome, e-mail e mensagem) são obrigatórios!');
            return; // Interrompe a execução aqui
        }

        // Validação 2: Verifica o formato do e-mail usando Expressão Regular (Regex)
        const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!padraoEmail.test(email)) {
            alert('Atenção: Por favor, insira um endereço de e-mail válido (ex: usuario@dominio.com).');
            return; // Interrompe a execução aqui
        }

        // Simulação de envio com sucesso (se passou pelas validações acima)
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
        
        // Limpa os campos do formulário
        formContato.reset();
    });


    // --- 2. Lógica para Alternar Tema (Claro/Escuro) ---
    const btnTema = document.getElementById('btn-tema');
    const corpoPagina = document.body;

    btnTema.addEventListener('click', function() {
        // Adiciona ou remove a classe 'tema-escuro' no <body>
        corpoPagina.classList.toggle('tema-escuro');
    });

});