const numero = Number(prompt('Digite um numero:'));
const numeroTitulo = document.getElementById('numero-titulo');
const textoDiv = document.getElementById('texto')

numeroTitulo.style.color = '#722684'
numeroTitulo.innerHTML = numero ;
textoDiv.innerHTML += `<p>Seu número + 2 é ${numero + 2}. </p>`;
textoDiv.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(numero)}</p>`;
textoDiv.innerHTML += `<p> É NaN: ${Number.isNaN(numero)}</p>`;
textoDiv.innerHTML += `<p>é inteiro ? :${Number.isInteger(numero)}</p>`;
textoDiv.innerHTML += `<p>Arredondado para baixo ${Math.floor(numero)} . </p>`;
textoDiv.innerHTML += `<p>Arredondado para cima : ${Math.ceil(numero)} </p>`;
textoDiv.innerHTML += `<p>Com duas casas decimais :${numero.toFixed(2)}. </p>`;
