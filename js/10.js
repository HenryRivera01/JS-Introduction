/**Objetos */

const producto = {
    nombreProducto : 'Monitor 20"',
    precio :300,
    disponible : true
}

console.log(producto.precio)//Acceder al valor del atributo precio

console.log(producto["precio"])//Otro m[etodo de acceder al valor del atributo precio

producto.imagen = 'imagen.jpg';


//Eliminar propiedades
delete producto.disponible;
console.log(producto)