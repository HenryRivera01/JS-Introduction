// Promise 

//Representa una operacion asincrona que puede que se cumpla o puede que no

//En los promises existen tres valores posibles:

//Pending (Pendiente): Ni se ha cumplido ni se ha rechazado
//Fulfilled (Cumplido): Ya se ha cumplido
//Rejected (Rechazado): No se logro cumplir y se ha rechazado



const usuarioAutenticado = new Promise( (resolve, reject) => {//Promise siempre resive esos dos parametros
    const auth = true;

    if(auth) {
        resolve('Usuario Autenticado con Exito ✅'); //El promise se cumple
    }else{
        reject('Usuario No Autenticado ❌'); //El promise no se cumple
    }
});

//Como acceder a los valores del promise?
usuarioAutenticado
    .then( resultado => console.log(resultado))
    .catch( error => console.log(error));

