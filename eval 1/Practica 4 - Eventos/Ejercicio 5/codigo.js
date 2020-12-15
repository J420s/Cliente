window.onload = function(){
    document.getElementById("myinput").onkeypress = check
    document.getElementById("myinput").onkeyup = hunt

}

function check(evt) {
    evt = evt || window.event
    var cCode = evt.charCode || evt.keyCode
    var charStr = String.fromCharCode(cCode)
    if(isFinite(charStr)==false)evt.returnValue=false
}
//Funcion que captura los caracteres [´`^¨] en el evento 'onkeyup' y los borra en ejecución
function hunt(){
    this.value = this.value.replace(/[`´^¨]/g, '');
}


