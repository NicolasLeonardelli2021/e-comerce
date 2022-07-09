
module.exports = (sequelize, DataTypes) =>{
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
            references:{
              model: 'categoria',
              key:'id'
            }
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
          tableName: 'productos',
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
      return Productos
    
    }