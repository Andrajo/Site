
window.onload=function () {
    var app = document.getElementsByTagName("BODY")[0];
    var x=document.getElementsByClassName("jocuri_pogg");
    if (localStorage.lightMode === "dark") {
        app.setAttribute("light-mode", "dark");
        for(var i=0; i<x.length;i++){
            x[i].style.background="#0B3D40";
            x[i].style.color="#ced4e2";
        }
    }
}
