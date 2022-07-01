// let personasDB = require("../../../models/PersonasDaoMem");
let DTO = require("./DTO")
const redis = require("../../../utils/redis");
class Personas {
    async getAll(){
        let personas = await redis.get("personas");
        let res = DTO.getPersonas(personas);
        return res;
    }
    async create(obj){
        return await redis.create(obj);
    }
}

module.exports = new Personas();