const { render } = require("ejs");
let serviceOrden = require("../services/serviceOrden");

class Orden{

    async vistaOrden(req,res,next){
        let idUser = req.session.idUser;
        let name = req.session.nombre;
        let photo = req.session.photo
        let cantCarrito = 2

        try {
            let datos = await serviceOrden.datosOrden(idUser);
            console.log(datos.items[0].cantidad)
            res.render('orden',{name,photo,cantCarrito,datos})

        } catch (error) {
            console.log(error)
        }

    }

    async generar(req,res,next){
        let idUser = req.session.idUser;
        let idCarrito = req.session.idCarrito;
        try {
            let datos = await serviceOrden.generar(idUser,idCarrito);
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new Orden();