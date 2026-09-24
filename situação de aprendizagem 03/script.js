const resultado = document.getElementById("resultado");
const botaoBuscar = document.getElementById("botaoBuscar");
const campoPesquisa = document.getElementById("campoPesquisa");

const botaoLocalizacao = document.getElementById("botaoLocalizacao");
const botaoFavoritos = document.getElementById("botaoFavoritos");

const localizacao = document.getElementById("localizacao");

const inicio = document.getElementById("inicio");
const tecnologia = document.getElementById("tecnologia");
const esportes = document.getElementById("esportes");
const economia = document.getElementById("economia");
const moda = document.getElementById("moda");


// buscar noticias
async function buscarNoticias(pesquisa) {

    resultado.innerHTML = "<p>Buscando notícias...</p>";

    try {

        const resposta = await fetch(
            `https://newsapi.org/v2/everything?q=${pesquisa}&language=pt&sortBy=publishedAt&apiKey=573391d82e9c44258b356fa5de55d1d6`
        );

        if (!resposta.ok) {
            throw new Error("Erro ao buscar notícias.");
        }

        const dados = await resposta.json();

        if (dados.articles.length == 0) {

            resultado.innerHTML =
                "<p>Nenhuma notícia encontrada.</p>";

            return;
        }


        const noticia1 = dados.articles[0];
        const noticia2 = dados.articles[1];
        const noticia3 = dados.articles[2];


        let noticias = "";


        if (noticia1) {

            noticias += `

                <article class="noticia">

                    <img src="${noticia1.urlToImage}"
                         alt="${noticia1.title}">

                    <h2>${noticia1.title}</h2>

                    <p>${noticia1.description}</p>

                    <a href="${noticia1.url}" target="_blank">
                        Ler notícia completa
                    </a>

                    <br>

                    <button class="favorito" id="favorito1">
                        ⭐ Favoritar
                    </button>

                </article>

            `;
        }


        if (noticia2) {

            noticias += `

                <article class="noticia">

                    <img src="${noticia2.urlToImage}"
                         alt="${noticia2.title}">

                    <h2>${noticia2.title}</h2>

                    <p>${noticia2.description}</p>

                    <a href="${noticia2.url}" target="_blank">
                        Ler notícia completa
                    </a>

                    <br>

                    <button class="favorito" id="favorito2">
                        ⭐ Favoritar
                    </button>

                </article>

            `;
        }


        if (noticia3) {

            noticias += `

                <article class="noticia">

                    <img src="${noticia3.urlToImage}"
                         alt="${noticia3.title}">

                    <h2>${noticia3.title}</h2>

                    <p>${noticia3.description}</p>

                    <a href="${noticia3.url}" target="_blank">
                        Ler notícia completa
                    </a>

                    <br>

                    <button class="favorito" id="favorito3">
                        ⭐ Favoritar
                    </button>

                </article>

            `;
        }


        resultado.innerHTML = noticias;


        const favorito1 = document.getElementById("favorito1");
        const favorito2 = document.getElementById("favorito2");
        const favorito3 = document.getElementById("favorito3");


        if (favorito1) {

            favorito1.addEventListener("click", function() {

                localStorage.setItem(
                    "favorito",
                    noticia1.title
                );

                alert("Notícia salva nos favoritos!");

            });

        }


        if (favorito2) {

            favorito2.addEventListener("click", function() {

                localStorage.setItem(
                    "favorito",
                    noticia2.title
                );

                alert("Notícia salva nos favoritos!");

            });

        }


        if (favorito3) {

            favorito3.addEventListener("click", function() {

                localStorage.setItem(
                    "favorito",
                    noticia3.title
                );

                alert("Notícia salva nos favoritos!");

            });

        }


    } catch (erro) {

        resultado.innerHTML =
            "<p>Não foi possível buscar as notícias.</p>";

        console.log("Erro:", erro);

    }

}


// botão de pesquisa
botaoBuscar.addEventListener("click", function() {

    const pesquisa = campoPesquisa.value;

    if (pesquisa == "") {

        resultado.innerHTML =
            "<p>Digite algo para pesquisar.</p>";

        return;
    }

    buscarNoticias(pesquisa);

});


// Início
inicio.addEventListener("click", function(evento) {

    evento.preventDefault();

    buscarNoticias("Brasil");

});


// Tecnologia
tecnologia.addEventListener("click", function(evento) {

    evento.preventDefault();

    buscarNoticias("tecnologia");

});


// Esportes
esportes.addEventListener("click", function(evento) {

    evento.preventDefault();

    buscarNoticias("esportes");

});


// Economia
economia.addEventListener("click", function(evento) {

    evento.preventDefault();

    buscarNoticias("economia");

});


// Moda
moda.addEventListener("click", function(evento) {

    evento.preventDefault();

    buscarNoticias("moda");

});


// localização
botaoLocalizacao.addEventListener("click", function() {

    if (navigator.geolocation) {

        localizacao.textContent =
            "Buscando localização...";


        navigator.geolocation.getCurrentPosition(

            function(posicao) {

                const latitude =
                    posicao.coords.latitude;

                const longitude =
                    posicao.coords.longitude;


                localizacao.textContent =
                    "Latitude: " + latitude +
                    " | Longitude: " + longitude;

            }

        );

    }

});


// favoritos
botaoFavoritos.addEventListener("click", function() {

    const favorito =
        localStorage.getItem("favorito");


    if (favorito == null) {

        resultado.innerHTML =
            "<p>Nenhuma notícia foi salva.</p>";

    } else {

        resultado.innerHTML = `

            <article class="noticia">

                <h2>Notícia favorita</h2>

                <p>${favorito}</p>

            </article>

        `;

    }

});


// notícias iniciais
buscarNoticias("Brasil");