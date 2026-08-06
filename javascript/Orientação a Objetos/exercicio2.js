class Aluno {
    constructor(nome, idade, curso, matrícula) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matrícula = matrícula;
    }

    
    aprender() {
        console.log(`${this.nome} está aprendendo!`);
    }

    estudar() {
        console.log(`${this.nome} está estudando!`);
    }

    apresentar() {
        console.log(`${this.nome} está apresentando!`);
    }
}

const aluno1 = new Aluno("Carol", 18, "Desenvolvimento de Sistemas", "12345");

const aluno2 = new Aluno("Pedro", 17, "Qualidade", "67890");

const aluno3 = new Aluno("Lucas", 16, "Logistíca", "54321");

aluno1.aprender();
aluno2.estudar();
aluno3.apresentar();

console.log("---------------------------------");
console.log("Atributos do Aluno 1: ");
console.log("- ", aluno1.nome); 
console.log("- ", aluno1.idade);
console.log("- ", aluno1.curso);
console.log("- ", aluno1.matrícula);
console.log("---------------------------------");   

console.log("Atributos do Aluno 2: ");
console.log("- ", aluno2.nome);
console.log("- ", aluno2.idade);
console.log("- ", aluno2.curso);
console.log("- ", aluno2.matrícula);
console.log("---------------------------------");  

console.log("Atributos do Aluno 3: ");
console.log("- ", aluno3.nome);
console.log("- ", aluno3.idade);  
console.log("- ", aluno3.curso);
console.log("- ", aluno3.matrícula);
console.log("---------------------------------");

 
