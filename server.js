const express = require('express');
const app = express();
const port = 8000
const routerProductos = require('./routes/productosRoutes')
const routerVentas = require('./routes/ventas')
const routerPrincipal = require('./routes/routes')
const cors = require('cors')


// uso de cors
app.use(cors())

// Definir rutas de las páginas de la aplicación
app.use('/', routerPrincipal)

// Llamada a rutas CRUD productos y ventas
app.use('/productos', routerProductos)
app.use('/ventas', routerVentas)

// servir archivos estáticos desde public
app.use(express.static("public"));

// motor de plantillas
app.set('view engine', 'ejs')

// escucha de puerto
app.listen(port, () => {
    console.log('Escuchando en el puerto 8000')
});
