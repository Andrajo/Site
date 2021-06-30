function add_class(produs,nume){
    var clase=produs.className.split(" ");
    var varianta=nume.split(" ");
    for(let el of varianta){
        if(clase.indexOf(el)==-1){
            produs.className+= " "+el;
        }
    }
}

function remove_class(produs,nume){
    var clase=produs.className.split(" ");
    var varianta=nume.split(" ");
    for(let el of varianta){
        while(clase.indexOf(el)>-1){
            clase.splice(clase.indexOf(el),1);
        }
    }
    produs.className=clase.join(" ");
}

function mod_filtrare(filtru){
    var produse=document.getElementsByClassName("filtre");
    if(filtru=="all") filtru="";
    for(i=0;i<produse.length;i++)
    {
        remove_class(produse[i],"show");
        if(produse[i].className.indexOf(filtru)>-1) add_class(produse[i],"show");
    }
}