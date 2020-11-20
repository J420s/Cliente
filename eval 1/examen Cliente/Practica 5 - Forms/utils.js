function create_Par(text){
    let new_p = document.createElement('p');
    let new_text = document.createTextNode(text);
    new_p.appendChild(new_text);
    return new_p;
}

function insert_par(){
    let new_p = create_Par('Párrafo insertado');
    get_div('1D').insertBefore(new_p,get_div('1D').children[1]);
}

function replace_par(){
    let new_P = create_Par('Párrafo reemplazado');
    get_div('1D').replaceChild(new_P,get_div('1D').children[1]);
}

function delete_par(){
    get_div('1D').removeChild(get_div('1D').children[1]);
}

function clone_div(){
    let clone = get_div('1D').cloneNode(true);
    document.body.appendChild(clone);
}

function checkInput(input){
    var l = 0;
    var cont = 0;
    for(var n of input){
        if(isNaN(n)&&n.match(/[a-z]/i)){l++;}
        cont++;
    }
    if(l==1&&cont==9){return true;}
    else{return false;}
}

function clear(id){
    let elem = document.getElementById(id)
    while(elem.firstChild){elem.removeChild(elem.firstChild)}   
}

function setAttributes(elem, attrs) {
    for(var key in attrs) {
      elem.setAttribute(key, attrs[key]);
    }
}

function create_elem(type,inner,attrs){
    new_elem = document.createElement(type)
    new_elem.innerHTML += (inner)
    setAttributes(new_elem,attrs)
    return new_elem
}

function write_alert(option){
    
    //Elimina todos los elementos dentro de alertDiv
    let alertDiv = document.getElementById("alertDiv");                     
    while(alertDiv.firstChild){alertDiv.removeChild(alertDiv.firstChild);}

    let alertP = document.createElement('P');
    
    switch(option){
        case "empty": 
            alertP.innerHTML = ("No puede dejar este campo vacio!");
        break;
        case "wrong":
            alertP.innerHTML = ("Formato introducido inconrrecto!!");
        break;
    }

    //Da formato a alerP y lo añade al html
    setAttributes(alertP,{"style":"font-size:12px; color:red"});
    alertDiv.append(alertP);
}

//Funcion que captura los caracteres [´`^¨] en el evento 'onkeyup' y los borra en ejecución
function hunt(){
    this.value = this.value.replace(/[`´^¨]/g, '');
}