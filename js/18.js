/** Funciones con parametros */

function sumar(numero1 = 0, numero2 = 0){ /** Parametros */
    console.log(numero1 + numero2);
}

sumar(3,5); /** Argumentos */
sumar(3,6);
sumar(10,8);


const sumar2 = function(numero1 = 0, numero2 = 0) {
    console.log(numero1 + numero2);
}

sumar2(5,10);