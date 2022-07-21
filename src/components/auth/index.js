let { Router } = require("express");
let personasController = require("./controllers/personasController");

module.exports = app =>{
    let router = new Router();
    app.use("/auth", router);
    router.post("/login",personasController.login)
    router.get("/", personasController.renderPag);
    router.post("/register", personasController.verifi);
    router.post("/upload",personasController.upload);
    router.get("/registro", personasController.renderReg);
    router.get("/usuarios",personasController.usuarios);
    router.get("/logout", personasController.salir)
    //router.get("/register", personasController.get);

 
}
 