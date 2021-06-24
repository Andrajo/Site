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
    if (localStorage.lightMode === "dark") {
        localStorage.lightMode = "light";
        app.setAttribute("light-mode", "light");
        for(var i=0; i<x.length;i++){
            x[i].style.background="#1C9FA6";
            x[i].style.color="#0B3D40";
        }

    } else {
        localStorage.lightMode = "dark";
        app.setAttribute("light-mode", "dark");
        for(var i=0; i<x.length;i++){
            x[i].style.background="#0B3D40";
            x[i].style.color="#ced4e2";
        }
    }
}