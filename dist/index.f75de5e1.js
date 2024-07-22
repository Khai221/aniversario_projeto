const dataDoEvento = new Date("Nov 11, 2024 00:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
const contaOTempo = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
    const diaEmMs = 86400000;
    const horaEmMs = 3600000;
    const minutoEmMs = 60000;
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor(distanciaAteOEvento % diaEmMs / horaEmMs);
    const minutosAteOEvento = Math.floor(distanciaAteOEvento % horaEmMs / minutoEmMs);
    const segundosAteOEvento = Math.floor(distanciaAteOEvento % minutoEmMs / 1000);
    document.getElementById("contador").innerHTML = `${diasAteOEvento} Dias ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
    if (distanciaAteOEvento < 0) {
        clearInterval(contaOTempo);
        document.getElementById("contador").innerHTML = "O Anivers\xe1rio j\xe1 passou";
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
