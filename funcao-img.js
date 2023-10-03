// Função para substituir a imagem
function substituirImagem(event) {
    const imagemClicada = event.target; // Obtém a imagem clicada
    const imagemDeFundo = document.getElementById('tela-home-iphone'); // Obtém a imagem de fundo
    const enderecoImagem =  imagemClicada.getAttribute('endereco');
    

// Substitui a imagem de fundo pela nova imagem
    imagemDeFundo.src = enderecoImagem;

}

// Adiciona um evento de clique a todas as imagens com a classe 'logo'
    const imagensLogo = document.querySelectorAll('.logo');
    imagensLogo.forEach(function(imagem) {
    imagem.addEventListener('click', substituirImagem);
        });
