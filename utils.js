

addEventListener ? Element.addEventListener("event",myfoo) : Element.attachEvent("onevent",myfoo)

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

//Funcion que captura los caracteres [´`^¨] en el evento 'onkeyup' y los borra en ejecución
function hunt(){
    this.value = this.value.replace(/[`´^¨]/g, '');
}

function limit(){
    if(this.value.length > 150){
        this.value = this.value.replace(/.$/g, '');
    }
}