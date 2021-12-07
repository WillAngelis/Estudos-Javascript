console.log("Operadores Lógicos Encadeados");

const listaDeDestinos = new Array(
  "Salvador",
  "São Paulo",
  "Rio de Janeiro",
  "Curitiba"
);

const idadeComprador = 15
const estaAcompanhada = true
const temPassagemComprada = true
// Se a idade do comprador for maior de 18 remove um item do array

if (idadeComprador >= 18 || estaAcompanhada == true ) {
  console.log("Maior de idade");
  listaDeDestinos.splice(1, 1); //removendo item
} else {
  console.log("Você não é maior de idade");
}
console.log(listaDeDestinos)

console.log('Embarque: \n\n') // \n pula uma linha
if(idadeComprador >= 18 && temPassagemComprada){
    console.log('Boa viagem')
}else{
    console.log('Você não pode embarcar')
}


// && as duas condições precisam ser true
// || apenas uma condição precisa ser true