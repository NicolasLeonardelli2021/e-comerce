const {Role} = require("../../../models");
class Roles {
    async getAll(){
        try {
            let response = await Role.findAll();
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async createRoles(){
        console.log("entro a create roles")
        try {
            let response = await Role.create({
                name:"cliente"
            })
            return response
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new Roles();