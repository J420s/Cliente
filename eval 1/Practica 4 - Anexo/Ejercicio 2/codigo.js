
window.onload=function(){
    
    mylink = document.getElementById("google")
    addEventListener ? mylink.addEventListener("click",cancel) : mylink.attachEvent("onclick",cancel)
}

function cancel(e){
    e.preventDefault() // = returnValue = false
}

