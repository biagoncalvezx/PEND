// classe
class Carro {

    // método construtor
    constructor(marca, modelo, ano, cor) {

    // atributos
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;

}
// 
    ligar() {
        console.log("O carro está ligado!");
    }

    acelerar() {
        console.log("O carro está acelerando!");
    }

    frear() {
        console.log(`${this.modelo} está freando!`);
    }

}

// objetos
const carro1 = new Carro("Volkswagem", "Gol", 2022, "Branco");
console.log("Carro 1: ", carro1);

const carro2 = new Carro("Toyota", "Corolla", 2025, "Preto");
console.log("Carro 2: ", carro2);

const carro3 = new Carro("Honda", "Civic", 2023, "Cinza");
console.log("Carro 3: ", carro3);

// metodos
carro1.ligar();

carro2.acelerar();

carro3.frear();

//
console.log("---------------------------------");
console.log("Atributos do Carro 1: ");
console.log("- ", carro1.marca);
console.log("- ", carro1.modelo);
console.log("- ", carro1.ano);
console.log("- ", carro1.cor);
console.log("---------------------------------");

console.log("Atributos do Carro 2: ");
console.log("- ", carro2.marca);
console.log("- ", carro2.modelo);
console.log("- ", carro2.ano);
console.log("- ", carro2.cor);
console.log("---------------------------------");

console.log("Atributos do Carro 3: ");
console.log("- ", carro3.marca);
console.log("- ", carro3.modelo);
console.log("- ", carro3.ano);
console.log("- ", carro3.cor);
console.log("---------------------------------");
