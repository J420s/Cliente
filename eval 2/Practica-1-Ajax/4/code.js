window.onload = function() {
    xhr = false;
    xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP")
    xml_to_page('file.xml')
        //addEvent(button,"click",()=>{xml_to_page('file.xml')})
    bands = document.getElementById('bands')
    addEvent(bands, "change")
}

function xml_to_page(path) {
    if (xhr) {
        xhr.open("GET", path)
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                nodeDigger(xhr.responseXML, "CD", "Red")
                    //console.log(xhr.responseXML.getElementsByTagName("CD"))
            }
        }
        xhr.send(null);
    }
}

function nodeDigger(file, wraper, value) {

    let attrs = {}
    let t = file.getElementsByTagName("TITLE")
    for (const child of t) {
        if (child.textContent === value) {
            let parent = child.parentNode
            for (index = 1; index < parent.childNodes.length; index++) {
                if (parent.childNodes[index].nodeType != 3) {
                    attrs[parent.childNodes[index].tagName] = parent.childNodes[index].textContent
                }

            }
        }
    }
    console.log(attrs)
}

/*for (const cd of Array.from(file.getElementsByTagName("CD"))) {
        cd.childNodes[0]
        bands.append(create_element("option","",title.childNodes[0].nodeValue.toString()))
    }*/


function getNextSibling(node) {
    let x = node.nextSibling
    while (x.nodeType != 1) {
        x = x.nextSibling
    }
    return x
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