// archivo para la lógica de ruteo de la página princial del servidor '/', /nosotros, /contacto
const express = require('express');
const router = express.Router();
const { dataJson } = require('../controllers/controladorProductos')


// Escribir rutas para renderización de página principal, nosotros, carrito y contacto
// Manejador para la página de inicio
router.get('/', (req, res) => {
  res.send(dataJson);
});

// Manejador para la página de contacto
router.get('/contacto', (req, res) => {
  res.render('contacto.ejs', { title: 'Página de contacto' });
});

// Manejador para la página 'Nuestra Tienda'
router.get('/nosotros', (req, res) => {
  res.render('nosotros.ejs', { title: 'Nuestra empresa' });
});

module.exports = router;