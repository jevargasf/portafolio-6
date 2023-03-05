const express = require('express')
const { postVenta, getVenta } = require('../controllers/controladorVentas')
const router = express.Router()

// middleware específico para esta ruta
router.use(function ventas(req, res, next) {
    console.log("usando middleware ventas")
    next()
})

// define la ruta principal y CRUD
router.get('/', getVenta)
router.post('/', postVenta)

// define ruta secundaria de productos
router.get('/nolose', (req, res) => {
    res.send('ruta secundaria ventas')
})

module.exports = router