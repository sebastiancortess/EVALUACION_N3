document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formAgregarProducto');
    const listaDeCompras = document.getElementById('listaDeCompras');

    cargarCarrito();

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const nombreProducto = document.getElementById('nombreProducto').value;
        const cantidadProducto = document.getElementById('cantidadProducto').value;
        agregarAlCarrito(nombreProducto, cantidadProducto);
        guardarCarrito();
    });

    function agregarAlCarrito(nombre, cantidad) {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = `${nombre} - Cantidad: ${cantidad}`;
        listaDeCompras.appendChild(li);
    }

    function guardarCarrito() {
        const productos = [];
        listaDeCompras.querySelectorAll('.list-group-item').forEach(item => {
            productos.push(item.textContent);
        });
        localStorage.setItem('carrito', JSON.stringify(productos));
    }

    function cargarCarrito() {
        const productos = JSON.parse(localStorage.getItem('carrito'));
        if (productos) {
            productos.forEach(producto => {
                const [nombre, cantidad] = producto.split(' - Cantidad: ');
                agregarAlCarrito(nombre, cantidad);
            });
        }
    }
});