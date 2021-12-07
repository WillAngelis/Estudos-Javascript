for(let y = 1; y <= 10; y++){
    const div = document.createElement('div')
    const sect = document.createElement('section')
    document.body.appendChild(sect)
    sect.appendChild(div)
    sect.classList.add('container-fluid')
    sect.style.background = '#000'
    sect.style.minHeight = '150px' 
    div.classList.add('row')
    for(let x = 1; x <= 10; x++){
        const p = document.createElement('p')
        div.appendChild(p)
        p.classList.add('col')
        p.classList.add('h4')
        p.textContent += (`${y} x ${x} = ${y * x}`)
        for(let v = 1; v <=10; v++){
            p.style.background= '#6610f2'
            p.style.border = '3px solid #000'
            p.style.fontWeight = 'bold'
            p.style.padding = '12px'
            p.style.color = '#fff'
            p.style.margin = '10px'
            p.style.textAlign = 'center'
            p.style.borderRadius = '5px'
            p.style.cursor = 'pointer'
        }
    }
}