const btnLocalizacao = document.querySelector("#btnLocalizacao");

btnLocalizacao.addEventListener("click", function() {

    navigator.geolocation.getCurrentPosition(

        function(posicao) {

            console.log("Latitude: " + posicao.coords.latitude);
            console.log("Longitude: " + posicao.coords.longitude);
            console.log("Precisão: " + posicao.coords.accuracy);

            document.querySelector("#latitude").textContent =
                posicao.coords.latitude;

            document.querySelector("#longitude").textContent =
                posicao.coords.longitude;

            document.querySelector("#precisao").textContent =
                posicao.coords.accuracy + " metros";

            document.querySelector("#mensagemLocalizacao").textContent =
                "Localização registrada com sucesso!";

        },

        function(erro) {

            console.log("Não foi possível obter a localização.");

            document.querySelector("#mensagemLocalizacao").textContent =
                "Não foi possível obter a localização.";

        }

    );

});



const btnCamera = document.querySelector("#btnCamera");

btnCamera.addEventListener("click", function() {

    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
    })

    .then(function(stream) {

        const video = document.querySelector("#camera");

        video.srcObject = stream;

        document.querySelector("#mensagemCamera").style.display = "none";

        document.querySelector("#btnFoto").disabled = false;

    })

    .catch(function(erro) {

        console.log(
            "Não foi possível acessar a câmera: " + erro
        );

        document.querySelector("#mensagemCamera").textContent =
            "Não foi possível acessar a câmera.";

    });

});



const btnFoto = document.querySelector("#btnFoto");

btnFoto.addEventListener("click", function() {

    const video = document.querySelector("#camera");
    const canvas = document.querySelector("#foto");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const contexto = canvas.getContext("2d");

    contexto.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
    );

    alert("Foto registrada com sucesso!");

});
