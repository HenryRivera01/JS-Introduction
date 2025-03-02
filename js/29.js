//try - catch
//En js el codigo funciona hasta que encuentre un error,
// y a veces es dificil saber en donde se encuentra dicho error, para ello usamos try catch
//No se debe utilizar en todo el codigo, solo en situaciones especificas como login

const numero1 = 20;
const numero3 = 30;

console.log(numero1)

//console.log(numero2)//Aqui hay un error porque numero2 no esta definido, asi que num3 no se imprimira

try {
    console.log(numero2)
} catch (error) {
    console.log(error)
}

console.log(numero3)

