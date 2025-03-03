

//Con query selector definimos que parte de nuestro
// documento html (document) hacemos referencia y para que sea mas facil
// su manejo lo agregamos a una variable 

const boton = document.querySelector('#boton')

//Queremos que cuando pedirle permisos al usuario  le

boton.addEventListener('click', function() { //alguien le da click al boton

    Notification.requestPermission() // preguntemos si desea dar permiso a las notificaciones - Notification maneja auto el reject y result
        .then(resultado => console.log('El resultado es: ',resultado)) //Si se acepta el resultado = granted
});

if(Notification.permission === 'granted') { //El usuario acepto los permisos de notificacion (granted)
    new Notification('Esta es una notificacion', { //Titulo de la notificacion
        icon: 'img/image.jpeg', //Icono de la notificacion
        body: 'Gracias por Aceptar' //Cuerpo de la notificacion
    })
}
