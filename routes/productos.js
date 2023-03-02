const express = require('express')
const router = express.Router()
const { access, constants, readFile } = require('node:fs');

// fileSystem
const file = './assets/data/prueba.json'

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



// middleware específico para esta ruta
/*router.use(function leerProductos(req, res, next) {
    console.log('todo bien?')
    next()
})*/

// define la ruta principal y CRUD
router.get('/', (req, res) => {
    // leer archivo json
    readFile(file, 'utf8', (err, data) => {
        if (err) throw err
        res.set({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        });
        res.status(200).send(JSON.stringify(data))
    })
})
router.post('/', (req, res) => {
    res.send('ruta post de productos')
})
router.put('/', (req, res) => {
    res.send('ruta put para actualizar productos')
})
router.delete('/', (req, res) => {
    res.send('ruta delete para borrar productos')
})

// define ruta secundaria de productos
router.get('/nolose', (req, res) => {
    res.send('ruta secundaria productos')
})

module.exports = router