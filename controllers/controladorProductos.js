const express = require('express')
const { access, constants, readFile, readFileSync } = require('node:fs');

// ruta json data
const file = './public/data/productos.json'

// comprueba que el archivo existe en el directorio
access(file, constants.F_OK, (err) => {
    console.log(`${file} ${err ? 'no existe' : 'existe'}`)
})

access(file, constants.R_OK, (err) => {
    console.log(`${file} ${err ? 'no se puede leer' : 'sí se puede leer'}`)
})

access(file, constants.W_OK, (err) => {
    console.log(`${file} ${err ? 'no se puede escribir' : 'sí se puede escribir'}`)
})

// OTRA OPCIÓN MEJOR: ESCRIBIR FUNCIÓN PARA READFILE Y WRITEFILE Y LLAMARLO EN CADA FUNCIÓN

// funciones para peticiones HTTP
/*function conseguirProductos (req, res) {
    // leer archivo json
    const dataProductos = readFile(file, 'utf8', (err, data) => {
        if (err) throw err
        res.status(200).send(JSON.parse(data))
        })
    return dataProductos
}*/
const dataJson = readFileSync(file, 'utf8', (err, data) => {
    if (err) throw err
    data
    })

//console.log(dataJson)

function conseguirProductos (req, res) {
    res.send('ruta get de productos')
}
// AQUÍ WRITEFILE PARA ESCRIBIR NUEVO PRODUCTO CON FILESYSTEM
function postearProductos (req, res) {
    try {
        console.log(req)
        res.send('se procesó la solicitud')
    } catch (err) {
        console.log('error: ', err)
    }

}

// AQUÍ WRITEFILE PARA ESCRIBIR NUEVO PRODUCTO CON FILESYSTEM
function actualizarProductos (req, res) {
    res.send('ruta put para actualizar productos')
}

// AQUÍ WRITEFILE PARA ESCRIBIR NUEVO PRODUCTO CON FILESYSTEM
function borrarProductos (req, res) {
    res.send('ruta delete para borrar productos')
}


module.exports = { postearProductos, actualizarProductos, borrarProductos, conseguirProductos, dataJson }