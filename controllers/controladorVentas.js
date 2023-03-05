const express = require('express')
// MÓDULOS REQUERIDOS

// FUNCIONES PROTOCOLOS HTTP
function getVenta (req, res) {
    res.send('ruta principal de ventas')
}

function postVenta  (req, res) {
    res.send('ruta post de postear una venta')
}


module.exports = { getVenta, postVenta }