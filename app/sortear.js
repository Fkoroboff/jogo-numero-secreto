const menorValor = 1
const maiorValor = 100
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('Número secreto: ',numeroSecreto)

const menorElementoValor = document.getElementById('menor-valor')
menorElementoValor.innerHTML = menorValor

const maiorElementoValor = document.getElementById('maior-valor')
maiorElementoValor.innerHTML = maiorValor