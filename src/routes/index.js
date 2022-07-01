//let personasApi = require("../components/personas");
let rolesApi = require("../components/roles");

module.exports = app =>{
    //personasApi(app);
    rolesApi(app);
    app.get("/", (req,res)=> res.send("Ok!"));
}