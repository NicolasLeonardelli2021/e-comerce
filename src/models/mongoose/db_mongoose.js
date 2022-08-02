let {mongoose} = require("../../config/mongo_database")
//let {Schema, model} = mongoose;

const mensajesCollection = 'chat'

const mensajeSchema = new mongoose.Schema({
        idUser: {type:Number},
        email:{type:String},
        tipo: {type:String},
        text:{type:String},
        hora:{type:String} 
})

//let mensajeSchemaModel = new Schema(mensajeSchema)
//let mensajeModel = new model('mensajes', mensajeSchemaModel)

module.exports = mongoose.model(mensajesCollection, mensajeSchema)