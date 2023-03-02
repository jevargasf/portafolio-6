const express = require('express')
const router = express.Router()

// middleware específico para esta ruta
router.use(function ventas(req, res, next) {
    console.log("usando middleware ventas")
    next()
})

// define la ruta principal y CRUD
router.get('/', (req, res) => {
    res.send('ruta principal de ventas')
})
router.post('/', (req, res) => {
    res.send('ruta post de postear una venta')
})
router.put('/', (req, res) => {
    res.send('ruta put para actualizar una venta')
})
router.delete('/', (req, res) => {
    res.send('ruta delete para borrar una venta')
})

// define ruta secundaria de productos
router.get('/nolose', (req, res) => {
    res.send('ruta secundaria ventas')
})

module.exports = router