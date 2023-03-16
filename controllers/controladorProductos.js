const express = require('express')
const { access, constants, readFile, readFileSync, writeFile } = require('node:fs');

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


const dataJson = readFileSync(file, 'utf8', (err, data) => {
    if (err) throw err
    data
    })


function conseguirProductos (req, res) {
    res.send('ruta get de productos')
}
// AQUÍ WRITEFILE PARA ESCRIBIR NUEVO PRODUCTO CON FILESYSTEM
function postearProductos (req, res) {
    try {
        let nuevoProducto = { nombre, precio, stock, descripcion } = req.body
        nuevoProducto = Object.assign( {id: 16}, nuevoProducto)
        let productos = JSON.parse(dataJson)
        productos.push(nuevoProducto)
        console.log(productos)

        writeFile(file, JSON.stringify(productos), (err) => {
            if (err)
              console.log(err);
            else {
              console.log("File written successfully\n");
              console.log("The written has the following contents:");
              console.log(readFileSync(file, "utf8"));
              res.json(productos)
            }
          });
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.send("se procesó correctamente")
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