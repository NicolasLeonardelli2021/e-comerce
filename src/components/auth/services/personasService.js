// let personasDB = require("../../../models/PersonasDaoMem");
//let DTO = require("./DTO")
//const redis = require("../../../utils/redis");
//const {Usuario} = require("../../../models");
//const {Rol} = require("../../../models");
const Productos = require("../../../models/models/Productos")
const Categoria = require("../../../models/models/Categoria")

const User = require("../../../models/models/User")
const Rol = require("../../../models/models/Rol")
let datosUser ="";
class Personas {
    async login(email,password){
        try {
            let personas = await User.findAll({
                attributes: ["id","name"],
                where: {
                    email: `${email}`,
                    password: `${password}`
                  }
            });
            return personas;
        } catch (error) {
            console.log(error)
        }
    }
    async verifi(datos){
        let data = datos;
        console.log(data);
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
        const rutaImage = '/uploadsUser/'+imagen
        try {
            let user = await User.create({name:`${datosUser.nombre}`,last_name:`${datosUser.apellido}`,email:`${datosUser.username}`,
            password:`${datosUser.password}`,phone:`${datosUser.area}${datosUser.telefono}`,photo:`${rutaImage}`,rolesID:2});
            return true
        } catch (error) {
            return false
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
}

module.exports = new Personas(); 