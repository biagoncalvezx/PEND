const produto = document.querySelector('#produto');
const carrinho = document.querySelector('#carrinho');

//event - objeto fornecido pelo navegador que contém informações sobre o evento que ocorreu
//dataTransfer - objeto que permite transferir dados entre o elemento arrastado e o elemento de destino
produto.addEventListener('dragstart', function (event) {
    event.dataTransfer.setData('text/plain', event.target.id);
});

//mudar o padrâo
carrinho.addEventListener('dragover', function (event) {
    event.preventDefault();
    console.log('Pode soltar aqui no carrinho...');
});

//soltar
carrinho.addEventListener('drop', function (event) {
    event.preventDefault();

    const id = event.dataTransfer.getData('text');
    const elemento = document.querySelector("#" + id);

    //a div do produto que passa a ser filho da div do carrinho
    carrinho.appendChild(elemento);
});

