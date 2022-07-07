let productoServices = require("../services/servicesProductos");

class Producto{

    async traerProductos(req,res,next){
                try {
            let productos = await productoServices.getProductos();
            res.json(productos);
        } catch (error) {
            console.log(error)
        }
    }

    async productosCategoria(req,res,next){
        let {categoria} = req.params;
        try {
            let productos = await productoServices.getProductosCategoria(categoria);
            res.json(productos);
        } catch (error) {
            console.log(error)
        }
    }

    async productosId(req,res,next){
        let {id} = req.params;
        try {
            let producto = await productoServices.getProductosId(id);
            res.json(producto);
        } catch (error) {
            console.log(error)
        }
    }

    async ingresarProducto(req,res){
        let datos = req.body
        try {
            let producto = await productoServices.ingrasoProducto(datos);
            if(producto != ""){
                console.log("Producto ingresado correctamente")
            }else{
                console.log("Hubo un error")
            }
        } catch (error) {
            console.log(error)
        }

    }

    
}

module.exports = new Producto();