let url = 'http://localhost:8000/productos/'
let contenedorData = document.getElementById("contenedorData")


fetch(url)
  .then((response) => response.json())
  .then((data) => { loadData(data) })

function loadData(arr) {
  arr.forEach(item => console.log(item))}
    /*{
    const lista = `
        <li>
            <p>${item.nombre}</p>
        </li>
        `;
        contenedorData.innerHTML += lista
  });
}*/
/*// get data clientes
async function recibirData (url) {
    const dataProductos = await fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': 'text/html; charset=utf-8'
        },
        mode: 'no-cors'
    })
    const respuesta = await dataProductos.json()
    return respuesta
    }

// Manejo DOM
async function pintarData () {
    let contenedorData = document.getElementById("contenedorData")
    
    // llamada a fetch
    let respuesta = await recibirData(url)
        // caso de éxito
    .then (console.log('tengo la maldita data!!'))
        // caso de error
    .catch(err => console.log('error: ', err))

    // código para pintar datos
    await respuesta.forEach(item => {
        const lista = `
        <li>
            <p>${item.nombre}</p>
        </li>
        `;
        contenedorData.innerHTML += lista
    });
}

pintarData();
console.log('te llegó? si ves este mensaje en consola entonces sí')*/

