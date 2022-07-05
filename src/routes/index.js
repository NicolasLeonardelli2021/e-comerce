//let personasApi = require("../components/personas");
let userApi = require("../components/auth");

module.exports = app =>{
    //personasApi(app);
    userApi(app);
    app.get("/", (req,res)=> res.redirect("auth"));
    
}