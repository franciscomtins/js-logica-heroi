
function calcularSaldoDasPartidas(numeroVitorias, numeroDerrotas) {
    if(numeroVitorias === undefined || numeroDerrotas === undefined ||
       isNaN(Number(numeroVitorias)) || isNaN(Number(numeroDerrotas))) {
          return "Erro: vitórias e derrotas devem ser números válidos"
    }

    return numeroVitorias - numeroDerrotas
}

function definirNivel(saldoPartidas) {
    if (saldoPartidas <= 10)  return "Ferro";
    if (saldoPartidas <= 20)  return "Bronze";
    if (saldoPartidas <= 50)  return "Prata";
    if (saldoPartidas <= 80)  return "Ouro";
    if (saldoPartidas <= 90)  return "Diamante";
    if (saldoPartidas <= 100) return "Lendário";
    return "Imortal";
}

function exibirSaldoEhRanking(numeroVitorias, numeroDerrotas){
    const saldo = calcularSaldoDasPartidas(numeroVitorias, numeroDerrotas)
    const nivelHeroi = definirNivel(saldo)

    console.log(`O Herói de saldo de ${saldo} está no nível de ${nivelHeroi}`)
}

// testando 
exibirSaldoEhRanking(1000,"30")
exibirSaldoEhRanking(1000, 980)
exibirSaldoEhRanking("A","30")
exibirSaldoEhRanking("30")



