
function classificarHeroi(nomeHeroi, experienciaObtida) {
    const experincia = Number(experienciaObtida) //Garante que o xp seja número

    if(isNaN(experincia)) {
        return "Erro: A experiência precisa ser um número válido."
    }

    let nivelHeroi

    switch(true) {
        case (experincia <= 1000):
            nivelHeroi = "Ferro"
            break;
        case (experincia <= 2000):
            nivelHeroi = "Bronze"
            break;
        case (experincia <= 5000):
            nivelHeroi = "Prata"
            break;
        case (experincia <= 7000):
            nivelHeroi = "Ouro"
            break;
        case (experincia <= 8000):
            nivelHeroi = "Platina"
            break;
        case (experincia <= 9000):
            nivelHeroi = "Ascendente"
            break;
        case (experincia <= 10000):
            nivelHeroi = "Imortal"
            break;
        default:
            nivelHeroi = "Radiante"
    }

    return `O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`
}

// Testando a função 
console.log(classificarHeroi(111, "A"))                 // Com erro
console.log(classificarHeroi("Chico Bento", "7000"))    // Converte string numérica 
console.log(classificarHeroi("Outro Teste", 9500))     