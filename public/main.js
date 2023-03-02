let url = 'http://localhost:8000/productos/'
let myList = document.getElementById("contenedorData")

fetch(url, {
    mode: 'no-cors',
    'content-type' : 'text/html; charset=utf-8'
})
  .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
  .then(data => console.log(data));

/*fetch(url, {
    method: "GET",
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    },
    mode: 'no-cors',
    referrerPolicy: "no-referrer"
})
  .then((response) => response.json())
  .then((data) => {
    for (const product of data.products) {
      const listItem = document.createElement('li');
      listItem.appendChild(
        document.createElement('strong')
      ).textContent = product.nombre;
      listItem.append(
        ` can be found in ${
          product.descripcion
        }. Cost: `
      );
      listItem.appendChild(
        document.createElement('strong')
      ).textContent = `£${product.precio}`;
      myList.appendChild(listItem);
    }
  })
  .catch(console.error);*/
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

