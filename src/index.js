
const express = require('express');
const cors = require('cors');
const {config} = require('./config')
let serverRoutes = require("./routes");
let path = require("path");

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT || config.port;
        this.settings();
        this.views();
        this.middleware();
        this.routes();
    }

    settings(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));
        this.app.use(express.static("public"));
    }

    views(){
        this.app.set("views",path.join( __dirname,"./views"));
        this.app.set("view engine", "ejs");  
    }

    middleware(){
        this.app.use(cors('*'));
    }

    routes(){
        serverRoutes(this.app);
    }

    middlewareError(){
    }

    init(){
        this.app.listen(this.port, ()=>{
            console.log(`Escuchando en http://localhost:${this.port}`)
        })
    }
}

module.exports = new Server();
