// Inicializción elementos DOM
    // contenedores
const contenedorBotones = document.getElementById("contenedorBotones")
const contenedorFormularios = document.getElementById("contenedorFormularios")

    // botones
const btnConseguirProductos = document.getElementById("conseguirProductos")
const btnPintarFormularioPost = document.getElementById("btnPintarFormularioPost")
const btnActualizarProducto = document.getElementById("actualizarProducto")
const btnBorrarProducto = document.getElementById("borrarProducto")

// Pintar elementos DOM

    // formulario post
const formularioPost = function () {
        contenedorFormularios.innerHTML =`
        <form id="formularioPost" name="formularioPost">

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
                    <input type="text" id="stock" name="stock" class="form-control">
                    <label for="stock" class="">Stock</label>
                </div>
            </div>
        <!-- Columna -->
        <div class="col-md-6">
                <div class="md-form mb-0">
                    <input class="form-control" type="file" name="imagen" id="imagen">
                    <label for="imagen" class="form-label">Selecciona una foto para el producto</label>
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
    // formulario put (primero conseguir ID, luego actualizar campos)
let idActualizar = null
const formularioActualizar = async (e) => {
    try {

        contenedorFormularios.innerHTML = `
            <form id="formularioActualizar" name="formularioActualizar">

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
                        <input type="text" id="stock" name="stock" class="form-control">
                        <label for="stock" class="">Stock</label>
                    </div>
                </div>
            <!-- Columna -->
            <div class="col-md-6">
                    <div class="md-form mb-0">
                        <input class="form-control" type="file" name="imagen" id="imagen">
                        <label for="imagen" class="form-label">Selecciona una foto para el producto</label>
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
                    <button type="submit" class="btn btn-primary" id="actualizarProducto">Enviar</button>
                </div>
            </div>
        </form>
        `
        idActualizar = parseInt(prompt("Ingrese el Id del producto que desea actualizar los datos: "))
        const rutaGetId = `http://localhost:8000/productos/${idActualizar}`
        const res = await axios(rutaGetId)
        const nombre = document.getElementById("nombre")
        const precio = document.getElementById("precio")
        const stock = document.getElementById("stock")
        const descripcion = document.getElementById("descripcion")
        nombre.value = res.data.nombre
        precio.value = res.data.precio
        stock.value = res.data.stock
        descripcion.value = res.data.descripcion
    } catch (err) {
        console.log('Error: ', err)
    }
}
    // formulario delete (borrar con id)
let idBorrar = null
const formularioDelete = function () {
    try {    
        idBorrar = prompt("Ingrese el Id del producto que desea eliminar de la base de datos: ")
    } catch (err) {
        console.log('Error:', err)
    }
}
// AJAX
    // Get productos
const listarProductos = async() => {
    try {    
        // pintar tabla
        contenedorFormularios.innerHTML = `
            <table class="table bg-dark text-white rounded">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Imagen</th>
                    </tr>
                </thead>
                <tbody id="contenedorTabla">
                </tbody>
            </table>
            `

        const contenedorTabla = document.getElementById("contenedorTabla")
        // petición datos
            const rutaGet = 'http://localhost:8000/'
            const res = await axios(rutaGet)
            res.data.forEach(item => {
            const nuevaFila = document.createElement("tr")
            nuevaFila.innerHTML = `
        
                <td>${item.id}</td>
                <td>${item.nombre}</td>
                <td>${item.precio}</td>
                <td>${item.stock}</td>
                <td><img class="img-fluid" width="100" src="../${item.imagen}" alt="imagen-producto"></td>
                `
            contenedorTabla.appendChild(nuevaFila)
            });
    } catch (err) {
        console.log('Error: ', err)
    }
    
}
    // Post nuevo producto
const postearProducto = async(e) => {
    try{
        // recuperar data del DOM
        e.preventDefault()
        const nombre = document.getElementById("nombre").value
        const precio = document.getElementById("precio").value
        const stock = document.getElementById("stock").value
        const descripcion = document.getElementById("descripcion").value
        let dataProducto = { nombre, precio, stock, descripcion }        
    
        // petición post
        const rutaPost = 'http://localhost:8000/productos/post'
        const res = await axios({
                method: 'post',
                url: rutaPost,
                data: dataProducto
            })
        alert(res.data.mensaje)
    } catch (err) {
        console.log('Error: ', err)
    }
}

    // actualizar producto
const actualizarProducto = async(e) => {
    try {
        e.preventDefault()
        const nombre = document.getElementById("nombre").value
        const precio = parseInt(document.getElementById("precio").value)
        const stock = parseInt(document.getElementById("stock").value)
        const descripcion = document.getElementById("descripcion").value
        let dataProducto = { id: idActualizar, nombre, precio, stock, descripcion }        
        console.log(dataProducto)
        const rutaPut = `http://localhost:8000/productos/actualizar/${idActualizar}`
        const res = await axios({
            method: 'put',
            url: rutaPut,
            data: dataProducto
        })
        console.log(res.data)
    } catch (err) {
        console.log('Error: ', err)
    }
}

    // borrar producto
const borrarProducto = async() => {
    try {
        console.log(idBorrar)
        /*const rutaDelete = null
        const res = await axios({
        method: 'delete',
        url: rutaDelete,
        data: {
            
            }
        })*/
    } catch (err) {
        console.log('Error: ', err)
    }
}

// manejo de eventos
btnConseguirProductos.addEventListener('click', listarProductos)
btnPintarFormularioPost.addEventListener('click', () => {
    formularioPost
    document.getElementById("formularioPost").addEventListener('submit', e => postearProducto(e));
})
btnActualizarProducto.addEventListener('click', (e) => {
    formularioActualizar()
    document.getElementById("formularioActualizar").addEventListener('submit', e => actualizarProducto(e));
})
btnBorrarProducto.addEventListener('click', () => {
    formularioDelete()
    borrarProducto()
})


    
    





    





