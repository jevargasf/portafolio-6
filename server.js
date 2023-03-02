const express = require('express');
const app = express();
const port = 8000
const productos = require('./routes/productos')
const ventas = require('./routes/ventas')
const cors = require('cors')

// CRUD básico con ruta principal
app.route('/') 
    .get((req, res) => {
        res.send('hola')
    })
    .post((req, res) => {
        res.send('añade')
    })
    .put((req, res) => {
        res.send('actualiza')
    })
    .delete((req, res) => {
        res.send('borra')
    })

// uso de cors
/*ar corsOptions = {
    origin: 'http://localhost:8000'
};
app.use(cors(corsOptions))*/

// llamada a rutas productos y ventas
app.use('/productos', productos)
app.use('/ventas', ventas)



// escucha de puerto
app.listen(port, () => {
    console.log('Escuchando en el puerto 8000')
});