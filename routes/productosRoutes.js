const express = require('express')
const router = express.Router()
const { conseguirProductos, postearProductos, actualizarProductos, borrarProductos } = require('../controllers/controladorProductos')



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

// define la ruta principal y CRUD
router.get('/', conseguirProductos)
router.post('/', postearProductos)
router.put('/', actualizarProductos)
router.delete('/', borrarProductos)

// define ruta secundaria de productos
router.get('/nolose', (req, res) => {
    res.send('ruta secundaria productos')
})

module.exports = router