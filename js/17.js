const numero1 = 20;
const numero2 = '20';

console.log(parseInt(numero2)) //parseInt es una funcion
console.log(numero1.toString()) // toString es un metodo =
// nombre de la variable seguido de un punto


//Este es otro ejemplo de una funcion
// Se puede llamar en cualquier parte del
// codigo y tampoco esta ligada a un objeto

console.log(saludar())

function saludar() {
    return 'Hola soy Henry'
}

console.log(saludar())


/**Otro ejemplo de Metodo */
/** Un metodo es una funcion que pertenece a un
 * objeto y se llama a traves de ese mismo objeto */

const usuario = {
    nombre: 'Carlos',
    saludar: function() {
        return `Hola, soy ${this.nombre}`;
    }
}

console.log(usuario.saludar());