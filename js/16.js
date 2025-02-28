//Declaración de función

function sumar() {
    console.log(10+10);
}

sumar();

//Expresion de la funcion

const sumar2 = function() {
    console.log(3+3);
}

sumar2();

// IFE: Funciones que se llaman ellas mismas
//Sirve mas que nada para proteger las variables
// De que no se pueda leer en otros archivos
(function() {
    console.log('Esto es una funcion')
})();

/** HOISTING
 JS Se ejecuta en dos vueltas, en la primera guarda
 o reconoce las funciones que tengan la palabra
 reservada function y en la segunda hace efectivo los llamados a 
 esas funciones (La ejecucion)
 */