const {Model, DataTypes} = require('sequelize')
const sequelize = require("../config/sequelize");

    const Productos = sequelize.define('Productos', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          codigo: {
            type: DataTypes.STRING,
            allowNull: false
          },
        nombre: {
          type: DataTypes.STRING,
          allowNull: false
        },
        precio: {
            type: DataTypes.FLOAT,
            allowNull: false
          },
          descripcion: {
            type: DataTypes.STRING,
            allowNull: false
          },
          id_categoria: {
            type: DataTypes.INTEGER,
            allowNull: false,
            /* references:{
              model: 'categoria',
              key:'id'
            } */
          },
          imagen: {
            type: DataTypes.STRING,
            allowNull: false
          },
          stock: {
            type: DataTypes.INTEGER,
            allowNull: false
          }
      }, {
        sequelize,
          tableName: 'productos',
          timestamps: false,
         
      })

    module.exports = Productos