//Tipos de datos

//ALFANUMERICO

//let nombrePasajero = "Pedro Pascal";
//console.log(nombrePasajero);
//nombrePasajero = "Ramón Silva"
//console.log(nombrePasajero);

//NUMÉRICO

let valorBoleto = 1000;
const impuestoAeropuerto = 100;
const porcentajeTasaEmbarque = 60/100;
var gestionAgencia = 100;

//LOGICOS (true, false)

let boletoActivo = true;

//OPERACIONES ARITMETICAS
//suma

let totalBoletos = valorBoleto + porcentajeTasaEmbarque + gestionAgencia;

//console.log(totalBoletos);

//orden de precedencia
let totalBoletosForma2 = (valorBoleto +impuestoAeropuerto)*porcentajeTasaEmbarque + gestionAgencia;
//console.log(totalBoletosForma2);

//Concatenacion de textos

let nombrePasajero = "Leonardo";
let apellidoPasajero = "DiCaprio";

let nombreCompleto = nombrePasajero + apellidoPasajero;
let pasaporte = "1000" + "12";
let multiplicacion = parseInt("1000") / parseFloat ("10"); //parseint (NUMERO ENTERO)- parseFloat (NUMERO DECIMAL)
console.log(nombreCompleto);
console.log(pasaporte);
console.log(multiplicacion);