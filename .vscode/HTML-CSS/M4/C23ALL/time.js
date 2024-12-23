function atualizarHora() {
    const time = document.getElementById('time');
    const agora = new Date();

    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    time.textContent = `${horas}:${minutos}`;
}


setInterval(atualizarHora, 1000);
window.onload = atualizarHora;
