module.exports = (sequelize, DataTypes) =>{
    const Carrito = sequelize.define('Carrito', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
        id_usuario: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references:{
            model: 'user',
            key:'id'
          }
        },
        fechaHora: {
            type: DataTypes.DATE,
            allowNull: false
          }
      }, {
          tableName: 'carrito',
          timestamps: false,
          underscored: true
      })
     /*  Productos.associate= (Models) =>{
        const {Categoria} = Models;

        Productos.belongsTo(Categoria, {
          foreingKey: "id_categoria",
            constraints: true,
        }) */
      //}
      return Carrito
    
    }