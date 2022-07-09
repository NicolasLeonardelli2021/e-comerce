let productoServices = require("../services/servicesProductos");

class Producto{

    async traerProductos(req,res,next){
                try {
            let array = await productoServices.getProductos();
            //console.log(productos);
            res.render("principal",{array});
            //res.json(array)
        } catch (error) {
            console.log(error)
        }
    }

    async productosCategoria(req,res,next){
        let {categoria} = req.params;
        try {
            let array = await productoServices.getProductosCategoria(categoria);
            res.render("principal",{array});
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