window.onload = function () {
    xhr = false; 
    xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP")
    button = document.getElementById('btn-btn')
    addEvent(button,"click",()=>{swapIMG('img/ladyonstage.jpg','image')})
}

function swapIMG(new_img, img_elementID) {
    if (xhr) {
        xhr.open("GET", new_img);
        xhr.responseType = 'blob';
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                let element = document.getElementById(img_elementID)
                let url = window.URL || window.webkitURL
                element.src = url.createObjectURL(xhr.response)
            }
        }
        xhr.send(null);
    }
}


function addEvent(element,event,foo){
    addEventListener ? element.addEventListener(event,foo) : element.attachEvent("on"+event,foo)
}



