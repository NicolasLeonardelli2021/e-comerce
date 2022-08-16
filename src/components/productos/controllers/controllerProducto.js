//let JWT = require("../../../utils/JWT");
let productoServices = require("../services/servicesProductos");

class Producto{

    async traerProductos(req,res,next){
        let name = req.session.nombre;
        let photo = req.session.imagen;
        console.log(photo);
        //console.log(req)
             try {         
             let array = await productoServices.getProductos();
            let cantCarrito = await productoServices.countCarrito(req.session.idCarrito);
            res.render("principal",{array,cantCarrito,name, photo}); 
            //res.json(array)
        } catch (error) {
            console.log("error")
        }
    }

    async productosCategoria(req,res,next){
        let {categoria} = req.params;
        let name = req.session.nombre;
        let photo = req.session.photo;

        try {
            let array = await productoServices.getProductosCategoria(categoria);
            let cantCarrito = await productoServices.countCarrito(req.session.ids);
            res.render("principal",{array,cantCarrito,name, photo});
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

    async buscar(req,res,next){
        let name = req.session.nombre;
        let photo = req.session.imagen;
        console.log("entro a la funcin")
        let {buscar} = req.body;
        console.log(buscar)
        try {
            let cantCarrito = await productoServices.countCarrito(req.session.idCarrito);
            let array = await productoServices.buscar(buscar);
            res.render("principal",{array,cantCarrito,name, photo})
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = new Producto();