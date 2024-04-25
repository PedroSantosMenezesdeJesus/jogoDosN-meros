let aleatorio = parseInt(Math.random()*100+1)

console.log(aleatorio)

const submit = document.querySelector('#jogar')
const jogadas = document.querySelector('#txtnumero')
const jogadasAnteriores = document.querySelector('.vezes')
const jogadasRestantes = document.querySelector('.numChanches')
const recomecar = document.querySelector('.resultados')
const avisos = document.querySelector('.avisos')

const p = document.createElement('p')

let numerosJogados = []
let minhaJogadas = 1

let playGame = true 

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDeFault()
})
}