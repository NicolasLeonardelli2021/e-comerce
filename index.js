const { json } = require('express');
const express = require('express');
const cors = require('cors');
const {config} = require('./config')
const app = express();

if(config.NODE_ENV == 'development') app.use(cors())
const PORT = process.env.PORT || config.port
const modo = config.modo;
console.log(modo); 

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/",(req,res,next)=>{
    res-json({response:true})
})

app.listen(PORT, ()=>{
    console.log(`Escuchando en http://localhost:${PORT}`)
})