//let personasApi = require("../components/personas");
let authUser = require("../components/auth");
let productos= require("../components/productos");

module.exports = app =>{
    //personasApi(app);
    authUser(app);
    productos(app);
    app.get("/", (req,res)=> res.redirect("auth"));
    
}