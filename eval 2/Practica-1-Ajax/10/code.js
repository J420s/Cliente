let xhr = null;
window.onload = function () {
    xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP")
    let button = document.getElementById('cssSwap')

    if (addEventListener) button.addEventListener('click', () => { getPHP('minicode.php') })
    else { button.attachEvent('onclick', () => { getPHP('minicode.php') }) }


}

function getPHP(path) {

    let col = document.getElementById('mycol')
    let img = document.createElement('img')
    img.src = "loading.gif"
    col.append(img)

    if (xhr) {
        xhr.open("POST", path)
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                col.innerHTML = xhr.responseText
            }
        }
        xhr.send(null);
    }
}