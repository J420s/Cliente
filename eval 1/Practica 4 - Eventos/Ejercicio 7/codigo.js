window.onload = function() {
    alert("Página que contiene un reloj")
    setInterval(showWatch, 1000);
}
window.onbeforeunload(alert("Página cancelada"))

function showWatch() {
    let date = new Date();
    let hour = date.getHours();
    var mins = date.getMinutes();
    var secs = date.getSeconds();
  
    if(hour < 10) { hour = '0' + hour; }
    if(mins < 10) { mins = '0' + mins; }
    if(secs < 10) { secs = '0' + secs; }
  
    document.getElementById("watch").innerHTML = hour+':'+mins+':'+secs;
}
  
  