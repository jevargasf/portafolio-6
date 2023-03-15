    //Listar productos
    const rutaGet = 'http://localhost:8000/'
    const btnConseguirProductos = document.getElementById("conseguirProductos")
    const contenedorBotones = document.getElementById("contenedorBotones")
    const contenedorTabla = document.getElementById("contenedorTabla")
    contenedorBotones.addEventListener('click', (e) => botonesInventario.listarProductos(e))

    //Formulario post
    const rutaPost = ''
    const contenedorFormularios = document.getElementById("contenedorFormularios")
    const formularioPost = document.getElementById("formularioPost")
    contenedorBotones.addEventListener('click', (e) => botonesInventario.formularioPost(e))
  let botonesInventario = {
    listarProductos: function (e) {
        if (e.target.id === 'conseguirProductos') {
            fetch(rutaGet)
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
    },
    formularioPost: function (e) {
        if (e.target.id === 'formularioPost') {
            contenedorFormularios.innerHTML =`
            <form id="formulario" name="formulario" action="/productos/post" method="POST">

            <!-- Fila -->
            <div class="row">

                <!-- Columna -->
                <div class="col-md-6">
                    <div class="md-form mb-0">
                        <input type="text" id="nombre" name="nombre" class="form-control">
                        <label for="nombre" class="">Nombre producto</label>
                    </div>
                </div>
                <!-- Columna -->

                <!-- Columna -->
                <div class="col-md-6">
                    <div class="md-form mb-0">
                        <input type="text" id="precio" name="precio" class="form-control">
                        <label for="precio" class="">Precio</label>
                    </div>
                </div>
                <!-- Columna -->

            </div>
            <!-- Fila -->

            <!-- Fila -->
            <!-- Columna -->
            <div class="row">
                <div class="col-md-6">
                    <div class="md-form mb-0">
                        <input type="text" id="subject" name="subject" class="form-control">
                        <label for="subject" class="">Stock</label>
                    </div>
                </div>
            <!-- Columna -->
            <div class="col-md-6">
                    <div class="md-form mb-0">
                    </div>
                </div>
            </div>
            <!-- Fila -->

            <!-- Fila -->
            <div class="row">

                <!--Columna -->
                <div class="col-md-12">

                    <div class="md-form">
                        <textarea type="text" id="descripcion" name="descripcion" rows="2" class="form-control md-textarea"></textarea>
                        <label for="descripcion">Descripción</label>
                    </div>

                </div>
            </div>
            <!-- Fila -->
            <div class="row text-center">
                <div class="m-3">
                    <button type="submit" class="btn btn-primary" id="postearProducto">Enviar</button>
                </div>
            </div>
        </form>
            `
        }
    }
  }

//                         <input class="form-control" type="file" name="imagen" id="imagen">
// <label for="imagen" class="form-label">Selecciona una foto para el producto</label>



