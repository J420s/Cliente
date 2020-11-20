window.onload = function () {

    addEventListener ? form['colores'].addEventListener("click",changeColor) : form['colores'].attachEvent("onclick",changeColor)
}

function changeColor(){
    texto = document.getElementById('texto')
    
    switch (this.value){
        case 'verde':
            texto.style.color = "green"
            break;
        case 'azul':
            texto.style.color = "blue"
            break;
        case 'rojo':
            texto.style.color = "red"
            break;
    }
}