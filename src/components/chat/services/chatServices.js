let mongoChat = require("../../../models/mongoose/db_mongoose");

class Chat{
    async getChat(idUser){
        try {
            let getchats = await mongoChat.find({});
            return getchats;
        } catch (error) {
            console.log(error)
        }
    }
   
}

module.exports = new Chat();