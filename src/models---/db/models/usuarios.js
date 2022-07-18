let {Rol} = require("./roles");

module.exports = (sequelize, DataTypes) =>{
    const Usuario = sequelize.define('Usuario', {
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
        rol: {
          type: DataTypes.INTEGER,
          allowNull: false,
          
        }
      }, {
          tableName: 'user',
          timestamps: false,
         
      });

      return Usuario;
}