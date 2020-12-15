window.onload = function(){
    document.getElementById("mypar").onmouseover = ch_size
    document.getElementById("mypar").onmouseout = ch_size
}

function ch_size(evento){
    let event_ = evento || window.event
    switch(event_.type){
        case 'mouseover':
            this.style.fontSize="16pt"
        break
        case 'mouseout':
            this.style.fontSize="12pt"
        break
    }
}