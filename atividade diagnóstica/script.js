const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let textoMensagem = document.getElementById("mensagemInput").value.trim();

    let mensagem = document.getElementById("mensagem");

    if(nome === "" || email === "" || textoMensagem === ""){
        mensagem.innerHTML = "Preencha todos os campos!";
        return;
    }

    if(!email.includes("@") || !email.includes(".")){
        mensagem.innerHTML = "Digite um email válido.";
        return;
    }

    mensagem.innerHTML =
    "Obrigada pelo contato, " + nome +
    "! 💖 Recebi sua mensagem e em breve respondo pelo email " + email + ".";

    formulario.reset();

});