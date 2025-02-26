/*var se usaba anteriormente, hoy se usa let y cons*/

// Variables con let, sigue las mismas reglas de var

let producto = 'Audifonos Gamer'; /*Iniciar variable y asignarle valor*/
//En JS el ";" no es obligatorio

let disponible; // Variable sin asignarle valor

producto = true; //Reasignando valor de la variable

/*JS es un lenguaje dinámico porque guarda el tipo
de dato en el valor que tiene y no en la variable*/


/*Se le puede asignar valor a varias variables sin necesidad de usar, var
en todas, simplemente, separando por comas*/
let producto1 = 'computadora',
    disponible1 = true,
    categoria = 'Computadoras';

// var 1disponible; No se pueden nombrar
// variables que empiecen por números o guiónes

// Estilos para nombrar variables

let nombre_producto = 'Monitor HD'; //Underscore
let nombreProducto = 'Monitor HD'; //Camelcase
let NombreProducto = 'Monitor HD'; //Pascal case (Se usa para nombrar clases)
let nombreproducto = 'Monitor HD'; //lowerase


/*JS es sensible a mayusculas y minusculas*/
//esto se usa para enviar mensajes o valores
// a la consola del navegador, con esto se
// depura facilmente código

console.log(producto)



