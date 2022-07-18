const redis = require("../utils/redis");

class PersonasDaoMem {
    async getAll(){
        try {
            // query()
            let objRedis = await redis.client.get("personas");
            if(objRedis) return JSON.parse(objRedis);
            return [];
        } catch (error) {
           console.log(error); 
        }
    }
    async create(obj){
        try {
            
            let personas = await this.getAll();
            personas.push(obj);
            redis.client.set("personas", JSON.stringify(personas));
            return personas;
        } catch (error) {
           console.log(error); 
        }
    }
}


module.exports = new PersonasDaoMem();