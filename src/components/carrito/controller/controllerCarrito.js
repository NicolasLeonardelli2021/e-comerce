let carritoService = require("../service/serviceCarrito");

class Carrito{

    async traerProductos(req,res,next){
        let {idCarrito} = req.body
        try {
    let array = await carritoService.getCarrito(idCarrito);
    //console.log(productos);
    //res.render("principal",{array});
    res.json(array)
} catch (error) {
    console.log(error)
}
}

async agregarItemCarrito(req,res,next){
    let {idProducto} = req.body;
    let {cantidad} = req.body;
    let {idCarrito} = req.body;
    try {
        let respuesta = await carritoService.agregarItemCarrito(idProducto,cantidad,idCarrito);
        if(respuesta != ""){
            res.send("producto ingresado correctamente")
        }
       
    } catch (error) {
        console.log(error)
    }
}

async actualizar(req,res,next){
    let {id} = req.params;
    let {cantidad} = req.body

    try {
        let respuesta = await carritoService.actualizar(id,cantidad)
        if(respuesta != ""){
            res.json(respuesta)
        }
    } catch (error) {
        console.log(error)
    }
}
async borrar(req,res,next){
    let {id} = req.params;
    try {
        let respuesta = await carritoService.borrar(id);
        res.json(respuesta);
    } catch (error) {
        console.log(error)
    }
}
}



module.exports = new Carrito();