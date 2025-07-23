function calcularDesconto (valorDaCompra, codigoCupom) {
    if (codigoCupom === "DESCONTO10") {
        valorDaCompra *= 0.90 
    } else if (codigoCupom === "DESCONTO20") {
        valorDaCompra *= 0.80 
    } 
    const valorFormatado = valorDaCompra.toFixed(2).replace('.', ',');   

    return `Valor final da compra: R$ ${valorFormatado}`
}

console.log(calcularDesconto(100,"DESCONTO30"))