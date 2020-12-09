xhr = null;
window.onload = function() {
    xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP")  
    button = document.getElementById('mybutton')

    if(addEventListener)button.addEventListener('click',() => {loadPHP('minicode.php')})
    else{button.attachEvent('onclick'),() => {loadPHP('minicode.php')}}
}

function loadPHP(path,element) {
    if (xhr) {
        xhr.open("GET", path)
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                element.innerHTML = xhr.responseText
            }
        }
        xhr.send(null);
    }
}
