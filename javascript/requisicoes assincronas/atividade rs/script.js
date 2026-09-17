const resultado = document.getElementById("resultado");
const botaoBuscar = document.getElementById("botaoBuscar");

botaoBuscar.addEventListener("click", async function() {

resultado.textContent = "Buscando personagem...";

try {

    const id = Math.floor(Math.random() * 500) + 1;

    const resposta = await fetch(
        `https://api.disneyapi.dev/character/${id}`
    );

    if (!resposta.ok) {
        throw new Error("Personagem não encontrado.");
    }

    const dados = await resposta.json();

    const personagem = dados.data;

    let filmes = "Nenhum filme informado.";
    let series = "Nenhuma série informada.";
    let jogos = "Nenhum jogo informado.";

    if (personagem.films && personagem.films.length > 0) {
        filmes = personagem.films.join(", ");
    }

    if (personagem.tvShows && personagem.tvShows.length > 0) {
        series = personagem.tvShows.join(", ");
    }

    if (personagem.videoGames && personagem.videoGames.length > 0) {
        jogos = personagem.videoGames.join(", ");
    }

    resultado.innerHTML = `
        <div class="card">

            <img src="${personagem.imageUrl}"
                 alt="${personagem.name}">

            <div class="informacoes">

                <h2>${personagem.name}</h2>

                <p>
                    <strong>🎬 Filmes:</strong><br>
                    ${filmes}
                </p>

                <p>
                    <strong>📺 Séries:</strong><br>
                    ${series}
                </p>

                <p>
                    <strong>🎮 Jogos:</strong><br>
                    ${jogos}
                </p>

            </div>

        </div>
    `;

} catch (erro) {

    resultado.textContent = "Erro ao buscar os dados.";
    console.log("Erro:", erro);

}
});