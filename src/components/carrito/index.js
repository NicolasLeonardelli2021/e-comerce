let {Router} = require("express");
let carritoController = require("./controller/controllerCarrito");

module.exports = app =>{
    let router = new Router();
    app.use("/carrito", router);

    router.get("/", carritoController.traerProductos);
}