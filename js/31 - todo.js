const input = document.querySelector('#input')
const btn = document.querySelector('#addBtn')
const ul = document.querySelector('.list')
input.style.margin = '20px 0'
btn.style.margin = '20px 0'
btn.addEventListener('click', function(e){
    e.preventDefault()
    const txt = input.value
    createLi(txt)
})

function createLi(txt){
    const li = document.createElement('li')
    ul.classList.add('list-group')
    li.classList.add('list-group-item')
    li.classList.add('d-flex')
    li.classList.add('justify-content-between')
    li.classList.add('align-items-center')
    ul.appendChild(li)
    ul.style.margin = '10px '
    const p = document.createElement('p')
    li.appendChild(p)
    p.style.margin = '0'
    p.classList.add('h5')
    p.textContent += `${txt}`
    createBtn(li)
}
function createBtn(li){
    const btnRemove = document.createElement('button')
    li.appendChild(btnRemove)
    btnRemove.classList.add('btn-danger')
    btnRemove.classList.add('btn')
    btnRemove.textContent = 'Remover'
    removeTask(btnRemove, li)
}
function removeTask(btnRemove, li){
    btnRemove.addEventListener('click', function(e){
        e.preventDefault()
        li.remove()
    })
}