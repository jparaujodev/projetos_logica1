let totalValor = 0; // Inicializa a variável totalValor com zero. Esta variável manterá o valor total dos produtos adicionados.
limpar(); // Chama a função limpar para inicializar o estado da página (limpar o carrinho e resetar o valor total).

// Define a função adicionar, que será chamada quando um produto for adicionado ao carrinho.
function adicionar(){
    // Obtém o valor do elemento com o id 'produto' (que é um input) e armazena na variável produto.
    let produto = document.getElementById('produto').value;

    // Divide a string produto no caractere '-' e pega a primeira parte (o nome do produto) e armazena em nomeProduto.
    let nomeProduto = produto.split('-')[0];

    // Divide a string produto no caractere 'R$' e pega a segunda parte (o valor unitário do produto) e armazena em valorUnit.
    let valorUnit = produto.split('R$')[1];

    // Obtém o valor do elemento com o id 'quantidade' (que é um input) e armazena na variável quantidade.
    let quantidade = document.getElementById('quantidade').value;

    // Calcula o preço total multiplicando a quantidade pelo valor unitário e armazena em preco.
    let preco = quantidade * valorUnit;

    // Obtém o elemento com o id 'lista-produtos' e armazena em carrinho.
    let carrinho = document.getElementById('lista-produtos');

    // Adiciona uma nova linha ao carrinho, contendo a quantidade, o nome do produto e o preço, formatados como HTML.
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
<span class="texto-azul"> ${quantidade}x </span> ${nomeProduto} <span class="texto-azul"> ${preco} </span>
</section>`;

    // Atualiza o valor total, somando o preço do produto atual ao totalValor.
    totalValor = totalValor + preco;

    // Obtém o elemento com o id 'valor-total' e armazena em campoValorTotal.
    let campoValorTotal = document.getElementById('valor-total');

    // Atualiza o texto do elemento campoValorTotal para mostrar o valor total atual.
    campoValorTotal.textContent = `R$ ${totalValor}`;

    // Reseta o valor do input de quantidade para 0, preparando-o para a próxima adição.
    document.getElementById('quantidade').value = 0;
};

// Define a função limpar, que será chamada para resetar o estado do carrinho e o valor total.
function limpar(){
    // Reseta o totalValor para 0.
    totalValor = 0;

    // Limpa o conteúdo do elemento com o id 'lista-produtos'.
    document.getElementById('lista-produtos').innerHTML = '';

    // Reseta o texto do elemento com o id 'valor-total' para 'R$ 0'.
    document.getElementById('valor-total').textContent = 'R$ 0';
}