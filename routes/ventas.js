const express = require('express')
const { postVenta, getVenta, getVentaId } = require('../controllers/controladorVentas')
const router = express.Router()


// Ruta conseguir todas las ventas
router.get('/', getVenta)

// Ruta conseguir venta por id boleta
router.get('/:id', getVentaId)

// Ruta postear venta en base de datos
router.post('/', postVenta)


module.exports = router