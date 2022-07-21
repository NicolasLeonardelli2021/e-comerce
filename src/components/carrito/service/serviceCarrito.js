const carrito = require("../../../models/models/Carrito");
const item = require("../../../models/models/Item");
const producto = require("../../../models/models/Productos")
const sequelize = require("sequelize");

class Carrito{

async getCarrito(user){
    try {
        let productos =  await carrito.findAll({
            attributes:['fechaHora'], //'id_producto','cantidad', 'imagen','nombre','codigo','stock','precio'], 
          include: {
            model: item,
            attributes:['id','id_producto','cantidad'],
            include:{
                model: producto,
                attributes:['imagen','nombre','codigo','stock','precio']
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

    async countCarrito(user){
        try {
            let res = await item.count({
                where:{
                    id_carrito: `${user}`
                }
            })
            return res; 
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new Carrito()