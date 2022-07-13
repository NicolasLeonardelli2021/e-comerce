module.exports = (sequelize, DataTypes) =>{
    const Item = sequelize.define('Item', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          id_producto:{
           type: DataTypes.INTEGER,
           allowNull: false,
           references:{
            model:'productos',
            key: 'id'
           } 
          },
          cantidad:{
            type: DataTypes.INTEGER,
            allowNull:false
          }
        },{
            tableName:'item',
            timestamps: false,
            underscored: true
        })
        return Item
    }