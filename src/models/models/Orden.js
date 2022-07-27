const {Model, DataTypes} = require('sequelize')
const sequelize = require("../config/sequelize");

//class Rol extends Model {}
 //Rol.init({
    const Orden = sequelize.define('Orden', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fechaHora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: true
      }
  },{
    sequelize,
    tableName: 'ordenes',
      timestamps: false,
     
 })

 module.exports = Orden