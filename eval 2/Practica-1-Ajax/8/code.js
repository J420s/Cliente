let xhr = null;
window.onload = function () {
    xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP")
    let button = document.getElementById('cssSwap')
    let cssLink = document.getElementById('css')
    
    if(addEventListener)button.addEventListener('click',() => {swapCSS('style2.css', cssLink)})
    else{button.attachEvent('onclick'),() => {swapCSS('style2.css', cssLink)}}

}

function swapCSS(path, element) {
    if (xhr) {
        xhr.open("GET", path)
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                element.href = xhr.responseURL
            }
        }
        xhr.send(null);
    }
}