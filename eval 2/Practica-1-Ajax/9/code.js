let xhr = null;
window.onload = function () {
    xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP")
    let button = document.getElementById('mybutton')

    if (addEventListener) button.addEventListener('click', () => { getJSON('data.json') })
    else { button.attachEvent('onclick', () => { getJSON('data.json') }) }


}

function getJSON(path) {

    let colLeft = document.getElementById('colLeft')
    let colRight = document.getElementById('colRight')

    if (xhr) {
        xhr.open("POST", path)
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                let json = JSON.parse(xhr.responseText)
                colLeft.innerHTML = "<h1>"+json.name+"</h1>"
                colRight.innerHTML = "<h1>"+json.surname+"</h1>"
            }
        }
        xhr.send(null);
    }
}