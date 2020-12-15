window.onload = function(){

    //Creamos elementos
    let dniform = document.createElement("form");
    let inputBox = document.createElement("input");
    let sendButton = document.createElement("input");
    let alertDiv = document.createElement("div");

    //Asignamos atributos
    dniform.setAttribute("id","myform");
    setAttributes(inputBox,{"type":"text","id":"dni"});
    setAttributes(sendButton,{"type":"button","onclick":"submit_form()","value":"Enviar"});
    setAttributes(alertDiv,{"id":"alertDiv"});
   
    //Montamos estructura
    dniform.innerHTML = ("DNI:");
    dniform.append(inputBox,sendButton);
    document.body.append(dniform,alertDiv);
}

function submit_form(){
    let dni;
    if(document.getElementById("dni").value){             //Crea variable dni
        dni = document.getElementById("dni").value;
    }
    else{write_alert("empty");}                           //Alert

    if(checkInput(dni)){document.getElementById("myform").submit();}    //Envia
    else{write_alert("wrong");}                                         //Alert
}

//Función que escribe debajo del formulario en caso de error del input
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

//Función que comprueba "input" (8 numeros y una letra)
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

//Funcion para pasar atributos multiples en forma de mapa
function setAttributes(elem, attrs) {
    for(var key in attrs) {
      elem.setAttribute(key, attrs[key]);
    }
}


