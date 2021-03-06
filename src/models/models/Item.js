const {Model, DataTypes} = require('sequelize')
const sequelize = require("../config/sequelize");

//class Rol extends Model {}
 //Rol.init({
    const Items = sequelize.define('Items', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      id_carrito: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      id_orden: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
  },{
    sequelize,
    tableName: 'items',
      timestamps: false,
 })

 module.exports = Items