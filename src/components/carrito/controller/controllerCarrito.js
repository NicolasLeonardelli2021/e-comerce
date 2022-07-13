let carritoService = require("../service/serviceCarrito");

class Carrito{

    async traerProductos(req,res,next){
        try {
    let array = await productoServices.getProductos();
    //console.log(productos);
    //res.render("principal",{array});
    res.json(array)
} catch (error) {
    console.log(error)
}
}
}