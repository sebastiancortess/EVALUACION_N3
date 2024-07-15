// Mostrar la lista de compras al cargar la página
$(document).ready(function() {
    mostrarListaDeCompras();

    // Agregar un producto cuando se envía el formulario
    $('#formAgregarProducto').on('submit', function(event) {
        event.preventDefault();
        agregarAListaDeCompras($('#nombreProducto').val(), $('#cantidadProducto').val());
        $('#nombreProducto').val('');
        $('#cantidadProducto').val('');
    });
});

// Función para mostrar la lista de compras en la página
function mostrarListaDeCompras() {
    var listaDeCompras = JSON.parse(localStorage.getItem("listaDeCompras")) || [];
    var elementoListaDeCompras = $("#listaDeCompras");
    elementoListaDeCompras.empty();
    listaDeCompras.forEach(function(producto, indice) {
        elementoListaDeCompras.append('<li class="list-group-item">' + producto.nombre + ' - ' + producto.cantidad + ' <button onclick="eliminarDeListaDeCompras(' + indice + ')" class="btn btn-danger btn-sm float-right">Eliminar</button></li>');
    });
}

// Función para eliminar productos de la lista de compras
function eliminarDeListaDeCompras(indice) {
    var listaDeCompras = JSON.parse(localStorage.getItem("listaDeCompras")) || [];
    listaDeCompras.splice(indice, 1);
    localStorage.setItem("listaDeCompras", JSON.stringify(listaDeCompras));
    mostrarListaDeCompras();
}

// Función para agregar productos a la lista de compras
function agregarAListaDeCompras(nombre, cantidad) {
    var listaDeCompras = JSON.parse(localStorage.getItem("listaDeCompras")) || [];
    var producto = { nombre: nombre, cantidad: cantidad };
    listaDeCompras.push(producto);
    localStorage.setItem("listaDeCompras", JSON.stringify(listaDeCompras));
    mostrarListaDeCompras();
}