const Productos = require("../../../models/models/Productos")
const Categoria = require("../../../models/models/Categoria")
const carrito = require("../../../models/models/Carrito");
const User = require("../../../models/models/User")
const Rol = require("../../../models/models/Rol")
const email = require("../../../utils/nodemailer")
const bcryptjs = require("bcryptjs");
let datosUser ="";
class Personas {
    async login(email,password){

        try {
            let personas = await User.findAll({
                where: {
                    email: `${email}`
                    //password: `${password}`
                  }
            });
            if(personas){
                let compare = bcryptjs.compareSync(password,personas[0].password);
                if(compare){
                    return personas;
                }
            }

        } catch (error) {
            console.log(error)
        }
    }
    async verifi(datos){
        let data = datos;
        try {
            let personas = await User.findAll({
                where: {
                    email: `${data.username}`,
                  }
            });
            if(personas == ""){
                datosUser = data;
                return true
            }else{
                return false
            }
        } catch (error) {
            console.log(error)
        }
    }

    async upload(imagen){
       let rutaImage = "";
        if(imagen != ""){
            const rutaImage = '/uploadsUser/'+imagen;
        }
        let password = datosUser.password;
        let passwordHash = await bcryptjs.hash(password,8);
         try {
            let objeto = {
                nombre: datosUser.nombre,
                apellido: datosUser.apellido,
                email: datosUser.username,
                pasword: passwordHash,
                phone: datosUser.area+datosUser.telefono,
                photo: rutaImage,
                rol: 2
            }
            console.log(objeto);

             let user = await User.create({name:`${datosUser.nombre}`,last_name:`${datosUser.apellido}`,email:`${datosUser.username}`,
            password:`${passwordHash}`,phone:`${datosUser.area}${datosUser.telefono}`,photo:`${rutaImage}`,rol_id:2});

            console.log(user)
            let templates = await this.armarTemplate(datosUser);
            let titulo = "Nuevo Registro"
            email.enviar(titulo,templates);

            return "Usuario Registrado con Exito"
        } catch (error) {
            return "Error en el Registro"
        } 
        
    }

    async mostrarUser(){
        try {
            let personas = await User.findAll({
               
                }
            );
            return personas;
        } catch (error) {
            console.log(error)
        }
    }

    async traerIdCarrito(user){
        try {
            let tieneCarrito = await carrito.count({
                where:{
                    id_usuario: `${user}`
                }
            })
            if(tieneCarrito == 0){
                let crearCarrito = await carrito.create({id_usuario: user})
            }
            let id = await carrito.findAll({
                attributes: ['id'],
                where:{
                    id_usuario: `${user}`
                }
            })
            return id;
        } catch (error) {
            console.log(error)
        }
    }

     // crear templates para Enviar los datos del Usuario al Email

     async armarTemplate(datos){
        let templates = "";

        templates = templates + `
        <div> <h1>NUEVO USUARIO REGISTRADO </h1></div>
        <hr>
        <div>
        <h3> DATOS DEL USUARIO </h3>
        <span><b>NOMBRE Y APELLIDO</b></span> <span> ${datos.nombre + ' ' + datos.apellido}</span> <br>
        <span><b>EMAIL</b></span> <span> ${datos.username}</span> <br>
        <span><b>TEL. Nº</b></span> <span> ${datos.telefono}</span>
      </div> `;
        return templates
      }
  
}

module.exports = new Personas(); 