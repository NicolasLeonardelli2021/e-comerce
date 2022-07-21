let JWT = require("../../../utils/JWT");
let productoServices = require("../services/servicesProductos");

class Producto{

    async traerProductos(req,res,next){
        //console.log(req)
             try {         
             console.log(req.session.ids)
             let array = await productoServices.getProductos();
            let cantCarrito = await productoServices.countCarrito(req.session.ids);
            res.render("principal",{array,cantCarrito}); 
            //res.json(array)
        } catch (error) {
            console.log("error")
        }
    }

    async productosCategoria(req,res,next){
        let {categoria} = req.params;

        try {
            let array = await productoServices.getProductosCategoria(categoria);
            let cantCarrito = await productoServices.countCarrito(req.session.ids);
            res.render("principal",{array,cantCarrito});
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

    async auth(req, res, next) {
        const authHeader = req.headers.authorization ;

        console.log(authHeader);

        if (!authHeader ) {
         return res.status(401).json({
         error: 'not authenticated'
         });
         }
        const token = authHeader .split(' ')[1];
        jwt.verify(token, (err, decoded) => {
         if (err) {
         return res.status(403).json({
         error: 'not authorized'
         });
         }
         req.user = decoded.data;
         next();
         });
        }


}

module.exports = new Producto();