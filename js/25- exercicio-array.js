function formulario(){
    const pessoasLista = document.querySelector('.pessoas');
    const form = document.querySelector('.form');
    const pessoas = []; 
    
    form.addEventListener('submit', function(e){
        e.preventDefault();
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')
        pessoas.push({
            nome: nome.value,
            sobrenome : sobrenome.value,
            peso : peso.value,
            altura : altura.value
        })
        console.log(pessoas)
        pessoasLista.innerHTML += `<p> ${nome.value} ${sobrenome.value} ` +
        `${peso.value} ${altura.value} </p>`;
    })
}
formulario()