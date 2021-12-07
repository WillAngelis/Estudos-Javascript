## Valores Primitivos : string, number, boolean, undefined, null - 

São imutáveis, não é possivel mudar eles somente atribuir outro valor 

## Valores por Referencia : Array, object , function

São mutaveis exemplo e passados por referencia

let a = [1,2,3];
let b = a

Os dois apontam para o mesmo local da memória e ao alterar a também altera b  

Como copiar os valores de um Array ou objeto ? 

## Operador Spread 

# Array
let a = [1,2,3]
let b = [...a]
# Object
let a = {1,2,3}
let b = {...a}