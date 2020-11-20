window.onload = function () {
   
    //Convertimos elemento en array, lo recorremos y añadimos eventos
    for(const radio of Array.from(form['color'])){
        if(addEventListener){
            radio.addEventListener("change",changeColor)
        }
    }
    
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