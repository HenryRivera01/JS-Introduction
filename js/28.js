// CLASES

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
  
  formatearProducto() {
    return `El producto ${this.nombre} tiene un precio de $${this.precio}`;
  }

  consultarPrecio() {
    console.log(this.precio);
  }

}

const producto2 = new Producto('Monitor Curvo MSI 120hz', 129);
const producto3 = new Producto('Mouse gamer Corsair', 89)

//Aplicando Herencia de Producto en Libro

class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio); //Hereda el constructor de su padre 'Producto', permitiendo recibir nombre y precio
        this.isbn = isbn;
    }

    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es #${this.isbn}`;
      }
}

const libro = new Libro('La cuadra', 120, '324241234')


console.log(libro.formatearProducto())
console.log(producto2.formatearProducto())
