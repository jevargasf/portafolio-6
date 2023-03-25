const express = require('express')



const getVenta = (req, res) => {
    res.send('ruta principal de ventas')
}

const getVentaId = (req, res) => {
    res.send('ruta principal de ventas')
}

const postVenta = (req, res) => {
    console.log(req.body)
    res.json({ mensaje: "Tu compra ha sido procesada con éxito." })
}


module.exports = { getVenta, getVentaId, postVenta }