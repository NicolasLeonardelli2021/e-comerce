const { Router } = require("express");
let chatController = require("./controller/chatController");

module.exports = app =>{
    let router = new Router();
    app.use("/chat",router);

    router.get("/",chatController.renderPag);

}

let isLogin = (req,res,next)=>{
    if(req.session.nombre){
        next();
    }else{
        let text = "Vuelve a iniciar Session"
        res.render('alert',{text});
    }
} 