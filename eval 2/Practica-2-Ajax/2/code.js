let xhr = null;
window.onload = function() {
    
    xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP")
      
    button = document.getElementById('mybutton')
    col = document.getElementById('mycol')

    if(addEventListener)button.addEventListener('click',() => {loadPHP('minicode.php',col)})
    else{button.attachEvent('onclick'),() => {loadPHP('minicode.php',col)}}
}

function loadPHP(path,element) {
    if (xhr) {
        xhr.open("POST", path,true)
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                element.innerHTML = xhr.responseText
            }
        }
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")
        xhr.send(null)
    }
}
