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



function descargarUltimosPedidos() {
    return new Promise( resolve => { //forzamos a que se cumpla
        console.log('Descargando pedidos... espere')
        //Envia el mensaje solo una vez luego de 5 segundos
        setTimeout ( () => {
            resolve('Los pedidos fueron descargados ✅')
        }, 3000)//Esta en ms = 3 seg
    })
}

async function app() { //Es una funcion asincrona
    try {
        //Metodo poco eficiente
        /*const clientes = await descargarNuevosClientes();
        const pedidos = await descargarUltimosPedidos();
        console.log(clientes)
        console.log(pedidos)*/

    //Con esta modificacion las dos promise se ejecutan al tiempo y
    // cada una termina ya en el tiempo estipulado una en 3 y otra en 5 segundos,
    // A diferencia de la otra forma que era a los 8, ganamos performance
    const  resultado = await Promise.all([ descargarNuevosClientes(), descargarUltimosPedidos() ])
    console.log(resultado[0]);    
    console.log(resultado[1]);    
    } catch (error) {   
    }
}

app();

console.log('Este codigo no se bloquea')


