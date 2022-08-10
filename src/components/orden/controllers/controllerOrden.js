const { render } = require("ejs");
let serviceOrden = require("../services/serviceOrden");

class Orden{

    async vistaOrden(req,res,next){
        let idUser = req.session.idUser;
        let name = req.session.nombre;
        let photo = req.session.imagen
 
        try {
            let datos = await serviceOrden.datosOrden(idUser);
            let cantCarrito = await serviceOrden.countCarrito(req.session.ids);
            res.render('orden',{name,photo,cantCarrito,datos})

        } catch (error) {
            console.log(error)
        }

    }

    async generar(req,res,next){
        let idUser = req.session.idUser;
        let idCarrito = req.session.idCarrito;
        let name = req.session.nombre;
        let photo = req.session.imagen
        try {
            let cantCarrito = await serviceOrden.countCarrito(req.session.ids);
            let datos = await serviceOrden.generar(idUser,idCarrito);
            res.render('alert2',{name,photo,cantCarrito});
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new Orden();