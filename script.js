function agendar(){

    let nome = document.getElementById("nome").value;
    let data = document.getElementById("data").value;
    let hora = document.getElementById("hora").value;

    if(nome == "" || data == "" || hora == ""){
        alert("Preencha todos os campos!");
        return;
    }

    let mensagem =
`Olá! Meu nome é ${nome}.

Gostaria de agendar um horário.

📅 Data: ${data}
⏰ Hora: ${hora}`;

    let numero = "5500000000000";

    let url =
`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");

}