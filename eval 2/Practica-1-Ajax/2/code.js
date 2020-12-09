

    if (window.XMLHttpRequest) { XMLHttpRequestObject = new XMLHttpRequest(); } 
    else if (window.ActiveXObject) { XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");} 
    document.getElementById('btn-btn').addEventListener("click",function(){
        bringHTML('login.html','preview')
    })
    
    document.getElementById('btn-card').addEventListener("click",function(){
        bringHTML('card.html','preview')
    })


function bringHTML(file,elementID){
    if(XMLHttpRequestObject) {
        let element = document.getElementById(elementID)
        while(element.children[0])element.removeChild(element.children[0])
        XMLHttpRequestObject.open("GET", file);
        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
                element.innerHTML = XMLHttpRequestObject.responseText; 
            }
        
        }
        XMLHttpRequestObject.send(null); 
    }
}
