const div = document.querySelector('.container')
const p = document.querySelector('.texto')
const txt = document.querySelector('.txt')
const cor = document.querySelector('.cor')
const push = document.querySelector('.pushBtn')

let colors = ['red','blue','green','yellow']
let texto = ['1','2','3','4','5','6','7','8','9','+2','+4']

txt.addEventListener('click',()=>{
    MudarTxt()
})
cor.addEventListener('click',()=>{
    MudarCor()
})

function MudarTxt(corRandom){
    let textoRandom = texto[Math.floor(Math.random() * texto.length)] 
    p.textContent = textoRandom
    if (textoRandom == '+4'){
        div.style.background = 'black'
    }else{
        div.style.background = corRandom
    }
    console.log(textoRandom)
}

function MudarCor(){
    let corRandom = colors[Math.floor(Math.random() * colors.length)]
    div.style.background = corRandom;
    console.log(corRandom)
    return corRandom
}
push.addEventListener('click',(corRandom)=>{
    MudarCor()
    if (div.style.background == 'yellow'){
        p.style.color = 'black'
        console.log('foi')
    }else{
        p.style.color = 'white'
    }
    MudarTxt()
})
