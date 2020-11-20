window.onload = function () {
   
    if(addEventListener){
        boldType.addEventListener("change",changeTypo)
        italicType.addEventListener("change",changeTypo)
    }else{
        boldType.attachEvent("onchange",changeTypo)
        italicType.attachEvent("onchange",changeTypo)
    }
}

function changeTypo(){
    
    texto = document.getElementById('texto')
    switch(this.value){
        case "bold":
            this.checked ? texto.style.fontWeight = "bold" : texto.style.fontWeight = ""
            break;
        case "italic":
            this.checked ? texto.style.fontStyle = "italic" : texto.style.fontStyle = ""
            break;
    }
}