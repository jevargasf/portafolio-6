    //Leer JSON con API fetch
    const url = 'http://localhost:8000/'
    const btnConseguirProductos = document.getElementById("conseguirProductos")
    const contenedorBotones = document.getElementById("contenedorBotones")
    const contenedorTabla = document.getElementById("contenedorTabla")
    contenedorBotones.addEventListener('click', (e) => { botonesInventario.conseguirProductos(e) })



  let botonesInventario = {
    conseguirProductos: function (e) {
        if (e.target.id === 'conseguirProductos') {
            fetch(url)
            .then((response) => response.json())
            .then((data) => data.forEach(item => {
              const nuevaFila = document.createElement("tr")
              nuevaFila.innerHTML = `
          
                  <td>${item.id}</td>
                  <td>${item.nombre}</td>
                  <td>${item.precio}</td>
                  <td>${item.stock}</td>
                  <td><img class="img-fluid" width="100" src="../${item.imagen}" alt="imagen-producto"></td>
                  `
              contenedorTabla.appendChild(nuevaFila)
            }));
        }
    }
  }




