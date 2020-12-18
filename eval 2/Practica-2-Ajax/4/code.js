/*
 *   NoFunciona
 */


let xhr = null;
window.onload = function() {
    
    xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP")
    let box = document.querySelector("#box")
    myform['mybutton'].addEventListener("click",function(e){
        e.preventDefault()
        loadPHP("minicode.php",box)
    })
   
}

function formToXML(){
    let nombre = document.querySelector("#name")
    let apellido = document.querySelector("#surname")
    let xmlString = "<userinfo>" +
                        "<"+nombre.Tagname+">" + 
                            +nombre.value+
                        "</"+nombre.Tagname+">" + 
                        "<"+apellido.Tagname+">"
                            +apellido.value+
                        "</"+apellido.Tagname+">" + 
                    "</userinfo>"
    return xmlString;
}
function loadPHP(path) {
    
    if (xhr) {
        xhr.open("POST", path,true)
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                box.innerHTML = xhr.responseText
            }
        }
        xhr.setRequestHeader("Content-type","text/xml");
        xhr.send(formToXML())
    }
}
