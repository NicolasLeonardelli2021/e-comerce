const usuario = require("../../../models/models/User");
const carrito = require("../../../models/models/Carrito");
const item = require("../../../models/models/Item");
const producto = require("../../../models/models/Productos");
const orden = require("../../../models/models/Orden")
const email = require("../../../utils/nodemailer")

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

    // Agraga una orden, vacia el carrito, descuenta stock y envia el email de la Orden. 
    async generar(idUser,idCarrito){
      try {
          let leerItems = await item.findAll({
            attributes: ['id_producto','cantidad'],
            include: {
              model: producto,
              attributes: ['stock']
            },
            where: {
              id_carrito: `${idCarrito}`
            }
          });
          console.log(leerItems);
        
          for (const prod of leerItems) {
            let restaStock = prod.Producto.stock - prod.cantidad
            await producto.update({stock: restaStock},{
              where: {
                id: prod.id_producto
          }})
          } 

          let generar = await orden.create({id_user: `${idUser}`});
        let idOrden = generar.id
        let borrarItemsCarrito = await item.update({id_carrito: null, id_orden: `${idOrden}`},{
          where:{
            id_carrito: `${idCarrito}`
          }
        })

        let templates = await this.armarTemplate(idOrden);
        let titulo = "Orden de compra"
        email.enviar(titulo,templates);
        
      return borrarItemsCarrito;
      } catch (error) {
        console.log(error)
      }
    }


    // Traer datos de la orden
    async getOrden( numOrden){
      try {
        let datosOrden =  await orden.findAll({
              attributes:['id','id_user','fechaHora'],
            include: {
            model: item,
            attributes:['id','id_producto','cantidad'],
            include:{
                model: producto,
                attributes:['imagen','nombre','codigo','stock','precio']
          }
        },
          where:{
            id: `${numOrden}`, 
          }
        });

        let idUser = await datosOrden[0].id_user;

        let datosUser = await usuario.findAll({
          attributes:['name','last_name','email','phone'],
          where: {
            id: idUser
          }
        })

         let array = datosOrden[0].Items
        let total = await serviceCarrito.calculoTotal(array) 

         let respuesta = {
          orden: datosOrden[0].id,
          fecha: datosOrden[0].fechaHora,
          nombre: datosUser[0].name,
          apellido: datosUser[0].last_name,
          email: datosUser[0].email,
          telefono: datosUser[0].phone,
          items: datosOrden[0].Items,
          total: total
          } 
        return respuesta;
    } catch (error) {
        console.log(error)
      }
    }


    // crear templates para Email

    async armarTemplate(idOrden){
      let templates = "";

      let datos = await this.getOrden(idOrden);
      templates = templates + `
      <div> <h1>NUEVA ORDEN DE COMPRA </h1></div>
      <hr>
      <div>
      <h3> DATOS DEL USUARIO </h3>
      <span><b>Nº ORDEN: </b></span> <span> ${datos.orden}</span> <br>
      <span><b>FECHA Y HORA: </b></span> <span> ${datos.fecha}</span> <br>
      <span><b>NOMBRE Y APELLIDO</b></span> <span> ${datos.nombre + ' ' + datos.apellido}</span> <br>
      <span><b>EMAIL</b></span> <span> ${datos.email}</span> <br>
      <span><b>TEL. Nº</b></span> <span> ${datos.telefono}</span>
    </div>
    <hr>
    <div>
    <h3> PRODUCTOS </h3>
    <hl>
    `
      
      for (const items of datos.items) {
        templates = templates +
        `
          <li>
              ${items.Producto.codigo + " --- " + items.Producto.nombre + " --- " +"$" + items.Producto.precio + " --- " + "X"+ items.cantidad + " --->" + "$" + items.Producto.precio*items.cantidad}
          </li>
         `
        
      }
      
      templates = templates + `</ul></div>
                              <div>
                              <hr> 
                              <h3>TOTAL PAGO </h3>
                              <p> TOTAL: ${datos.total}</p>
                              </div>`
      return templates
    }

    async countCarrito(idCarrito){
      try {
          let res = serviceCarrito.countCarrito(idCarrito);
          return res;
      } catch (error) {
          console.log(error)
      }
  }

}

module.exports = new Orden()