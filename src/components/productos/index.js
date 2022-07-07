let {Router} = require("express");
let productoController = require("./controllers/controllerProducto");

module.exports = app=>{
    let router = new Router();
    app.use("/productos",router);
    router.get("/",productoController.traerProductos);
    router.get("/categoria/:categoria",productoController.productosCategoria);
    router.get("/:id",productoController.productosId);
    router.post("/productos",productoController.ingresarProducto);
    //router.put("/productos",productoController.actualizarProducto);
    //router.delete("/productos",productoController.borrarProducto);

}