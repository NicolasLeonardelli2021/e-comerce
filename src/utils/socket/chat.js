/* let {Server: HttpServer} = require('http')
let {Server:SocketIO} = require('socket.io');
let chatModel = require("../../models/mongoose/db_mongoose")
let moment = require("moment");
const { ConnectionAcquireTimeoutError } = require('sequelize/types');

module.exports = app =>{

    
    let http = new HttpServer(app);
    let io = new SocketIO(http);

    io.on("connection", socket =>{
        console.log("Nuevo cliente conectado: ", socket.id)
    
        socket.on("nuevoChat", data =>{
            datos={
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
} */