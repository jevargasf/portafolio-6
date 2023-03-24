// Arreglo productos carrito y métodos para manipularlo
let carrito = {
    productos: [],
    dataProductos: [],
    getData: function (datos) { datos.forEach(item => this.dataProductos.push(item)) },
    botonAgregar: function (e) {
       if (e.target.className === 'btn btn-primary botonAgregar') {
            this.dataProductos.forEach(item => {
                if (item.id == e.target.dataset.id) {
                    let producto = {}
                    producto["id"] = item.id
                    producto["nombre"] = item.nombre
                    producto["precio"] = item.precio
                    producto["cantidad"] = 1
                    producto["imagen"] = item.imagen
                    this.productos.push(producto)
                    e.target.disabled = true
                    localStorage.getItem("carrito")
                    localStorage.setItem("carrito", JSON.stringify(this.productos))
                }
            })
        }
    },
    botonSumar: function (e) {
        if (e.target.className === 'btn btn-info p-1 botonSumar') {
            for (item of this.productos) {
                if (item.id == e.target.id.slice(1)) {
                    item.cantidad++
                    localStorage.getItem("carrito")
                    localStorage.setItem("carrito", JSON.stringify(this.productos))
                }
            }
        }
    },
    botonQuitar: function (e) {
        if (e.target.className === 'btn btn-danger botonQuitar p-1') {
            for (item of this.productos) {
                if (item.id == e.target.id.slice(1)) {
                    item.cantidad--
                    localStorage.getItem("carrito")
                    localStorage.setItem("carrito", JSON.stringify(this.productos))
                    if (item.cantidad === 0) {
                        break
                    }
                }
            }
        }
    },
    botonEliminar: function (e) {
        if (e.target.className === 'btn btn-link botonEliminar') {
            for (item of this.productos) {
                if (item.id == e.target.id.slice(1)) {
                        this.productos = this.productos.filter(prod => prod.id != e.target.id.slice(1))
                        localStorage.getItem("carrito")
                        localStorage.setItem("carrito", JSON.stringify(this.productos))
                }
            }
        }
    },
    sumaCantidades: function () {
        let arrCantidades = []
        this.productos.forEach(item => {
            arrCantidades.push(item.cantidad)
        })
        let cantidadTotal = arrCantidades.reduce((a,b) => a+b, 0)
        return cantidadTotal
    },
    sumaTotal: function () {
        let subtotalProductos = []
        this.productos.forEach(item =>
            subtotalProductos.push(item.cantidad*item.precio))
        let totalProductos = subtotalProductos.reduce((a,b) => a+b, 0)
        return totalProductos
    }
}


// Llamada a funciones localStorage cuando carga la página
 window.addEventListener('DOMContentLoaded', e => {
    cargarLocalStorage()
    .then(()=>{pintarLocalStorage(carrito)})
})

// Manipulación de localStorage

    // Recuperar data almacenada en localStorage
const cargarLocalStorage = async () => {
        carrito.productos = await JSON.parse(localStorage.getItem("carrito")) || []

    }
        // Función para pintar en el carrito la data almacenada en localStorage
    function pintarLocalStorage (arr) {
        const cuerpoCarrito = document.getElementById("cuerpoCarrito"); 
        const conteoProductos = document.getElementById("conteoProductos")
        const total = document.getElementById("totalProductos")
        const inputDcto = document.getElementById("inputDescuento");
        ; console.log(arr.productos)
        arr.productos.forEach(item => {
            console.log(item)
            const filaNuevoProducto = document.createElement("div");
        filaNuevoProducto.setAttribute("class", "row p-3 m-0 d-flex align-items-center border-bottom bg-white")
            filaNuevoProducto.innerHTML += `
                        <div class="col-2"><img class="img" src="..${item.imagen}" style="height: 100px; width: auto;" alt="img-producto"></div>
                        <div class="col-6"><h5>${item.nombre}</h5></div>
                        <div class="col-3 text-secondary">
                            <div class="small"><p>Cantidad: ${item.cantidad}</p></div>
                            <div class="small"><p>Precio: ${item.precio} c/u</p></div>
                        </div>
                    `;   
                conteoProductos.innerHTML = `
                <div class="col-6">Productos</div>
                <div class="col-6">${arr.sumaCantidades()}</div>
                `
                total.innerHTML = `
                <div class="col-6">Total a pagar</div>
                <div class="col-6" id="sumaTotal">${arr.sumaTotal()}</div>
                `

 
            if (inputDcto.innerHTML === "") {
                inputDcto.innerHTML =
                    `
                    <div class="input-group pt-3">
                    <input type="text" class="form-control" placeholder="Ingresa código descuento" aria-label="Username" aria-describedby="input-group-button-right" id="textoDescuento">
                    <button type="button" class="btn btn-outline-secondary" id="input-group-button-right">Aplicar</button>
                    </div>
                    `
                }
                
                cuerpoCarrito.appendChild(filaNuevoProducto);
            })
    }

    //Botón aplica descuento 

document.getElementById("offcanvas")?.addEventListener('click', e => {
    aplicaDescuento(carrito, e)
    });

    // Función aplica descuento
function aplicaDescuento (arr, e) {
    if (e.target.id === 'input-group-button-right') {
        let codigoDescuento = document.getElementById("textoDescuento").value;
        if (codigoDescuento !== 'tiendita10') {
            alert("Código de descuento incorrecto. Ingrese nuevamente.")
        } else {
            let descuento = parseInt(codigoDescuento.slice(8, 10));
            let precioDescuento = arr.sumaTotal()-(arr.sumaTotal()*descuento/100);
            return document.getElementById("sumaTotal").innerHTML = precioDescuento
        }
        
    }
}


// AJAX para enviar datos a boleta
const botonPagar = document.getElementById("botonPagar")



