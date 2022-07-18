const {Model, DataTypes} = require('sequelize')
const sequelize = require("../config/sequelize");

//class User extends Model {}
 //User.init({
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    rol_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },{
    sequelize,
    tableName: 'user',
      timestamps: false
     
 })
 

 module.exports = User
