const {Productos} = require("../../../models");
const {Categoria} = require("../../../models");

class Producto{
    async getProductos(){
        try {
            let productos =  await Productos.findAll();
            return productos
        } catch (error) {
            console.log(error)
        }
    }

    async getProductosCategoria(categoria){
        try {
            const idCategoria = await Categoria.findAll({
                attributes: ['id'],
                where: {
                    nombre: `${categoria}`
                }
            })
            let productos = await Productos.findAll({
                where: {
                    id_categoria: `${idCategoria[0].dataValues.id}`
                }
            }) 
            return productos;
        } catch (error) {
            
        }
      
    }

    async getProductosId(id){
        try {
            let producto = await Productos.findAll({
                where: {
                    id: `${id}`
                }
            }) 
            return producto;
        } catch (error) {
            
        }
      
    }

    async ingresoProducto(datos){
        try {
            let ingreso = await Productos.create({nombre: `${datos.nombre}`,precio: `${Number(datos.precio)}`, descripcion: `${datos.descripcion}`, 
            id_categoria: `${Number(datos.categoria)}`, imagen: `${datos.imagen}`});
            return ingreso;
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new Producto();