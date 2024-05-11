const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();

app.set("view engine","ejs")
app.set("views", path.join(__dirname,'views'));

app.get('/', (req,res)=>{
    res.render('index',{nombre:"Ander"});
});

app.get("/home",(request,response)=>{
    response.send("Hola como estan") 
})

app.listen(9000, ()=>{
    console.log(
    "Servidor escuchando en el puerto 9000");
});