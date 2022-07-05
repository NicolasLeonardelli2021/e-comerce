
const express = require('express');
const cors = require('cors');
const {config} = require('./config')
let serverRoutes = require("./routes");
let path = require("path");
const multer = require('multer');
const uuid = require('uuid/v4');

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
        const storage = multer.diskStorage({
            destination: path.join(__dirname, 'public/uploads'),
            filename: (req, file, cb,filename) => {
            cb(null, uuid() + path.extname(file.originalname));
            }
        });
        
        this.app.use(multer({
            storage,
            dest: path.join(__dirname, 'public/uploads'),
            /* fileFilter: function (req, file, cb) {
        
                var filetypes = /jpeg|jpg|png|gif/;
                var mimetype = filetypes.test(file.mimetype);
                var extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        
                if (mimetype && extname) {
                    return cb(null, true);
                }
                cb("Error: File upload only supports the following filetypes - " + filetypes);
            }, */
            //limits: {fileSize: 1000000},
        }).single('image'));
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
