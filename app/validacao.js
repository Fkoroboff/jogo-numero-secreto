function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if(seOChuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor invalido</div>'
        return
    }

    if(numeroFOrMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `
        <dix>valor invalido: Fale um número entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Você acertou!!</h2>
        <h3>O numero secreto era ${numeroSecreto}

        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    }else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    }else{
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}



function seOChuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroFOrMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})