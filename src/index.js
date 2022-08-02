
const express = require('express');
const cors = require('cors');
const {config} = require('./config')
let serverRoutes = require("./routes");
let path = require("path");
const multer = require('multer');
const uuid = require('uuid/v4');
let {Server: HttpServer} = require('http')
let {Server:SocketIO} = require('socket.io');
require('./models/asociations')
let moment = require("moment");
const session =require("express-session");
let chatModel = require("./models/mongoose/db_mongoose")

//const cookieParser = require('cookie-parser')
//let File_store = require("session-file-store")(express_session)


class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT || config.port;
        this.http = HttpServer(this.app)
        this.settings();
        this.views();
        this.middleware();
        this.routes();
    }

    settings(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));
        this.app.use(express.static(__dirname + "/public"));
         //this.app.use(cookieParser())
     }

    views(){
        this.app.set("views",path.join( __dirname,"./views"));
        this.app.set("view engine", "ejs");  
    }

    middleware(){
        this.app.use(cors('*'));
        const storage = multer.diskStorage({
            destination: path.join(__dirname, 'public/uploadsUser'),
            filename: (req, file, cb,filename) => {
            cb(null, uuid() + path.extname(file.originalname));
            }
        });
        
        this.app.use(multer({
            storage,
            dest: path.join(__dirname, 'public/uploadsUser'),
             fileFilter: function (req, file, cb) {
        
                var filetypes = /jpeg|jpg|png|gif/;
                var mimetype = filetypes.test(file.mimetype);
                var extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        
                if (mimetype && extname) {
                    return cb(null, true);
                }
                cb("Error: File upload only supports the following filetypes - " + filetypes);
            }, 
            //limits: {fileSize: 1000000},
        }).single('image'));
    

     this.app.use(session({
        secret: 'secret',
        resave: true,
        saveUninitialized:true,
    })); 

    // Socket 
    let io = new SocketIO(this.http);
    io.on("connection", socket =>{
        console.log("Nuevo cliente conectado: ", socket.id)

        socket.emit("iniciarChat");

    socket.on("nuevoChat",data =>{
        let datos={
            ...data,
            hora: moment().format("YYYY-MM-DD HH:mm:ss")
            }
            const mensajeSave = new chatModel(datos);
            mensajeSave.save()
                .then(()=>console.log("mensaje insertado"))
                .catch((err)=> {console.log(err); throw err});

            io.sockets.emit("mensaje",datos);
       
        })
    })
}

    routes(){
        serverRoutes(this.app);
    }

    middlewareError(){
    }

    init(){
        this.http.listen(this.port, ()=>{
            console.log(`Escuchando en http://localhost:${this.port}`)
        })
    }
}


module.exports = new Server();
