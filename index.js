const express=require('express');
const path= require("path");
const fs=require('fs');
const sharp=require('sharp');
const {exec} = require("child_process");
const {Client} = require("pg");

const application=express(); //serverul

const client = new Client({
    host: "localhost",
    user: "postgres",
    password: "Cobra1einactiune",
    database: "proiecttw",
    port:8080
})

application.set("view engine","ejs");
application.use("/resurse", express.static(path.join(__dirname,"resurse")));


client.connect()

const results= client.query("select joc.id_joc, joc.pret from joc where joc.pret=60", function (err,res){
    //console.log(err, res);
    console.log(res.rows);
});

//console.log(results);

function verificaImagini(){
    var textFisier=fs.readFileSync("resurse/json/galerie.json")
    var jsi=JSON.parse(textFisier);
    var caleGalerie=jsi.cale_galerie;
    let vectorCai=[]
    var position=0;
    for(let im of jsi.imagini){
        position++;
        var imVeche= path.join(caleGalerie, im.cale_fisier);
        var ext= path.extname(im.cale_fisier);
        var numeFisier= path.basename(im.cale_fisier,ext)
        let imNoua=path.join(caleGalerie+"/mic/",numeFisier+"-mic"+".webp");
        let imNouaMedie=path.join(caleGalerie+"/mediu/",numeFisier+"-mediu"+".webp");
        let imNouaMare=path.join(caleGalerie+"/mare/",numeFisier+"-mare"+".webp");

        if(!fs.existsSync(imNoua))
            sharp(imVeche)
                .resize(170,113)
                .toFile(imNoua,function (err){
                    if(err)
                        console.log("eroare conversie",imVeche,"->",imNoua,err);
                });

        if(!fs.existsSync(imNouaMedie))
            sharp(imVeche)
                .resize(300,169)
                .toFile(imNouaMedie,function (err){
                    if(err)
                        console.log("eroare conversie",imVeche,"->",imNouaMedie,err);
                });

        if(!fs.existsSync(imNouaMare))
            sharp(imVeche)
                .resize(400,225)
                .toFile(imNouaMare,function (err){
                    if(err)
                        console.log("eroare conversie",imVeche,"->",imNouaMare,err);
                });

        vectorCai.push({mare:"/"+imNouaMare,mediu:"/"+imNouaMedie,mic:"/"+imNoua,titlu:im.titlu,luni:im.luni,alt:im.alt,text_descriere:im.text_descriere,position:position});
    }
    console.log("mere2");
    return vectorCai;

}



application.get(["/","/index"], function(req,res){

    let vectorCai=verificaImagini()

    res.render("pagini/index.ejs",{imagini:vectorCai,ip:req.connection.remoteAddress});
});

application.get(["/jocuri"], function(req,res){

    let vectorCai=verificaImagini()

    res.render("pagini/jocuri.ejs",{imagini:vectorCai});
});


/*
application.get("/data", function(req,res){
    res.setHeader("Content-Type","text/html");
    res.write("<!DOCTYPE html><html><head><meta charset=\"utf-8\"></head><body>"+new Date());
});
*/


application.get("/Account",function(req,res){
    res.render("pagini/Account.ejs",{ip:req.connection.remoteAddress});
});


application.get("/GalerieAnimata",function(req,res){

    let vectorCai=verificaImagini()

    res.render("pagini/GalerieAnimata.ejs",{imagini:vectorCai});
});


application.get("*/galerie-animata.css",function(req,res){

    res.setHeader("Content-Type","text/css");
    console.log("KEK");
    exec("sass resurse/style/animated_gallery.sass temp/galerie-animata.css",(error, stderr, stdout) => {
        if (error) {
            console.log(`error: ${error.message}`);
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
        }
        console.log(`stdout: ${stdout}`);
        res.sendFile(path.join(__dirname,"temp/galerie-animata.css"));
    });
});


application.get("/galerie",function(req,res){
    let vectorCai=verificaImagini()
    res.render("pagini/galerie",{imagini:vectorCai})
});

application.get("*/galerie.json",function(req,res){
    res.status(403).render("pagini/ErrorPageForbidden")
});



application.get("/galerie",function(){
    verificaImagini();
    res.render("pagini/galerie")
});



application.get("/*",function(req,res){
    console.log(req.url)
    res.render("pagini"+req.url,function (err,rezultatRender){
        if(err){
            if(err.message.includes("Failed to lookup view")){
                res.status(404).render("pagini/ErrorPage")
            }
            else{
                throw err;
            }
        }
        else{
            res.send(rezultatRender);
        }
    });
});



application.listen(800);
console.log("mere");
