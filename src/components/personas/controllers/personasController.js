let personasServices = require("../services/personasService");
let Singleton = require("../../../utils/singleton")
class Personas {
    async getAll(req,res,next){
        try {
            // let singleton = new Singleton();
            let personas = await personasServices.getAll();
            res.render('index', {personas})
        } catch (error) {
            console.log(error);
        }
    }
    async create(req,res,next){
        try {
            // let singleton = new Singleton();
            await personasServices.create(req.body);
            res.redirect("/persona");
        } catch (error) {
            console.log(error);
        }
    }

    async getJson(req,res,next){
        try {
            // let singleton = new Singleton();
            let personas = await personasServices.getAll();
            res.json(personas)
        } catch (error) {
            console.log(error);
        }
    }

    async getSingleton(req,res,next){
        try {
            // let singleton = new Singleton();
            res.json({fecha: singleton.fecha})
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new Personas();