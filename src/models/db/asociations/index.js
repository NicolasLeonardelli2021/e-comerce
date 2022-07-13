const User = require('../models/usuarios');
const Rol = require('../models/roles');

User.belongsTo(Rol,{
    foreignKey: 'rol'
});
Rol.hasOne(User,{
    foreignKey: 'rol'
})