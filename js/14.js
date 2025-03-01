/** Arreglos o Arrays */

const numeros = [10, 20, 30, 40, 50]

const meses = new Array('Febrero', 'Marzo', 'Abril', 'Mayo')

const arreglo = ["Hola", 10, true, 'sisi'];

/*
numeros.push(60, 45); //Push agrega valores al final del arreglo 

numeros.unshift(26,83) //Agregando Valores al comienzo del arreglo

//Para eliminar elementos del arreglo

meses.pop(); //Elimina el ultimo elemento
meses.shift();//Elimina el primer elemento

meses.splice(1,1)//Elimina teniendo en cuenta el
//indice donde se encuentra el valor y cuantos elementos de ahi en adelante

console.table(numeros)
console.table(meses);
*/

/*Actualmente no se recomienda modificar arreglos 
de estas maneras, en cambio se busca crear un nuevo arreglo
Usando Rest Operator o Spread Operator*/

//Recordar que los corchetes '[]' es un buen indicativo de que es un arreglo

const nuevoArreglo = [...meses, 'Junio'] // Agregando Junio al Final en un nuevo arreglo

const nuevoArreglo2 = ['Enero',...meses] // Agregando Enero al inicio

console.table(nuevoArreglo2); 


