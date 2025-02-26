const producto = {
    nombreProducto : 'Monitor 20"',
    precio :300,
    disponible : true
}

//Forma anterior de traer propiedades de un objeto
/*
const precioProducto = producto.precio;
const nombreProducto = producto.nombreProducto;

console.log(precioProducto)
console.log(nombreProducto)
*/
// Destructuring (Nueva Forma)
//Extrae el valor y crea la variable todo en un solo paso  
//const {nombreProducto} = producto;

const {precio, nombreProducto} = producto;

console.log(precio)
console.log(nombreProducto)