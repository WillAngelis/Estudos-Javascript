let listaCores = ['azul','vermelho','verde','preto']

listaCores.forEach(function(valor,indice,array){ // os parametros podem ser qualquer nome
    if (valor == 'vermelho'){
        array[indice] = 'rosa' 
    }
})
//interrompe quando o indice chega a undefined
console.log('adicionei o rosa')
console.log(listaCores)
