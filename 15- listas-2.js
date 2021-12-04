const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'  
) 

// Excluindo item do array

listaDeDestinos.splice(1,1) // exclui o item da posição 1 (São Paulo)
console.log(listaDeDestinos)
console.log(listaDeDestinos[1]) // Imprimindo o item que está na posição 1 atualmente (Rio de Janeiro)


//Todo array começa no 0