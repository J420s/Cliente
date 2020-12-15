window.onload = function(){

    //Creamos elementos
    let p1 = create_elem('p',"<br> Hola soy el párrafo 1 ",{"id":"Párrafo 1"})
    let p2 = create_elem('p',"<br> Hola soy el párrafo 2 ",{"id":"Párrafo 2"})
    let p3 = create_elem('p',"<br> Hola soy el párrafo 3 ",{"id":"Párrafo 3"})

    let a1 = create_elem('a',"Google",{"href":"https://google.com"})
    let a2 = create_elem('a',"Yahoo",{"href":"https://yahoo.com"})
    let a3 = create_elem('a',"Bing",{"href":"https://bing.com"})
    let a4 = create_elem('a',"DuckDuckGo",{"href":"https://duckduckgo.com"})
    let a5 = create_elem('a',"Ask",{"href":"https://ask.com"})
    let a6 = create_elem('a',"Qwant",{"href":"https://qwant.com"})

    let buttonCount = create_elem('input',"",{"type":"button","onclick":"count()","value":"Contar enlaces"})
    let buttonShowAll = create_elem('input',"",{"type":"button","onclick":"showAll()","value":"Mostrar enlaces"})
    let buttonShowAllP = create_elem('input',"",{"type":"button","onclick":"showAllP()","value":"Mostrar enlaces por párrafo"})

    //Elemento 'dinámico' para mostrar resultados
    let alertDiv = create_elem('div',"",{"id":"alertDiv"})
    
    //Montamos la estructura
    p1.append(a1)
    p2.append(a2,a3)
    p3.append(a4,a5,a6)
    document.body.append(p1,p2,p3)
    document.body.append(buttonCount,buttonShowAll,buttonShowAllP,alertDiv)
}

function count(){
    clear("alertDiv")
    let links = document.getElementsByTagName('a').length
    alertDiv.innerHTML = ("Esta página tiene "+links+" enlaces")
}

function showAll(){
    clear("alertDiv")

    let links = document.getElementsByTagName('a')

    for(let key in links){
        if (links[key].href!=undefined){ 
            alertDiv.innerHTML += (links[key].href+"<br>")
        }
    }
}

function showAllP(){
    clear("alertDiv")

    let pars = document.getElementsByTagName('p')
    for (let key in pars){
        let links = pars[key].getElementsByTagName('a')
        alertDiv.innerHTML += ("<b>"+pars[key].id+"</b><br>")
        for (let key2 in links){
            if (links[key2].href!=undefined){
                alertDiv.innerHTML += (links[key2].href+"<br>")
            }
        }
    }
}

//Funcion para borrar el contenido de un elemento pasando por parametro el id del elemento
function clear(id){
    let elem = document.getElementById(id)
    while(elem.firstChild){elem.removeChild(elem.firstChild)}   
}

//Funcion que crea un elemento pasando por parametros tipo, innerHtml y atributos en forma de mapa
function create_elem(type,inner,attrs){
    new_elem = document.createElement(type)
    new_elem.innerHTML += (inner)
    setAttributes(new_elem,attrs)
    return new_elem
}

//Funcion para pasar atributos multiples en forma de mapa
function setAttributes(elem, attrs) {
    for(let key in attrs) {
      elem.setAttribute(key, attrs[key])
    }
}

