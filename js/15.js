//Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']


//Este seria un ejemplo de un carrito de compras
const carrito = [
    { nombre: 'Monitor 20"', precio: 500},
    { nombre: 'Television 50"', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 600},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 900}
]

//forEach

meses.forEach(function(mes) {
    if(mes == 'Marzo'){
        console.log('Marzo si existe')
    }
});

//Includes 

const resultado = meses.includes('Marzo');
const resultado2 = carrito.includes('Celular');
console.log(resultado) //True
console.log(resultado2)//False porque includes no sirve con objetos

// 'Some' ideal para arreglo de objetos

resultado3 = carrito.some(function(producto) {
    return producto.nombre == 'Celular'; //Si celular existe retorna true
})

console.log(resultado3)// True

//Esa busqueda con 'some' se puede hacer mas corta usando un Arrow Function:

async (params) => {
    
}
//Los Arrow Methods tienen el nombre de la variable en este caso carrito,
// junto con el nombre de la funcion, en este caso some
const resultado4 = carrito.some(producto =>producto.nombre == 'Celular'); 

console.log(resultado4)// True

/*¿Cómo haríamos si quisieramos sumar todos los
valores del carrito de compras?*/

//Respuesta: Usamos reduce

const resultado5 = carrito.reduce((total, producto) => total + producto.precio, 0); 
//Si el cuerpo de la función es de una sola línea, se puede omitir el return y las llaves {}
console.log(resultado5); // 3500


// FILTER, el mas util de todos


const resultado6 = carrito.filter(function(producto){
    return producto.precio > 400 //Le decimos que filtre todos
    // los productos cuyo precio sea mayor a 400
});

console.log(resultado6) 

const resultado7 = carrito.filter(function(producto){
    return producto.nombre != 'Celular' //Le decimos que filtre todos
    // los productos cuyo nombre sea diferente al celular
});

console.log(resultado7) 

//Reescrito como Arrow Function
const resultado8 = carrito.filter((producto) => producto.nombre != 'Celular') 

console.log(resultado8) 

/* NOTA
En JavaScript, hay dos formas de comparar si algo es diferente:

!= (Diferente con conversión implícita)
!== (Diferente estricto, sin conversión)
1. != (Diferente con conversión de tipo)
El operador != compara si dos valores son diferentes, pero convierte tipos si es necesario.


console.log(5 != '5'); // false (JavaScript convierte '5' en número y lo compara)
console.log(true != 1); // false (true se convierte en 1)
console.log(null != undefined); // false (son tratados como iguales en comparaciones débiles)
🚨 Problema: Puede generar comparaciones inesperadas debido a la conversión de tipos.

2. !== (Diferente Estricto)
El operador !== compara si dos valores son diferentes, pero sin hacer conversión de tipos.


console.log(5 !== '5'); // true (porque uno es número y el otro string)
console.log(true !== 1); // true (porque uno es booleano y el otro número)
console.log(null !== undefined); // true (son de tipos diferentes)

✅ Ventaja: Es más seguro porque no permite conversiones inesperadas.
*/

