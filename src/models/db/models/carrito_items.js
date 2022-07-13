module.exports = (sequelize, DataTypes) =>{
    const carrito_items = sequelize.define('carrito_items', {
        id_carrito: {
            type: DataTypes.INTEGER,
            allowNull: false,
           references:{
            model:'carrito',
            key: 'id'
            }
          },
          id_item:{
           type: DataTypes.INTEGER,
           allowNull: false,
           references:{
            model:'items',
            key: 'id'
           } 
          }
        },{
            tableName:'carrito_items',
            timestamps: false,
            underscored: true
        })
        return carrito_items
    }