
let xhr = null;
window.onload = function() {
    
    xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP")
    const nombre = "Jorge"
    const box = document.getElementById('result')
    
   loadPHP('minicode.php',box,nombre)
   
}

function loadPHP(path,box,arg) {
    if (xhr) {
        xhr.open("POST", path,true)
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                box.innerHTML = xhr.responseText
            }
        }
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send("nombre="+arg)
    }
}
