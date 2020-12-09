window.onload = function() {
    xhr = false;
    xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP")
    xml_to_page('file.xml','ARTIST') 
    //Cambiando el parametro "tagName" cambia el factor de busqueda
    //ej: xml_to_page('file.xml','TITLE') mostraría la información por los titulos de los albumes
}

//Abre el archivo, establece las opciones del form y les añade eventos
function xml_to_page(path,tagName) {
    if (xhr) {
        xhr.open("GET", path)
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                setInputOption(xhr.responseXML.getElementsByTagName(tagName))
                
                bands.addEventListener("change",function(){
                    printInfo(xhr.responseXML,tagName,this.value)
                })
            }
        }   
        xhr.send(null);
    }
}

//Establece las opciones del form basandose en el tagname pasado por parámetro
function setInputOption(tagName){
    for (const option of tagName) {
        bands.append(create_element("option","",option.textContent))
    }
}

//Crea un elemento por cada clave de getProperties con dicha clave y su valor
//y lo añade al elemento del html elegido. En este caso '#attributes'
function printInfo(file,tagName,value){ 
    let container = document.getElementById('attributes')
    while(container.firstChild){container.removeChild(container.firstChild)}

    matrix = getProperties(file,tagName,value)
    for (const [key,value] of matrix.entries()) {
        console.log(key)
        if(key !== tagName){
            element = create_element('div',{"class":"list-group-item"},document.createTextNode(key+" :"+value))
            container.append(element)
        }
    }
}

//Devuelve un map con los atributos del cd con un texto = "value"
//ej: Para tagName = ARTIST; y value = Michael Jackson; 
//    devolverá un map con todos los elementos "sibling" de <ARTIST> 
//    del cd que contenga el artista Michael Jackson 
function getProperties(file,tagName,value) {
    let attrs = new Map()
    let op = file.getElementsByTagName(tagName)
    for (const child of op) {
        if (child.textContent === value) {
            let parent = child.parentNode
            for (index = 0  ; index < parent.childNodes.length; index++) {
                if (parent.childNodes[index].nodeType != 3) {
                    attrs.set(parent.childNodes[index].tagName,parent.childNodes[index].textContent)
                }
            }
        }
    }
    return attrs
}

function create_element(tag,attrs,child) {
    new_elem = document.createElement(tag)
    setAttributes(new_elem,attrs)
    new_elem.append(child)
    return new_elem
}

function setAttributes(elem, attrs) {
    for(var key in attrs) {
      elem.setAttribute(key, attrs[key]);
    }
}
