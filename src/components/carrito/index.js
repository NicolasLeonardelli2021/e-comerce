let {Router} = require("express");
let carritoController = require("./controller/controllerCarrito");

module.exports = app =>{
    let router = new Router();
    app.use("/carrito", router);

    router.get("/", carritoController.traerProductos);
    router.post("/entry",carritoController.agregarItemCarrito)
    router.put("/update/:id", carritoController.actualizar)
    router.delete("/delete/:id",carritoController.borrar)
}