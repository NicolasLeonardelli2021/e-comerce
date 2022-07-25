const { render } = require("ejs");
let serviceOrden = require("../services");

class Orden{

    async vistaOrden(req,res,next){
        //let idUser = req.session.idUser;
        let idCarrito = req.session.idCarrito;
        let name = req.session.nombre;
        let photo = req.session.photo
        let cantCarrito = 2

        res.render('orden',{name,photo,cantCarrito})
    }
}

module.exports = new Orden;