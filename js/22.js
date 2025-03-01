/*Estructuras de Control*/

const puntaje = 1000;

if (puntaje === 1000) {
    console.log(`El puntaje es igual a ${puntaje}`)
} else {
    console.log(`El puntaje es diferente de ${puntaje}`)
}

const efectivo = 1000;
const carrito = 800;

if (efectivo>=carrito) {
    console.log('El usuario tiene el saldo suficiente')
} else {
    console.log('Fondos insuficientes')
}

const rol = 'EDITOR';

if(rol === 'ADMINISTRADOR'){
    console.log('ACCESO A TODO EL SISTEMA')
}else if(rol === 'EDITOR'){
    console.log('ACCESO COMO EDITOR - FUNCIONES LIMITADAS')
}
else {
    console.log('No tienes acceso')
}