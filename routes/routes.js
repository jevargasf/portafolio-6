// archivo para la lógica de ruteo de la página princial del servidor '/', /nosotros, /contacto
const express = require('express');
const router = express.Router();

// Escribir rutas para renderización de página principal, nosotros, carrito y contacto
// Manejador para la página de inicio
router.get('/', (req, res) => {
  res.render('home', { title: 'Página de inicio' });
});

// Manejador para la página de contacto
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Página de contacto' });
});

module.exports = router;