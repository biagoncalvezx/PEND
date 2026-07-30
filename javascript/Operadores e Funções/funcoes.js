function saudacao() {
    console.log("Olá, JavaScript!");
}

saudacao();

function nomeDaFuncao(parametros){
    return resultado;
} // estrutura

function somar(a, b) {
    return a + b;
}

console.log(somar(5,3)); // função com retorno

function cumprimento(nome) {
    console.log("Olá, " + nome);
}

cumprimento("Bia"); // função sem retorno 

function imc(peso, altura){
    return peso / (altura*altura)
}

function imparOupar (x){
    if (x % 2 == 0){
        console.log("Par");
    }
    else {
        console.log ("Impar")
    }
}

imparOupar(5);
console.log (imc (55, 1.60));

