const { json } = require('express');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",(req,res,next)=>{
    res-json({response:true})
})

app.listen(PORT, ()=>{
    console.log(`Escuchando en http://localhost:${PORT}`)
})