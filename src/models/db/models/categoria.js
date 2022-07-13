module.exports = (sequelize, DataTypes) =>{
    const Categoria = sequelize.define('Categoria', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
        nombre: {
          type: DataTypes.STRING,
          allowNull: false
        },
    },{
        tableName: 'categoria',
          timestamps: false,
          underscored: true
    })
   /*  Categoria.associate= (Models) =>{
      const {Productos} = Models;

      Categoria.hasOne(Productos, {
        foreingKey: "id_categoria",
          constraints: true,
      }) 
    } */

    return Categoria
}
