//ForEach y Map
//Son metodos exclusivos de arreglos
// Detectan automaticamente cuantos elementos hay y reccorren hasta que no haya mas

const carrito = [
    { nombre: 'Monitor 20"', precio: 500 },
    { nombre: 'Television 50"', precio: 700 },
    { nombre: "Tablet", precio: 300 },
    { nombre: "Audifonos", precio: 200 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Celular", precio: 600 },
    { nombre: "Bocinas", precio: 300 },
    { nombre: "Laptop", precio: 900 },
  ];



//ForEach
//Util cuando se quiera iterar sobre un array y mostrar en pantalla (HTML) o consola
carrito.forEach( producto => console.log(producto.precio));

//Map
//Util cuando se quiera crear un nuevo arreglo con lo que se
// quiera retornar, en ese caso los nombres implicitamente devuelve siempre un nuevo array
 

const arreglo2 =  carrito.map( producto => console.log(producto.nombre));
