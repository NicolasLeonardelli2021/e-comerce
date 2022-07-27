const usuario = require("../../../models/models/User");
const carrito = require("../../../models/models/Carrito");
const item = require("../../../models/models/Item");
const producto = require("../../../models/models/Productos");
const orden = require("../../../models/models/Orden")

const serviceCarrito = require("../../carrito/service/serviceCarrito");
class Orden{

    async datosOrden(user){
        try {
            let datos =  await usuario.findAll({
                attributes:['name','last_name','email','phone'],
                include: {
                  model: carrito,
                  attributes:['id'],
                include: {
                model: item,
                attributes:['id','id_producto','cantidad'],
                include:{
                    model: producto,
                    attributes:['imagen','nombre','codigo','stock','precio']
                }
              }
            },
              where:{
                id: `${user}`
              }
            });
            let array = datos[0].Carrito.Items
            let total = await serviceCarrito.calculoTotal(array)

            let respuesta = {
              fecha: new Date(),
              nombre: datos[0].name,
              apellido: datos[0].last_name,
              email: datos[0].email,
              telefono: datos[0].phone,
              items: datos[0].Carrito.Items,
              total: total
              }
            
            return respuesta;
        } catch (error) {
            console.log(error)
        }
    }

    async generar(idUser,idCarrito){
      try {
        let generar = await orden.create({id_user: `${idUser}`});
        let idOrden = generar.id
        let borrarItemsCarrito = await item.update({id_carrito: null, id_orden: `${idOrden}`},{
          where:{
            id_carrito: `${idCarrito}`
          }
        })
      } catch (error) {
        console.log(error)
      }
    }

}

module.exports = new Orden()