const div = document.querySelector('.container')
const p = document.querySelector('.texto')
const txt = document.querySelector('.txt')
const cor = document.querySelector('.cor')

let colors = ['red','blue','black','white','green','pink']
let texto = ['1','2','3','4','5','6','7','8','+4']

txt.addEventListener('click', function(){
    let textoRandom = texto[Math.floor(Math.random() * texto.length)] 
    p.textContent = textoRandom
    console.log(textoRandom)

})

cor.addEventListener('click',()=>{ 
    let corRandom = colors[Math.floor(Math.random() * colors.length)] 
    div.style.background = corRandom
    if (corRandom != 'white'){
        p.style.color = 'white'
    }else{
        p.style.color = 'black'
    }
    console.log(corRandom)
})
