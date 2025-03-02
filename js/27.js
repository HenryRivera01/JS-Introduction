// POO
//Para la POO JS utiliza prototypes

//Object Literal 
// Se colocan keys y values pero no suelen ser dan dinamicos
const producto = {
    nombre: 'Tablet',
    precio: 500
}

//Object Constructor de Cliente

function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido=apellido;
}

Cliente.prototype.formatearCliente = function() {
    return `El nombre del cliente es ${this.nombre} y su apellido es ${this.apellido}`
}


//Object Constructor
//Se escribe como una clase : Es la forma de almacenar
//La clase es el contenedor de todos los atributos metodos y funciones de un objeto
function Producto (nombre, precio, disponibilidad) { //Recibe parametros
    this.nombre = nombre;
    this.precio = precio;
    this.disponibilidad = disponibilidad;
}


//Si quisieramos crear una funcion que le de formato al producto y le agregue al precio
//La manera correcta seria usando prototype, nos permite
//crear funciones que solo se utilizan en un objeto en especifico

Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de: $${this.precio}`
}

//Intancias de Producto
const producto2 = new Producto('Monitor Curvo de 49"',500, true);//Instancia de la clase Producto
const producto3 = new Producto('Laptop Asus TUF Gaming', 1600, false)
const producto4 = new Producto('Mouse gaming Razer Viper', 80, true)


//Instancias de Cliente
const cliente1 = new Cliente('Henry','Rivera')

//Imprimir en Consola
console.log(producto2.formatearProducto())
console.log(producto3)
console.log(producto4)
console.log(cliente1.formatearCliente())






