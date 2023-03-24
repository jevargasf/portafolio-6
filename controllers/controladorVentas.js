const express = require('express')



const getVenta = (req, res) => {
    res.send('ruta principal de ventas')
}

const getVentaId = (req, res) => {
    res.send('ruta principal de ventas')
}

const postVenta = (req, res) => {
    res.send('ruta post de postear una venta')
}


module.exports = { getVenta, getVentaId, postVenta }