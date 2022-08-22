# Trabajo Practico Final e-comerce
## Informatica Center
### Descripción general del sistema.
Es un sistema web de ventas de artículos de informática cargados por defecto. Para ingresar al sistema el usuario debe ser registrado. Para registrarse se debe clickear en crear cuanta donde se pedirán algunos datos personales y luego una foto o imagen de perfil si el usuario lo desea. El usuario puede navegar por las distintas categorías de productos o buscar uno en específico por código o nombre del artículo. Una vez elegido el mismo, puede elegir la cantidad que enviará al Carrito. El Carrito es un módulo que almacena los artículos que va eligiendo el usuario para la compra. En el mismo se puede eliminar los artículos no requeridos o aumentar la cantidad de cada uno. Continuando la compra se va a generar una vista previa de la orden de compra, que muestra los datos del usuario, el detalle de los productos para la compra y el total que se debe abonar. Para culminar con la compra se debe aceptar y enviar la Orden. El Administrador recibirá la orden por email. El usuario puede ver las compras echas en la sección "Mis compras", y el detalle de cada orden. El sistema también cuenta con un módulo de chat en tiempo real para consultas.

### Programación
* La aplicación está desarrollado en backend con la **arquitectura MVC** basado en capas bien definidas (ruteo, controlador, lógica de negocio y persistencia). La capa de persistencia se la programó en el servicio.
* Se trabajó con dos ambientes elegibles desde la variable NODE_ENV, desarrollo (dev) el cual la base de datos se utilizó en forma local, y producción (prod) en forma remota.
* El mecanismo de ingreso autorizado se realizó con express-session.
* La base de datos utilizada para el sistema es **mysql** con **sequelize** para los productos, registro de usuarios y órdenes y para el chat se utilizó **mongoDB**.
* Al registrarse un usuario y al confirmarse una compra, se envía un email a la cuenta de correo descripto en el archivo de configuración.
* Para el chat de consulta se utilizó la tecnología **websocket**, el cual todos los usuarios pueden estar comunicados y ver los comentarios en tiempo real.
* El confirmar una orden se descuenta automáticamente el Stock y las ordenes quedan guardadas en el módulo **Mis compras**.
* Las contraseñas de los usuarios se guardan encriptadas en la base de datos.


### Instalacíon
#### Dependencias utilizadas:
    "bcryptjs": "^2.4.3",
    "connect-mongo": "^4.6.0",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.0.1",
    "ejs": "^3.1.8",
    "express": "^4.18.1",
    "express-session": "^1.17.3",
    "mariadb": "^3.0.0",
    "moment": "^2.29.4",
    "mongoose": "^6.5.0",
    "multer": "^1.4.5-lts.1",
    "mysql2": "^2.3.3",
    "nodemailer": "^6.7.7",
    "passport": "^0.6.0",
    "passport-local": "^1.0.0",
    "path": "^0.12.7",
    "router": "^1.3.7",
    "sequelize": "^6.21.2",
    "socket.io": "^4.5.1",
    "uuid": "^3.3.2"

#### scripts utilizados
    "start": "node index.js",
    "dev": "set NODE_ENV=development&& nodemon index.js",
    "prod": "set NODE_ENV=production&& nodemon index.js"


#### Autor:
    Nicolás Leonardelli





