let Sequelize = require("sequelize");
const { config, db_credential } = require("./"); 


const app = new Sequelize(
    db_credential.DB_name,
    db_credential.DB_username,
    db_credential.DB_password,
    {
        host: db_credential.DB_host,
        dialect: db_credential.DB_dialect,
        timezone: '-03:00',
        pool:{
            max:100,
            min:50,
            acquire:60000,
            idle: 20000
        },
        logging: config.dev ? console.log : false
    }
);

class Shop {
    constructor(){
        this.client = app;
    }

    connect(){
        if(!Shop.connection){
            Shop.connection = new Promise((resolve, reject)=>{
                if(!this.client){
                    console.log("Error al conectador al cliente de Sequelize");
                    reject("Error");
                }
                console.log("Conectados a Sequelize");
                resolve(this.client);
            })
        }
        return this.client;
    }
}

module.exports = new Shop().connect();