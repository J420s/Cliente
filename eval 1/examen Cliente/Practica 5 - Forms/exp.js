
window.onload=function(){
    form['nombre'].focus()

    
    if(addEventListener){
        form.addEventListener('submit',display)
        form['observaciones'].addEventListener("keydown",limit)
        form['aficion'].addEventListener("change",listInfo)
        
    }else{
        form.attachEvent("onsubmit",display)
        form['observaciones'].attachEvent("onkeydown",limit)
        form['aficion'].attachEvent("onchange",listInfo)
        form['dni'].attachEvent("onsubmit",checkDNI)
        form['telefono'].attachEvent("onsubmit",checkTLF)
    }
}

function listInfo(){
    let lenght = this.options.length
    let index = this.selectedIndex
    let value = this.value

     alert("La longitud de la lista es "+lenght+
        "\nEl índice seleccionado es el "+index+
        "\nEl valor del índice seleccionado es "+value)   
}

function limit(){
    if(this.value.length > 150){
        this.value = this.value.replace(/.$/g, '');
    }
}

function checkDNI(){
    if(form['dni'].value==""){
        alert("el campo 'dni' no puede estar vacio")
        return false
    }
    return true
}

function checkTLF(){
    if(/[^0-9]/g.test(form['telefono'].value)){
        alert("El campo 'telefono' solo puede contener numeros")
        return false
    }
    return true
}


function display(e){
    let contentRow = document.getElementById('content-row')

    while(contentRow.children[1]) contentRow.removeChild(contentRow.children[1])
    let formDataColumn = create_elem('div','',{"class":"col-md-3","id":"formDataColumn"})

    let formDataUl = create_elem('ul',"",{"class":"list-group"})

    let formFotoColumn = create_elem('div','',{"class":"col-md-1 text-center","id":"formFotoColumn"})
    let new_foto = create_elem('img','',{"class":"img-thumbnail border-primary"})
    
    const inputs = Array.from(document.form.elements)
    for (const input of inputs) {
        switch (input.id){
            case 'save': case 'reset': break
            case 'genero':
                if(input.checked){
                    new_element = create_elem('li',capitalize(input.id) +": "+ input.value,{"class":"list-group-item"})
                }
                break
            case 'foto':
                if(input.files[0]){
                    new_foto.src = URL.createObjectURL(input.files[0])
                }
                break
            default:
                new_element = create_elem('li',capitalize(input.id) +": "+ input.value,{"class":"list-group-item"})
                break
        }
        formDataUl.append(new_element)
    }
    
    formDataColumn.append(formDataUl)
    if(new_foto)formFotoColumn.append(new_foto)
    contentRow.append(formDataColumn,formFotoColumn)
    
    e.preventDefault()
}


function create_elem(type,inner,attrs){
    let elem = document.createElement(type)
    elem.innerHTML += (inner)
    setAttributes(elem,attrs)
    return elem
}

function setAttributes(elem, attrs) {
    for(var key in attrs) {
      elem.setAttribute(key, attrs[key]);
    }
}

function capitalize(string){
    return (typeof string) != 'string' ? '' : string.charAt(0).toUpperCase() + string.slice(1)
}