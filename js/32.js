// Async / await 
// Es ña base de todo el desarrollo moderno
// Podemos escribir el codigo y decirle a JS que vaya haciendo
// las tareas rapidas mientras cargan las demoradas


//Simulacion de conexion a unservidor y descarga de base de datos de clientes
function descargarNuevosClientes() {
    return new Promise( resolve => { //forzamos a que se cumpla
        console.log('Descargando clientes... espere')
        //Envia el mensaje solo una vez luego de 5 segundos
        setTimeout ( () => {
            resolve('Los clientes fueron descargados ✅')
        }, 5000)//Esta en ms = 5 seg
    })
}


async function app() { //Es una funcion asincrona
    try {
        const resultado = await descargarNuevosClientes();
        console.log(resultado)
    } catch (error) {   
    }
}

app();

console.log('Este codigo no se bloquea')
