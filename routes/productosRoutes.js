const express = require('express')
const router = express.Router()
const { conseguirProductos, conseguirProductoId, postearProductos, actualizarProductos, borrarProductos } = require('../controllers/controladorProductos')



// define la ruta principal y CRUD
router.get('/', conseguirProductos)
router.get('/:id', conseguirProductoId)
router.post('/post', postearProductos)
router.put('/actualizar/:id', actualizarProductos)
router.delete('/borrar/:id', borrarProductos)

// define ruta secundaria de productos
router.get('/nolose', (req, res) => {
    res.send('ruta secundaria productos')
})

module.exports = router





// middleware específico para esta ruta 
/*router.use(function leerProductos(req, res, next) {
    console.log('todo bien?')
    next()
})

// Manejador para la página "Acerca de nosotros"
router.get('/', (req, res) => {
  res.render('about', { title: 'Acerca de nosotros' });
});
*/