let carritoService = require("../service/serviceCarrito");

class Carrito{

    async traerProductos(req,res,next){
        let {idUsuario} = req.body;
        let cantCarrito = await carritoService.countCarrito(req.session.ids);

        try {
    let array = await carritoService.getCarrito(req.session.ids);
    res.render("carrito",{array,cantCarrito});
} catch (error) {
    console.log(error)
}
}

async agregarItemCarrito(req,res,next){
    let {idProducto} = req.body;
    let {cantidad} = req.body;
    let idCarrito = 1;
    console.log(idProducto,cantidad)
    try {
        let respuesta = await carritoService.agregarItemCarrito(idProducto,cantidad,idCarrito);
        if(respuesta != ""){
            res.redirect('./')        
        }
       
    } catch (error) {
        console.log(error)
    }
}

async actualizar(req,res,next){
    let {id} = req.params;
    let {cantidad} = req.body
    console.log(id,cantidad)
    try {
        let respuesta = await carritoService.actualizar(id,cantidad)
        res.redirect('/');
        } catch (error) {
        console.log(error)
    }
}
async borrar(req,res,next){
    let {id} = req.params;
    try {
        let respuesta = await carritoService.borrar(id);
        res.redirect('/')
    } catch (error) {
        console.log(error)
    }
}
}

module.exports = new Carrito();