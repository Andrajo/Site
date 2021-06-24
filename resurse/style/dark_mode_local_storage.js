
window.onload=function () {
    var app = document.getElementsByTagName("BODY")[0];
    if (localStorage.lightMode === "dark") {
        app.setAttribute("light-mode", "dark");
    }
}
