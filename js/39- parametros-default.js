//Parametros default em funções

function soma(a = 2, b = 4 ){ // o parametro 'a' recebe o valor 2 como default e 'b' recebe 4 
    return a + b

}
console.log(soma(2,3)) // ao passar valores na função eles são usados normalmente
console.log(soma()) // caso não passar parametros ele faz a soma dos numeros default
