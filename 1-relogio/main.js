function atualizarHora(){

    let data = new Date();

    let hora = String(data.getHours()).padStart(2, '0');
    let min = String(data.getMinutes()).padStart(2, '0');
    let seg = String(data.getSeconds()).padStart(2, '0');

    let horario = `${hora} : ${min} : ${seg}`;

    document.querySelector("#hora").innerText = horario;
}

atualizarHora();

setInterval(atualizarHora, 1000);