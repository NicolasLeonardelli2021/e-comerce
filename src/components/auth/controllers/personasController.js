let personasServices = require("../services/personasService");
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
                res.send("usuario no valido")
            }else{
                res.send(personas)
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

}

module.exports = new Personas();