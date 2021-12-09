const texto = document.querySelector('#texto')
    const verm = document.querySelector('.verm')
    const apagar = document.querySelector('.apagar')
    const h1 = document.querySelector('.h1')
    verm.addEventListener('click',e =>{
        e.preventDefault()
        let textoDentro = texto.value
        console.log(textoDentro)
        texto.style.color = '#ff0000'
    })
    apagar.addEventListener('click',e =>{
        e.preventDefault()
        texto.value = ''
    })
    h1.addEventListener('click', e =>{
        e.preventDefault()
        texto.style.fontSize = "40px";
    })
const textoUpper = texto.value