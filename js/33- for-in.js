let listaCores = ['azul','vermelho','verde','preto']

console.log(listaCores)

for (let x in listaCores){
    console.log(x)
    console.log(`Indice ${x} valor ${listaCores[x]}`)
}

// a var x recebe a cada iteração o valor do indice de cada posição do array listaCores

// o critério de parada é o retorno de undefined (quando não haver mais indices no array)

// flexibilidade na hora de iterar um array que não possui posições padrões