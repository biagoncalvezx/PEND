console.log("Olá, JavaScript!");

let a = 10;
let b = 8;
let c = 5;

console.log("adição: +", a + b);
console.log("subtração: -", oa - b);
console.log("multiplicação: *", a * b);
console.log("divisão: /", a / b);
console.log("resto: %", a % b);
console.log("exponenciação: **", a ** b);

let contador = 5;
contador++;
console.log(contador);

const media = console.log((a + b + c) / 3);
const resto = console.log(a % c);

let x = 10;
let y = "10";

console.log("igual (valor): ==", x == y);
console.log("igual (valor e tipo): ===" , x === y);
console.log("diferente (valor): !=", x != y);
console.log("diferente (valor e tipo): !==", x !== y);

let idade = 30;
if (idade >= 18){
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.")
}

let numero1= 10;
let numero2= 27;

if (numero1 > numero2) {
    console.log("O número 1 é maior");
} else if (numero1 < numero2) {
    console.log("O número 2 é maior");
}
else{
    console.log("Os dois números são iguais.")
}

console.log("Operadores Lógicos")

let idade2 = 20;
let temCarteira = true;

console.log(idade2 >= 18 && temCarteira);

let chovendo = false;
let guardaChuva = true;

console.log(chovendo || guardaChuva);

let ligado = false;
console.log(!ligado); // true

let nota = 8;
let frequencia = 90;

if (nota >= 7 && frequencia >= 75){
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}

let temLogin = true;
let temToken = false;

if (temToken == true || temLogin == true){
    console.log("Bem vindo ao sistema!")
} else {
    console.log("Acesso negado, conta não encontrada.")
}
