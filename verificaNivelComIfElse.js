
function classificarHeroi(nomeHeroi, experienciaObtida) {
    const experincia = Number(experienciaObtida) //Garante que o xp seja número

    if(isNaN(experincia)) {
        return "Erro: A experiência precisa ser um número válido."
    }

    let nivelHeroi

    if (experincia <= 1000) {
        nivelHeroi = "Ferro"         
    } else if (experincia <= 2000) {
        nivelHeroi = "Bronze"  
    } else if (experincia <= 5000) {
        nivelHeroi = "Prata"  
    } else if (experincia <= 7000) {
        nivelHeroi = "Ouro"  
    } else if (experincia <= 8000) {
        nivelHeroi = "Platina"  
    } else if (experincia <= 9000) {
        nivelHeroi = "Ascendente"  
    } else if  (experincia <= 10000) {
        nivelHeroi = "Imortal"  
    } else {
        nivelHeroi = "Radiante"    
    }

    return `O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`
}

// Testando a função 
console.log(classificarHeroi("Arnaldo Antunes", "A"))           // Com erro
console.log(classificarHeroi("Chapolin Colorado", "1000000"))   // Converte string numérica 
console.log(classificarHeroi("Antonio Nunes", 1000))         