//"use strict" // Correr Javascript en modo estricto

const producto = {
    nombreProducto : 'Monitor 20"',
    precio :300,
    disponible : true
}

Object.freeze(producto); //freeze congela el objeto para no poder
// modificarlo ni agregarle mas atributos ni eliminarlo
//producto.imagen = 'imagen.jpg';

Object.seal(producto); //No permite agregar ni eliminar pero si modificar

console.log(Object.isFrozen(producto));