const {Model, DataTypes} = require('sequelize')
const sequelize = require("../config/sequelize");

    const Categoria = sequelize.define('Categoria', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
          },
        nombre: {
          type: DataTypes.STRING,
          allowNull: false
        },
    },{
      sequelize,
        tableName: 'categoria',
          timestamps: false,
    })

module.exports = Categoria
