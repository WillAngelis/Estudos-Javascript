const foco = document.querySelector('.input__foco')
const blur = document.querySelector('.input__blur')
const change = document.querySelector('.input__change')
const p = document.createElement('p')
const p2 = document.createElement('p')
document.body.appendChild(p)
document.body.appendChild(p2)

blur.addEventListener('focus',function(){
    p.innerText = 'Você clico no input Blur'
    p.style.color = '#28a0fc'
    
})
blur.addEventListener('blur',function(){
    p2.innerText = 'Você desfocou o input Blur'
    p2.style.color = '#932afc'
    p.innerHTML = ''
    blur.value = ''
})
change.addEventListener('change', function(){
    p.innerText = `Você digitou : ${change.value}`
    p2.innerText = ''
    p.style.color = '#ea2a94'
    change.value = ''
})
foco.addEventListener('focus',function(){
    p.innerText = 'Você clicou no input Foco'
    p.style.color = '#a2152a'
    foco.value = ''

})
foco.addEventListener('blur',function(){
    foco.value = ''
    p2.innerText = 'Você desfocou o input foco'

})