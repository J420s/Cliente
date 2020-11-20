
window.onload=function(){
    form['nombre'].focus()
    
    //Controlamos eventos
    if(addEventListener){
        form.addEventListener('submit',main)
        form['observaciones'].addEventListener("keydown",limit)
        form['aficion'].addEventListener("change",listInfo)
        
    }else{
        form.attachEvent("onsubmit",main)
        form['observaciones'].attachEvent("onkeydown",limit)
        form['aficion'].attachEvent("onchange",listInfo)
    }
}

//Funcion para disparar 3 funciones con el evento 'submit'
function main(e){
    if(checkTLF() == false || checkDNI() == false) e.preventDefault()
    else{display(e)}
}

//El campo dni no puede estar vacio
function checkDNI(){
    if(form['dni'].value==""){
        innerAlert("dniLabel","Este campo no puede estar vacio")
        return false
    }
}

//Limita el campo telefono únicamente a números
function checkTLF(){
    if(/[^0-9]/g.test(form['telefono'].value)){
        innerAlert("tlfLabel","Este campo solo puede contener numeros")
        return false
    }
}

//Limita el campo observaciones a 150 carácteres
function limit(){
    if(this.value.length > 150){
        this.value = this.value.replace(/.$/g, '');
    }
}

//Lanza un alert con información sobre la lista desplegable con el eveno 'change'
function listInfo(){
    let lenght = this.options.length
    let index = this.selectedIndex
    let value = this.value

     alert("La longitud de la lista es "+lenght+
        "\nEl índice seleccionado es el "+index+
        "\nEl valor del índice seleccionado es "+value)   
}

//Función con preventDefault para cancelar el submit y permitir mostrar la imagen subida
//Crea una estructura nueva dentro de 'content-row'. Si ya tenía mas de un elemento lo borra.
function display(e){
    let contentRow = document.getElementById('content-row')
    while(contentRow.children[1]) contentRow.removeChild(contentRow.children[1])
    
    let formFotoColumn = create_elem('div','',{"class":"col-md-3 text-center","id":"formFotoColumn"})
    let new_foto = create_elem('img','',{"class":"img-thumbnail border-primary"})
    
    let foto = form['foto']
    if(foto.files[0]){
        new_foto.src = URL.createObjectURL(foto.files[0])
        formFotoColumn.append(new_foto)
        contentRow.append(formFotoColumn)
        e.preventDefault()
    }
    
}

//Función que escribe un texto dentro de una <label>. 
//El texto y el id de la label son pasados por parámetro. Si había algun elemento dentro, lo borra. 
function innerAlert(labelID,text){
    let label = document.getElementById(labelID)
    while(label.children[0]) label.removeChild(label.children[0])
    label.innerHTML+= "<p class='text-danger'>"+text+"</p>"
}

//Función para crear elementos de forma dinámica
function create_elem(type,inner,attrs){
    let elem = document.createElement(type)
    elem.innerHTML += (inner)
    setAttributes(elem,attrs)
    return elem
}

//Función para añadir varios atributos a un elemento pasados por parámetro en forma de mapa
function setAttributes(elem, attrs) {
    for(var key in attrs) {
      elem.setAttribute(key, attrs[key]);
    }
}
