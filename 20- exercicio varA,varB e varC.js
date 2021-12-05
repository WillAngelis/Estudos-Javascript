let varA = 'A' // B
let varB = 'B' // C
let varC = 'C' // A

// Para resolver podemos criar uma nova variavel e salvar o valor de A nela

let novaVar = varA
varA = varB
varB = varC
varC = novaVar

console.log(varA,varB,varC)