const {Model, DataTypes} = require('sequelize')
const sequelize = require("../config/sequelize");

//class Rol extends Model {}
 //Rol.init({
    const Carrito = sequelize.define('Carrito', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fechaHora: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },{
    sequelize,
    tableName: 'carrito',
      timestamps: false,
     
 })

 module.exports = Carrito