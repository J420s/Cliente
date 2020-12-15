window.onload = function(){
    document.getElementById("mypar").onmouseover = inc_size
    document.getElementById("mypar").onmouseout = dec_size
}


function inc_size(){
    this.style.fontSize = "16pt";
}

function dec_size(){
    this.style.fontSize = "12pt";
}