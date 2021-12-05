const input = document.querySelector('.input')

input.addEventListener('focus', function(){
    input.style.border = '4px solid #6c4bfe'
    input.style.backgroundColor = '#ffca2b'
    input.style.outline = 'none'
})

input.addEventListener('blur',function(){
    input.style.border = '4px solid #fc4bfe'
    input.style.backgroundColor = ''
    input.style.outline = 'none'
    const valor = document.querySelector('.input').value
    if (valor.length < 3 ){
        input.style.backgroundColor = 'red'
        console.log(valor)
    }else{
        input.style.backgroundColor = 'green'
    }
})

