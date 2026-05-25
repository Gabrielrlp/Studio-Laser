function agendar(){

    let nome = document.getElementById("nome").value;
    let data = document.getElementById("data").value;
    let hora = document.getElementById("hora").value;

    let mensagemErro =
    document.getElementById("mensagem");

    if(nome == "" || data == "" || hora == ""){

        mensagemErro.innerText =
        "Preencha todos os campos!";

        return;
    }

    mensagemErro.innerText = "";

    let mensagem =
`Olá! 😊

Meu nome é ${nome} e gostaria de agendar uma avaliação.

Data: ${data}
Horário: ${hora}`;

    let numero = "553497205393";

    let url =
`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");

    document.getElementById("nome").value = "";
    document.getElementById("data").value = "";
    document.getElementById("hora").value = "";
}

ScrollReveal().reveal('.card', {
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    duration: 1000
});

ScrollReveal().reveal('.hero-text', {
    delay: 300,
    distance: '60px',
    origin: 'top',
    duration: 1200
});

ScrollReveal().reveal('.local-card', {
    delay: 200,
    distance: '40px',
    origin: 'bottom',
    duration: 1000
});

ScrollReveal().reveal('.diferencial', {
    delay: 200,
    distance: '40px',
    origin: 'bottom',
    duration: 1000
});