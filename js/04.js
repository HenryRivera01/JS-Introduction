/** Tipos de datos* */

const producto = "monitor de 20 pulgadas"
const producto2 = 'Monitor HD'
const producto3 = new String('Monitor de 30"');
/*Al crear una variable con un constructor se crea como objeto*/

console.log(producto)
console.log(producto3)

/*Métodos para Strings*/

console.log(producto3.length) //Conocer longitud de String

console.log(producto.lastIndexOf('20')); // Busca el valor 20 en una cadena y devuelve el indice 
//Cuando devuelve -1 no lo encontró

console.log(producto.includes('20')); //Igual pero devuelve un booleano





