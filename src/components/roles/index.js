let { Router } = require("express");
let rolesController = require("./controllers/rolesController");
 
module.exports = app =>{
    let router = new Router();
    app.use("/roles", router);
    router.get("/", rolesController.getAll);
    
}