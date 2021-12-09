const criaDiv = document.querySelector('.btnDiv')
const criaP = document.querySelector('.btnP')
const input = document.querySelector('#texto')
const div = document.createElement('div')
const p = document.createElement('p')
const btn = document.createElement('button')

criaP.addEventListener('click',function(e){
    e.preventDefault()
    div.appendChild(btn)
    btn.textContent = 'Remover'
    btn.classList.add('btn')
    return
})
criaDiv.addEventListener('click', function(e){
    e.preventDefault()
    criarDiv()
})
function criarDiv(){
    document.body.appendChild(div)
    div.appendChild(p)
    classeDiv()
    return 
}

function classeDiv(){
    div.classList.add('div__fundo')
    p.classList.add('p__center')
    p.textContent = `${input.value}`
}
btn.addEventListener('click', function(){
    div.remove()
})