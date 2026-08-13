class Produto {
    constructor(nome, preco, categoria, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;
    }

    aplicarDesconto() {
        const precoComDesconto = this.preco - (this.preco * (this.desconto / 100));
        return precoComDesconto;
    }

    exibir() {
        const resultado = document.querySelector('#resultado');
        
        resultado.innerHTML = `
        <div> 
            <p>Nome: ${this.nome}</p>   
            <p>Preço: R$ ${this.aplicarDesconto().toFixed(2)}</p>
            <p>Categoria: ${this.categoria}</p>
            <p>Desconto: ${this.desconto}%</p>
        </div>
        `;
    }   
}

class Produtos {
    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    exibirNaTela() {
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = "";

        this.produtos.forEach(produto => {
            resultado.innerHTML += `
            <div> 
                <p>Nome: ${produto.nome}</p>
                <p>Preço: R$ ${produto.aplicarDesconto().toFixed(2)}</p>
                <p>Categoria: ${produto.categoria}</p>
                <p>Desconto: ${produto.desconto}%</p>
            </div>
            `;
        });
    }
}


const nome = document.querySelector('#nome');
const preco = document.querySelector('#preco');
const categoria = document.querySelector('#categoria');
const desconto = document.querySelector('#desconto');
const botaoCadastrar = document.querySelector('#botaoCadastrar');

const produtos = new Produtos();

botaoCadastrar.addEventListener('click', function () {
    const produto = new Produto(
        nome.value, 
        Number(preco.value), 
        categoria.value, 
        Number(desconto.value)
    );

    produtos.adicionarProduto(produto);
    produtos.exibirNaTela();
});