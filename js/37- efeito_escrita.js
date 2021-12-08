const texto = document.querySelector('.text')

function typeWriter(element){
    const txtArray = element.innerHTML.split('');
    element.innerHTML = '';
    txtArray.forEach((letra, i )=> {
        setTimeout(() => element.innerHTML += letra, 75 * i);
    });
}
typeWriter(texto)
console.log(texto)