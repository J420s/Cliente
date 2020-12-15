window.onload = function(){
    let elem = document.getElementById("mypar");
    if(window.addEventListener){
        elem.addEventListener("mouseover",inc_size)
        elem.addEventListener("mouseout",dec_size)
    }
    else{
        elem.attachEvent("onmouseover",inc_size)
        elem.attachEvent("onmouseout",dec_size)
    }
}
function inc_size(){
    this.style.fontSize = "16pt";
}
function dec_size(){
    this.style.fontSize = "12pt";
}
