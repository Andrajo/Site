/*window.onload=function (){
    document.getElementById("dark_mode").onclick=function(){
        if(document.body.className==="dark") {
            document.body.className="light";
        }
        else {
            document.body.className = "dark";
        }
    }
}*/

function toggle_light_mode() {
    var app = document.getElementsByTagName("BODY")[0];
    var x=document.getElementsByClassName("jocuri_pogg");
    var soare=document.getElementById("soare");
    var luna=document.getElementById("luna");
    var filtru=document.getElementById("filtrare");
    var filtre=document.getElementsByClassName("filtre");
    var butoane=document.getElementsByClassName("butoane_filtru");
    if (localStorage.lightMode === "dark") {
        localStorage.lightMode = "light";
        app.setAttribute("light-mode", "light");
        for(var i=0; i<x.length;i++){
            x[i].style.background="#1C9FA6";
            x[i].style.color="#0B3D40";
        }
        soare.style.opacity=1;
        luna.style.opacity=0;
        filtru.style.backgroundColor='#1C9FA6';
        filtru.style.borderColor="#0B3D40";
        filtre.style.color="#0B3D40";
        butoane.style.backgroundColor="#23C4CC";
    } else {
        localStorage.lightMode = "dark";
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