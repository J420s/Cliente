window.onload = function () {
    xhr = false;
    xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP")
    xml_to_page('file.xml')
    //addEvent(button,"click",()=>{xml_to_page('file.xml')})
}

function xml_to_page(path) {
    if (xhr) {
        xhr.open("GET", path)
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                nodeDigger(xhr.responseXML)
            }
        }
        xhr.send(null);
    }
}

function xmlToCard(file) {
    /*for (const cd of Array.from(file.getElementsByTagName("CD"))) {
        cd.childNodes[0]
        bands.append(create_element("option","",title.childNodes[0].nodeValue.toString()))
    }*/

}

function nodeDigger(file) {
    let attrs = {}
    console.log("main", file.childNodes[0])

    for (const child of file.childNodes[0].childNodes) {
        console.log("child", child.tagName)
    }

    return attrs


    /*for (const child of node.childNodes) {
        if(!child.childNodes[0]){
            attrs[child.tagName] = child.nodeValue
        }
        else{
            for (const kid of child.childNodes) {
                if(!kid.childNodes[0]){
                    attrs[kid.tagName] = kid.nodeValue
                }else return "Too many nodes"
            }
        }
    }*/
}

function addEvent(element, event, foo) {
    addEventListener ? element.addEventListener(event, foo) : element.attachEvent("on" + event, foo)
}


function create_element(type, attrs, child) {
    new_elem = document.createElement(type)
    new_elem.append(child)
    setAttributes(new_elem, attrs)
    return new_elem
}

function setAttributes(elem, attrs) {
    for (var key in attrs) {
        elem.setAttribute(key, attrs[key]);
    }
}
