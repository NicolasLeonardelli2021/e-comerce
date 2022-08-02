//let personasApi = require("../components/personas");
let authUser = require("../components/auth");
let productos= require("../components/productos");
let carrito = require("../components/carrito");
let orden = require("../components/orden");
let chat = require("../components/chat")

module.exports = app =>{
    //personasApi(app);

    authUser(app);
    productos(app);
    carrito(app)
    orden(app)
    chat(app);
    app.get("/", (req,res)=> {
            if(req.session.nombre){
                res.redirect("/productos")
            }else{
                res.redirect("/auth");
            }
        } )
    }
