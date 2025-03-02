// This

const reservacion = {
    nombre: 'Henry',
    apellido: 'Rivera',
    total: 1500,
    pagado: false,
    informacion: function() { //No se puede usar un Arrow F aqui ya que haria ref a la ventana total, en cambio el function hace referencia al objeto en cuestion
        //Con un Arrow Function daria undefined
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`)
    }//this en este contexto hace referencia al objeto sobre el cual se esta haciendo llamar 
}

reservacion.informacion();

