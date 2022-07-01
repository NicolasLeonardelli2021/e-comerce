let rolesServices = require("../services/rolesService");
let memoria = [];
class Roles {
    async getAll(req,res,next){
        try {
            // let singleton = new Singleton();
            let roles = await rolesServices.getAll();
            res.json(roles)
        } catch (error) {
            console.log(error);
        }
    }

    async create(req,res,next){
        console.log("entro al controlador")
        try {
            let roles = await rolesServices.createRoles();
            res.json(roles)
        } catch (error) {
            
        }
     
    }

    async fyh(req,res,next){
        try {
            let FyH = new Date().toDateString();
            res.json({FyH})
        } catch (error) {
            console.log(error);
        }
    }

    async ingreso(req,res,next){
        try {
            memoria.push(req.body.number);
            res.json({memoria})
        } catch (error) {
            console.log(error);
        }
    }

    async egreso(req,res,next){
        try {
            res.json({memoria})
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new Roles();