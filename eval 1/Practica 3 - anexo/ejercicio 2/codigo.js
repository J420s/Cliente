window.onload = function(){

    //Creamos elementos
    let newForm = document.createElement("form");
    let inputBox = document.createElement("input");
    let sumButton = document.createElement("input");
    let restartButton = document.createElement("input");
   
    //Asignamos atributos
    newForm.setAttribute("id","myForm");
    setAttributes(inputBox,{"type":"text","id":"field","value":"0"});
    setAttributes(sumButton,{"type":"button","onclick":"sum()","value":"Sumar"});
    setAttributes(restartButton,{"type":"button","onclick":"restart()","value":"Restart"});
    
    //Montamos estructura
    newForm.append(inputBox,sumButton,restartButton);
    document.body.append(newForm);
}

function sum(){
    let current = parseInt(document.forms["myForm"]["field"].value);
    document.forms["myForm"]["field"].value = current +10;
}

function restart(){
    document.forms["myForm"]["field"].value = 0;
}

//Funcion para pasar atributos multiples en forma de mapa
function setAttributes(elem, attrs) {
    for(var key in attrs) {
      elem.setAttribute(key, attrs[key]);
    }
}


