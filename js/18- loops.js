console.log("Loops");

const listaDeDestinos = new Array(
  "Salvador",
  "São Paulo",
  "Rio de Janeiro",
  "Curitiba"
);
const idadeComprador = 18
const estaAcompanhada = false
let temPassagemComprada = false
const destino = 'Santos'
// Se a idade do comprador for maior de 18 remove um item do array

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true 

let contador = 0
let destinoExiste = false
//iterando sobre array com while
while(contador<4){
    if(listaDeDestinos[contador] == destino){
        console.log('Destino Existe')
        destinoExiste = true
        break
    }
    contador += 1 // adicionando a variavel contador em cada iteração 
}
