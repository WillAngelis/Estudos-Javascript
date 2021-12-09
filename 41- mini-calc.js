const n1 = document.querySelector('#num1')
const n2 = document.querySelector('#num2')
const ope = document.querySelector('#oper')
const btn = document.querySelector('.btn')
let operation = ''
let resultadoFinal = ''
btn.addEventListener('click', e =>{
    e.preventDefault()
    analisar()
    resultado()
})
const analisar = ()=>{
    if (oper.value == 'soma'){
        operation = '+'
    }else if ( oper.value == 'subtração'){
        operation = '-'
    }else{
        document.body.innerHTML += 'Você digitou algo invalido'
    }      
    return operation
}
let resultado = (n1, n2)=>{
    n1 = num1.value
    n2 = num2.value
    if (operation === '+'){
        
      resultadoFinal = Number(n1)+Number(n2)
    }else if(operation === '-'){
      resultadoFinal =  n1 - n2
    } 
    console.log(resultadoFinal)
    return resultadoFinal
}