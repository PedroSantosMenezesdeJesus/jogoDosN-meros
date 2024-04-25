let randomNumber = parseInt(Math.random()*100+1)

console.log(randomNumber)

const submit = document.querySelector('#jogar')
const jogada = document.querySelector('#txtNumero')
const jogadasAnteriores = document.querySelector('.vezes')
const jogadasRestantes = document.querySelector('.numChances')
const recomecar = document.querySelector('.resultado')
const avisos = document.querySelector('.avisos')

const p = document.createElement('p')

let numerosJogados = []

let minhasJogadas = 1

let playGame = true 

if(playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault()

        let tentativa = parseInt(jogada.value)
        console.log(tentativa)
        validaChances(tentativa)
    })
}

function validaChances(tentativa) {
    if(isNaN(tentativa)) {
        alert('Atenção, coloque um numêro de 1 até 100')
        jogada.value = ''
        jogada.focus()
    }
    else if(tentativa < 1 || tentativa > 100) {
        alert('coloque um numêro entre 1 e 100')
        jogada.value = ''
        jogada.focus()
    }
    else if(numerosJogados.includes(tentativa)) {
        alert('atenção, tu já colocou esse número')
        jogada.value = ''
        jogada.focus()
    }
    else{
        numerosJogados.push(tentativa)
        if(minhasJogadas === 6 && tentativa !== randomNumber) {
            displayTentativas(tentativa)
            msg(`Game Over!! <br> o número correto era ${randomNumber}`)
            fimJogo()
        }
        else{
            displayTentativas(tentativa)
            checarTentativas(tentativa)
        }
    }
} 

function checarTentativas(tentativa) {
    if(tentativa === randomNumber){
        msg('Parabéns, você acertou o número')
        fimJogo()
    }
    else if(tentativa < randomNumber) {
        msg('Palpite baixo, tente novamente')
    }
    else if(tentativa > randomNumber) {
        msg('Palpite alto, tente novamente')
    }
}

function displayTentativas(tentativa) {
    jogada.value = ''
    jogada.focus()
    jogadasAnteriores.innerHTML += `${tentativa};  ` 
    minhasJogadas++
    jogadasRestantes.innerHTML = `${7 - minhasJogadas}`
}

function msg(texto) {
    avisos.innerHTML =  `<h1>${texto}</h1>`
}

function fimJogo() {
    jogada.value = ''
    jogada.setAttribute('disabled','')
    submit.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h1 id="iniciarJogada">Iniciar Jogo</h1>`
    recomecar.appendChild(p)
    playGame = false
    iniciarJogo()
}

function iniciarJogo() {
    const botaoIniciar = document.querySelector('iniciarJogada')
    botaoIniciar.addEventListener('click', function(){
        randomNumber = parseInt(Math.random()*100+1) 
        numerosJogados = []
        minhasJogadas = 1
        jogadasAnteriores = ''
    })
}