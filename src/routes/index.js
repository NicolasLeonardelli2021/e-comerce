const info = require("../components/info");


module.exports = app =>{
    info(app);
    app.get("/info", (req,res)=> res.render("info",{}))

}