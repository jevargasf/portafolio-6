const express = require('express');
const app = express();
const port = 8000
const productos = require('./routes/productos')
const ventas = require('./routes/ventas')
const routes = require('./routes/routes')
const cors = require('cors')


// uso de cors
app.use(cors())

// Definir rutas de las páginas de la aplicación
app.use('/', routes)

// Llamada a rutas CRUD productos y ventas
app.use('/productos', productos)
app.use('/ventas', ventas)

// servir archivos estáticos desde public
app.use(express.static("public"));

// escucha de puerto
app.listen(port, () => {
    console.log('Escuchando en el puerto 8000')
});
