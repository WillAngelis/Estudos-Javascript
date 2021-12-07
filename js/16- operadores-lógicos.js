console.log("Operadores Lógicos");

const listaDeDestinos = new Array(
  "Salvador",
  "São Paulo",
  "Rio de Janeiro",
  "Curitiba"
);

const idadeComprador = 15;
const estaAcompanhada = true;

// Se a idade do comprador for maior de 18 remove um item do array

if (idadeComprador > 18) {
  console.log("Maior de idade");
  listaDeDestinos.splice(1, 1);
} else if (estaAcompanhada) {
  console.log("Está acompanhado pode comprar");
  listaDeDestinos.splice(1, 1); // removendo item
} else {
  console.log("Você não é maior de idade");
}

// conferindo valores booleanos
console.log(idadeComprador > 18); // maior que
console.log(idadeComprador < 18); // menor que
console.log(idadeComprador <= 18); // menor ou igual que
console.log(idadeComprador >= 18); // maior ou igual que
console.log(idadeComprador == 18); // == simbolo de comparação
