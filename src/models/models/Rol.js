const {Model, DataTypes} = require('sequelize')
const sequelize = require("../config/sequelize");

//class Rol extends Model {}
 //Rol.init({
    const Rol = sequelize.define('Rol', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },{
    sequelize,
    tableName: 'roles',
      timestamps: false,
     
 })


 module.exports = Rol