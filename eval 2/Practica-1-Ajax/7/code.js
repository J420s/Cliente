window.onload = function() {
    document.getElementById('myform').addEventListener("submit", function(e) {
        console.log(this['myinput'].value)
        e.preventDefault();
    })
}