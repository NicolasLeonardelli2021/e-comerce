let {Router, text} = require("express");
const controllerCarrito = require("../carrito/controller/controllerCarrito");
let productoController = require("./controllers/controllerProducto");

module.exports = app=>{
    let router = new Router();
    app.use("/productos",router);
    router.get("/",isLogin,productoController.traerProductos);
    router.get("/categoria/:categoria",isLogin,productoController.productosCategoria);
    router.get("/:id",isLogin,productoController.productosId);
    //router.post("/productos",productoController.ingresarProducto);
    router.post("/ing",isLogin,controllerCarrito.agregarItemCarrito)

    //router.put("/productos",productoController.actualizarProducto);
    //router.delete("/productos",productoController.borrarProducto);
}

let isLogin = (req,res,next)=>{
    if(req.session.nombre){
        next();
    }else{
        let text = "Vuelve a iniciar Session"
        res.render('alert',{text});
    }
} 

