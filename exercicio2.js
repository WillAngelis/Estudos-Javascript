const nome = 'William';
const sobreNome = 'Angelis'
const idade = 25;
const peso = 72;
const alturaEmM = 1.65

let indiceDeMassaCorporal = peso / ( alturaEmM * alturaEmM)
let anoNascimento = 2021 - 25
console.log(indiceDeMassaCorporal)
console.log(anoNascimento)

console.log(nome,sobreNome,'tem',idade,'anos, pesa',peso,'kg e tem',alturaEmM,'de altura e seu indice de massa corporal é de',indiceDeMassaCorporal)
console.log(nome, 'nasceu em',anoNascimento)

//Template Strings//

console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso}kg e tem ${alturaEmM} de altura e seu indice de massa corporal é ${indiceDeMassaCorporal}`)
console.log(`${nome} nasceu em ${anoNascimento}`)