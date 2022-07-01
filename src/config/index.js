const dotenv = require("dotenv");
const path = require('path');

dotenv.config({
    path: path.resolve(process.cwd(),process.env.NODE_ENV + '.env')
})

let config = {
    port: process.env.PORT,
    modo: process.env.NODE_ENV
}

let db_credential = {
    DB_username: process.env.DB_USERNAME,
    DB_password: process.env.DB_PASSWORD,
    DB_host: process.env.DB_HOST,
    DB_name: process.env.DB_NAME,
    DB_dialect: process.env.DB_DIALECT
}

module.exports = {config,db_credential}