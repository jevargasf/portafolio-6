# portafolio-6

Implementación de backend básico para comunicar frontend desarrollado en portafolio 4. La aplicación del frontend se comunica con el servidor mediante axios (y fetch en la app principal) y usando el protocolo API REST, es decir, permite leer, crear, actualizar y la información almacenada en archivos json para los productos y las ventas.

Nuevas funcionalidades:
    - Plataforma del administrador, donde se pueden ver los productos, crear un nuevo registro, actualizar la información de un producto con su id y borrar un producto por su id. Además, la plataforma permite listar todas las ventas registradas en la plataforma y permite conseguir una venta en específico según su id.
    - Venta de productos: permite desplegar la compra del cliente con toda la información de sus productos. La compra es confirmada a través del botón "Confirmar compra", el cual envía la data de la factura al json de ventas y actualiza el stock en el json de productos.