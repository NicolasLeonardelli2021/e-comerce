//let personasApi = require("../components/personas");
let authUser = require("../components/auth");
let productos= require("../components/productos");
let carrito = require("../components/carrito");
let orden = require("../components/orden");

module.exports = app =>{
    //personasApi(app);

    authUser(app);
    productos(app);
    carrito(app)
    orden(app)
    app.get("/", (req,res)=> res.redirect("/auth"));
    
}