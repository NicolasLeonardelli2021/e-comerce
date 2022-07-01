let { Router } = require("express");
let personasController = require("./controllers/personasController");

module.exports = app =>{
    let router = new Router();
    app.use("/persona", router);
    router.get("/", personasController.getAll);
    router.post("/", personasController.create);
    router.get("/data-json", personasController.getJson);
    router.get("/singleton", personasController.getSingleton);
}