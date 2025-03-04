/*function obtenerEmpleados() {

    const archivo = 'js/empleados.json';

    //Usamos fetch API, toma como valor una URL 
    //o un archivo
    fetch(archivo)//Utilizamos la fetch API // Entonces creamos un resultado
        .then( resultado => resultado.json()) //Especificamos que nuestro resultado sera un JSON - Puede ser text() tambien 
        .then( datos => {  // Entonces decimos que vamos a acceder a esos datos y los imprimimos

        const { empleados } = datos; //Hacemos Estructuring y guardamos los datos en un arreglo
        console.log(empleados)


        
        //Como queremos mostrar los datos sin modificarlos usamos un forEach

        empleados.forEach(empleado => {


            
            //Si quisieramos mostrarlo en el HTML
            console.log(empleado.id) 
            console.log(empleado.nombre) 
            console.log(empleado.cargo) 

            document.querySelector('.contenido').textContent += empleado.nombre;

        });

    });
}

//Suponiendo que esto fuera una respuesta de una base de datos aqui extraemos esos datos 

obtenerEmpleados();*/


//Haciendo la misma funcion pero asincrona y con await, no con promises

async function obtenerEmpleados() {

    const archivo = 'js/empleados.json';


    const resultado = await fetch(archivo);
    const datos = await resultado.json() // Aqui si debe depender una de otra hasta que no se lean bien los archivos no se podran mostrar
    console.log(datos)
}



obtenerEmpleados();