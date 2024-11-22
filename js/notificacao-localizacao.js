document.addEventListener("DOMContentLoaded", function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                console.log(
                    `Permissão concedida. Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`
                );
            },
            function (error) {
                if (error.code === error.PERMISSION_DENIED) {
                    console.log("Permissão para acessar localização foi negada.");
                } else if (error.code === error.POSITION_UNAVAILABLE) {
                    console.log("Informações de localização indisponíveis.");
                } else if (error.code === error.TIMEOUT) {
                    console.log("Tempo para obter a localização esgotado.");
                } else {
                    console.log("Erro desconhecido ao acessar localização.");
                }
            }
        );
    } else {
        console.log("Geolocalização não é suportada pelo navegador.");
    }
});
