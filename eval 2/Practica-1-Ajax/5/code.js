let xhr = null;
window.onload = function() {
    xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP")  
    button = document.getElementById('mybutton')
    if(addEventListener)button.addEventListener('click',() => {loadJS('minicode.js')})
    else{button.attachEvent('onclick'),() => {loadJS('minicode.js')}}
}

function loadJS(path) {
    if (xhr) {
        xhr.open("GET", path)
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                eval(xhr.responseText)
            }
        }
        xhr.send(null);
    }
}
