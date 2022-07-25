const User = require('../models/User');
const Rol = require('../models/Rol');
const Productos = require('../models/Productos');
const Categoria = require('../models/Categoria');
const Carrito = require('../models/Carrito');
const Items = require('../models/Item');
const Orden = require('../models/Orden');

 User.belongsTo(Rol,{
    foreignKey: 'rol_id'
});
Rol.hasOne(User,{
    foreignKey: 'rol_id'
}) 
Categoria.hasMany(Productos,{
    foreignKey: 'id_categoria'
});
Productos.belongsTo(Categoria,{
    foreignKey: 'id_categoria'
});

Carrito.hasMany(Items,{
    foreignKey: 'id_carrito'
});

Items.belongsTo(Carrito,{
    foreignKey: 'id_carrito'
});

Items.belongsTo(Productos,{
    foreignKey: 'id_producto'
})

Productos.hasOne(Items,{
    foreignKey: 'id_producto'
});

Orden.hasMany(Items,{
    foreignKey: 'id_orden'
})

Items.belongsTo(Orden,{
    foreignKey: 'id_orden'
})

User.hasOne(Orden,{
    foreignKey: 'id_user'
});

Orden.belongsTo(User,{
    foreignKey: 'id_user'
});


