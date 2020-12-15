
let xhr = null;
window.onload = function() {
    
    xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP")
    const nombre = "Jorge"
    const box = document.getElementById('result')
    
   loadPHP('minicode.php',box,nombre)
   
}

function loadPHP(path,box,arg) {
    let url = path + "?nombre=" + arg
    if (xhr) {
        xhr.open("GET",url)
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                box.innerHTML = xhr.responseText
            }
        }
        xhr.send("null");
    }
}

function addEvent(element,event,foo){
    addEventListener ? element.addEventListener(event,foo) : element.attachEvent("on"+event,foo)
}