const academia = document.querySelector('#academia');
const trabalho = document.querySelector('#trabalho');
const leitura = document.querySelector('#leitura');
const estudo = document.querySelector('#estudo');
const horario08 = document.querySelector('#horario08');
const horario10 = document.querySelector('#horario10');
const horario12 = document.querySelector('#horario12');
const horario14 = document.querySelector('#horario14');
const horario16 = document.querySelector('#horario16');
const horario18 = document.querySelector('#horario18');

const mensagem = document.querySelector('#mensagem');
academia.addEventListener('dragstart', function (event) {
    event.dataTransfer.setData('text/plain', event.target.id);
});

trabalho.addEventListener('dragstart', function (event) {
    event.dataTransfer.setData('text/plain', event.target.id);
});

leitura.addEventListener('dragstart', function (event) {
    event.dataTransfer.setData('text/plain', event.target.id);
});

estudo.addEventListener('dragstart', function (event) {
    event.dataTransfer.setData('text/plain', event.target.id);
});


horario08.addEventListener('dragover', function (event) {
    event.preventDefault();
});

horario10.addEventListener('dragover', function (event) {
    event.preventDefault();
});

horario12.addEventListener('dragover', function (event) {
    event.preventDefault();
});

horario14.addEventListener('dragover', function (event) {
    event.preventDefault();
});

horario16.addEventListener('dragover', function (event) {
    event.preventDefault();
});

horario18.addEventListener('dragover', function (event) {
    event.preventDefault();
});


function soltarAtividade(event, horario) {

    event.preventDefault();

    const id = event.dataTransfer.getData('text/plain');

    const elemento = document.querySelector('#' + id);

    horario.appendChild(elemento);

    horario.style.backgroundColor = '#ffd6e5';

    mensagem.style.display = 'block';

    mensagem.textContent =
        '🎀 ' + elemento.textContent.trim() +
        ' foi adicionada à sua rotina! ♡';
}


horario08.addEventListener('drop', function (event) {
    soltarAtividade(event, horario08);
});

horario10.addEventListener('drop', function (event) {
    soltarAtividade(event, horario10);
});

horario12.addEventListener('drop', function (event) {
    soltarAtividade(event, horario12);
});

horario14.addEventListener('drop', function (event) {
    soltarAtividade(event, horario14);
});

horario16.addEventListener('drop', function (event) {
    soltarAtividade(event, horario16);
});

horario18.addEventListener('drop', function (event) {
    soltarAtividade(event, horario18);
});