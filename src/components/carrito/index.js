let {Router} = require("express");
let carritoController = require("./controller/controllerCarrito");

module.exports = app =>{
    let router = new Router();
    app.use("/carrito", router);

    router.get("/",isLogin, carritoController.traerProductos);
    router.put("/:id", isLogin, carritoController.actualizar)
    router.delete("/:id", isLogin, carritoController.borrar)
}

let isLogin = (req,res,next)=>{
    if(req.session.nombre){
        next();
    }else{
        let text = "Vuelve a iniciar Session"
        res.render('alert',{text});
    }
} 