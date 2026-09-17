const resultado = document.getElementById("resultado");
const botaoBuscar = document.getElementById("botaoBuscar");
const idUsuario = document.getElementById("idUsuario");

// botaoBuscar.addEventListener("click", function() {

//     resultado.textContent = "Buscando dados...";

//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then(resposta => resposta.json())
//         .then(dados => {
//             //console.log(dados);
//             resultado.innerHTML = "";
//             dados.forEach(usuario => {
//                 resultado.innerHTML += `
//                 <p>
//                 <strong>${usuario.name}</strong><br>
//                 ${usuario.email}<br>
//                 </p>
//                 `;
//             });
//         })
//         .catch(erro => {
//             resultado.innerHTML = "Erro ao buscar os dados.";
//             console.log("Erro:", erro);
//         });

// });

// botaoBuscar.addEventListener("click", async function() {
//     try {

//         const resposta = await fetch(
//             "https://jsonplaceholder.typicode.com/users"
//         );

//         const dados = await resposta.json();

//         resultado.innerHTML = "";

//         dados.forEach(usuario => {
//             resultado.innerHTML += `
//             <p>
//             <strong>${usuario.name}</strong><br>
//             ${usuario.email}<br>
//             </p>
//             <hr>
//             `;
//         });

//     } catch (erro) {
//         resultado.innerHTML = "Erro ao buscar os dados.";
//         console.log("Erro:", erro);
//     }   

// });

botao.addEventListener("click", async function() {

    const id = idUsuario.value;

    if (id === "") {
        resultado.textContent = "Insira um ID de usuário.";
        return;
    }

    try {

        const resposta = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        const dados = await resposta.json();

        resultado.innerHTML += `
            <p>
            <strong>${dados.name}</strong><br>
            Email: ${dados.email}<br>
            Cidade: ${dados.address.city}<br>
            Telefone: ${dados.phone}<br>
            </p>
            <hr>
        `;

    } catch (erro) {
        resultado.textContent = "Erro ao buscar os dados.";
        console.log("Erro:", erro);
    }

});