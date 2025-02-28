/** Funciones que retornan un Valor*/

let total = 0;

function agregarCarrito(precio) {
    return total += precio
}


function calcularImpuesto(total) {
    return 1.15*total
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(650);


console.log(`Total a pagar sin impuestos: ${total}`) /*Enviando el total como string*/

const totalAPagar = calcularImpuesto(total);

console.log('Total a pagar con impuestos: ', totalAPagar) /** Enviando el total como number*/