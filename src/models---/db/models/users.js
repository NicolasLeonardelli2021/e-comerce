module.exports = (sequelize, DataTypes) =>{
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
        rol: {
          type: DataTypes.INTEGER,
          allowNull: false,
          /*  references:{
              model: "Rol",
              key: "id"
          }  */
        },
      }, {
          tableName: 'user',
          timestamps: false,
          underscored: true
      });

        User.associate = (Models) => {
        const { Rol } = Models;

        User.belongsTo(Rol, {
            foreingKey: "rol",
            constraints: true,
            //as: "role"
        });
        
      } 


      return User;
}


