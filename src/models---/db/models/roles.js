module.exports = (sequelize, DataTypes) =>{
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
      }, {
          tableName: 'roles',
          timestamps: false,
          
      });

      return Rol;
}


