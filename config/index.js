const dotenv = require("dotenv");
const path = require('path');

dotenv.config({
    path: path.resolve(process.cwd(),process.env.NODE_ENV + '.env')
})

let config = {
    port: process.env.PORT,
    modo: process.env.NODE_ENV
}

module.exports = {config}