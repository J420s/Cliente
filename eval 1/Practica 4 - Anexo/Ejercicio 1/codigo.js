
window.onload=function(){

    addEventListener ? myform.addEventListener("submit",check) : myform.attachEvent("onsubmit",check)
}

function check(e){
    let empty = false;
    const inputs = myform.elements
    for (const input of Array.from(inputs)) {
        if(input.value === "") empty = true
    }
    if(empty){
        alert("No puede dejar campos vacios")
        e.preventDefault() // = return false
    }else{
        alert("Formulario enviado")
    }        
}