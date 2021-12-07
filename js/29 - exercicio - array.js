let objetos = ["Cadeira", "Impressora", "Garfo"];
const input = document.querySelector(".input");
const add = document.querySelector(".add");
const ord = document.querySelector(".ord");


add.addEventListener("click", function () {
  if (input.value == "") {
      alert('Informe um valor válido')
    } else {
        const value = input.value[0].toUpperCase() + input.value.slice(1);
        inclui(value)
    }
  return 
});
function inclui(value){
    if (objetos.includes(value)) {
      alert('Objeto já foi adicionado');
    } else {
        objetos.push(value)
        console.log(objetos);
        input.value = ''
    }
}
ord.addEventListener("click",function(){
    objetos.sort()
    console.log(objetos)
}); 