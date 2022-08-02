let socket = require("../../../utils/socket/chat")
let chatServices = require("../services/chatServices")
class Chat{
    async renderPag(req,res){
        try {
            let name = req.session.nombre;
        let photo = req.session.photo;
        let cantCarrito = "";
        let idUser = req.session.idUser;
        let rolId = req.session.rol;
        let chats = await chatServices.getChat(idUser);
        res.render("chat",{name,photo,cantCarrito,idUser,chats});
        } catch (error) {
            console.log(error)
        }
        
    }
}

module.exports = new Chat();