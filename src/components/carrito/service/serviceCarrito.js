
const carrito = require("../../../models/models/Carrito");
const item = require("../../../models/models/Item");
const producto = require("../../../models/models/Productos")

class Carrito{

async getCarrito(user){
    try {
        let productos =  await carrito.findAll({
          include: {
            model: item,
            include:{
                model: producto
            }
          },
          where:{
            id_usuario: `${user}`
          }
        });
        
        return productos
    } catch (error) {
        console.log(error)
    }
    }

    async agregarItemCarrito(id_producto,cantidad,id_carrito){
        try {
            let ingreso = await item.create({id_producto: `${id_producto}`, cantidad: `${cantidad}`, id_carrito: `${id_carrito}`})
            return ingreso;
        } catch (error) {
            console.log(error)
        }
    }

    async actualizar(id, cantidad){
        console.log(id);
        console.log(cantidad);
        try {
            let res = await item.update({cantidad: `${cantidad}`},{
                where: {
                    id: `${id}`
                }
            })
            return res;
        } catch (error) {
            console.log(error)
        }
    }

    async borrar(id){
        try {
            let res = await item.destroy({
                where: {
                    id: id
                }
            })
           return res;
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new Carrito()