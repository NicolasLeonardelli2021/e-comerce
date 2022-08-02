let personasServices = require("../services/personasService");
//let JWT = require("../../../utils/JWT")

//let Singleton = require("../../../utils/singleton")
class Personas {

    async renderPag(req,res,next){
        res.render('login',{});
    }
 
    async login(req,res,next){
        try {
            let {email,password} = req.body
            // let singleton = new Singleton();
            let personas = await personasServices.login(email,password);
             if(personas == ""){
                let text = "Usuario o Contraseña incorrectos"
                res.render("alert",{text});
            }else{
                
                let idUser = personas[0].id;
                req.session.idUser = idUser;
                req.session.email = personas[0].email;
                req.session.nombre = personas[0].name;
                req.session.imagen = personas[0].photo;
                req.session.rol = personas[0].rol_id;
                let idCarrito = await personasServices.traerIdCarrito(idUser);
                req.session.idCarrito = idCarrito[0].id;

                res.redirect("/productos");
            } 
        } catch (error) {
            console.log(error);
        }
    }

    async renderReg(req,res){
        res.render("register",{});
    }

    async verifi(req,res,next){
        try {
            let verified = await personasServices.verifi(req.body);
            if(verified){
                res.render("imagenUsuario",{});
            }else{
                res.send("Ususario ya Registrado")
            }
        } catch (error) {
            console.log(error);
        }
    }

    async upload(req,res,next){
        const image = req.file.filename;
      let uploadimage = await personasServices.upload(image)
      console.log(uploadimage);
        if(uploadimage){
            res.render("alert",{});
        }

    }

    async usuarios(req,res,next){
        try {
            let users = await personasServices.mostrarUser();
            res.json(users);
        } catch (error) {
            console.log(error)
        }
    }

    async salir(req,res,next){
        let nombre = req.session.nombre
        req.session.destroy(err => {
            if (err) {
            return res.json({ status: 'Logout ERROR', body: err })
            }
            let text = `Hasta luego ${nombre}`
            res.render('alert',{text})
            })
    }

    

}

module.exports = new Personas();