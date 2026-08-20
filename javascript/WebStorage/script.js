const nome = document.querySelector('#nome');
const salvar = document.querySelector('#salvar');
const recuperar = document.querySelector('#recuperar');
const excluir = document.querySelector('#excluir');
const resultado = document.querySelector('#resultado');

// salvar

salvar.addEventListener('click', function () {

    localStorage.setItem('nome', nome.value);

    resultado.textContent = "Nome salvo!";

});

// recuperar
recuperar.addEventListener('click', function () {

    const nomeRecuperado = localStorage.getItem('nome');

    resultado.textContent = `Nome recuperado: ${nomeRecuperado}`;

});

// excluir
excluir.addEventListener('click', function () {
    localStorage.removeItem('nome');
    resultado.textContent = "Nome excluído!";
}); 