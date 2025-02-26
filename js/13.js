/**En este ejercicio se busca unir objetos sin modificar el uno o el otro */

const producto = {
    nombreProducto : 'Monitor 20"',
    precio :300,
    disponible : true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

//Se usa el restOperator

const nuevoProducto = { ...producto, ...medidas };

console.log(nuevoProducto);

/*{nombreProducto: 'Monitor 20"', precio: 300, disponible: true, peso: '1kg', medida: '1m'}
disponible
: 
true
medida
: 
"1m"
nombreProducto
: 
"Monitor 20\""
peso
: 
"1kg"
precio
: 
300
[[Prototype]]
: 
Object*/