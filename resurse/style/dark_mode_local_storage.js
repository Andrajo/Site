
window.onload=function () {
    var app = document.getElementsByTagName("BODY")[0];
    var x=document.getElementsByClassName("jocuri_pogg");
    var filtru=document.getElementById("filtrare");
    var filtre=document.getElementsByClassName("filtre");
    var butoane=document.getElementsByClassName("butoane_filtru");
    if (localStorage.lightMode === "dark") {
        app.setAttribute("light-mode", "dark");
        for(var i=0; i<x.length;i++){
            x[i].style.background="#0B3D40";
            x[i].style.color="#ced4e2";
        }
        soare.style.opacity=0;
        luna.style.opacity=1;
        filtru.style.backgroundColor='#0B3D40';
        filtre.style.color="#ced4e2";
        butoane.style.background="#167A80";
        butoane.style.color="#ced4e2";
    }
}
