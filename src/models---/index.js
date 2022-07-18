const shopDB = require("../config/sql_database");
const generateShopDBModels = require("./db");
module.exports = generateShopDBModels(shopDB);