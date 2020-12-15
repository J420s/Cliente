window.onload = function(){
    let buttons = document.getElementsByTagName("button")
    let inputs = document.getElementsByTagName("input")
    //Elementos <input type="button"> 
    for (let i = 0; i < inputs.length; i++) {
        if(inputs[i].getAttribute("type")=="button"){
            inputs[i].onmouseover = function(){alert("Estás sobre un botón")}
        }   
    }
    //Elementos <button>
    for (let b = 0; b < buttons.length; b++) {
        buttons[b].onmouseover = function(){alert("Estás sobre un botón")}   
    }
}
