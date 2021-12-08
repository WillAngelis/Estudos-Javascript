const cor = ['#b13cf3','#33b803','#fff','#000','#a23']
const btn = document.querySelector('#addBtn')
const ul = document.querySelector('.list')
const input = document.querySelector('#input')

let tamanho = cor.length - 1
let corMin = 0
function getRandomIntInclusive() {
    corMin = Math.ceil(corMin);
    tamanho = Math.floor(tamanho);
    const valor = Math.floor(Math.random() * (tamanho - corMin + 1)) + corMin;
    mostraLi(valor)
  }

btn.addEventListener('click', function(e){
    e.preventDefault()
    getRandomIntInclusive()
})

function mostraLi(valor){
    const li = document.createElement('li')
    ul.appendChild(li)
    ul.classList.add('list-group')
    li.classList.add('list-group-item')
    const corFundo = `${cor[valor]}`
    const corText = `${cor[valor + 1]}`
    li.textContent = `${input.value}`
    colorir(corFundo,li,corText)
}
function colorir(corFundo,li, corText){
    li.style.background = `${corFundo}`
    li.style.color = `${corText}`
}