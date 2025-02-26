/** Arreglos o Arrays */

const numeros = [10, 20, 30, 40, 50]

console.table(numeros)

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril')

console.table(meses);

const arreglo = ["Hola", 10, true, 'sisi'];

console.log(arreglo)

/** Acceder a los valores de un arreglo */
// Al igual que en otros lenguajes, el indice de los arreglos
//inicia en cero

console.log(numeros[4])

//Longitud de un arreglo

longitudArreglo = console.log(meses.length)


//Recorrer e imprimir un arreglo 
numeros.forEach(function(numero){
    console.log(numero)
})

