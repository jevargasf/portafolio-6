// Arreglo productos carrito y métodos para manipularlo
let carrito = {
    productos: JSON.parse(localStorage.getItem("carrito")) || [],
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
    },
    datosVenta: function () {
        console.log(this.productos)

    }
}



// Llamada a funciones localStorage cuando carga la página
 window.addEventListener('DOMContentLoaded', e => { pintarLocalStorage(carrito) })

// Manipulación de localStorage

// Función para pintar en el carrito la data almacenada en localStorage
const pintarLocalStorage = (arr) => {
    console.log(arr.productos)
        const cuerpoCarrito = document.getElementById("cuerpoCarrito"); 
        const conteoProductos = document.getElementById("conteoProductos")
        const total = document.getElementById("totalProductos")
        const inputDcto = document.getElementById("inputDescuento");
        arr.productos.forEach(item => {
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
                
                cuerpoCarrito.appendChild(filaNuevoProducto);
            })
    }



    // Función aplica descuento
function aplicaDescuento (arr) {
        let codigoDescuento = document.getElementById("textoDescuento").value;
        if (codigoDescuento !== 'tiendita10') {
            alert("Código de descuento incorrecto. Ingrese nuevamente.")
        } else {
            let descuento = parseInt(codigoDescuento.slice(8, 10));
            let precioDescuento = arr.sumaTotal()-(arr.sumaTotal()*descuento/100);
            return document.getElementById("sumaTotal").innerHTML = precioDescuento
        
    }
}

// AJAX para enviar datos a boleta
const botonPagar = document.getElementById("botonPagar")
botonPagar.addEventListener('click', ()=>carrito.datosVenta())
//Botón aplica descuento 
const botonDescuento = document.getElementById("botonDescuento")
botonDescuento.addEventListener('click', e => aplicaDescuento(carrito));




