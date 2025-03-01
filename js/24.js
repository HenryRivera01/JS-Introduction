// For Loop

//Ejercicio establecer cuales numeros del 1 al 100
// son pares e impares y separarlos en dos arreglos

let numerosPares = [];
let numerosImpares = [];
let topeSuperior = 150;

for (let i = 0; i <= topeSuperior; i++) {
  if (i % 2 === 0) {
    numerosPares.push(i);
  } else {
    numerosImpares.push(i);
  }
}

console.table(numerosPares);
console.table(numerosImpares);

//Ejercicio 2
// Hacer un for que recorra este carrito de compras

const carrito = [
  { nombre: 'Monitor 20"', precio: 500 },
  { nombre: 'Television 50"', precio: 700 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Audifonos", precio: 200 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Celular", precio: 600 },
  { nombre: "Bocinas", precio: 300 },
  { nombre: "Laptop", precio: 900 },
];

for (let i = 0; i < carrito.length; i++) {
  console.log(carrito[i]);
}

//While Loop

let i = 0; //Indice

while (i <= 100) {
  if (i % 2 === 0) {
    console.log(`El numero ${i} es par`);
  }else{
    console.log(`El numero ${i} es impar`);
  }
  i++;
}

//Do While Loop

let o = 0;

do {
    console.log(o)
    o++;
} while (o < 10);