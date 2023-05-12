/*Importación de clases*/
import {CuentaCorriente} from './CuentaCorriente.js';
import {Cliente} from './Cliente.js'


/*******************CLIENTE LEONARDO****************/ 
const cliente = new Cliente('Leonardo','123456','987456321');
console.log(cliente);
/*
cliente.nombreCliente ='Leonardo';
cliente.dniCliente='123456';
cliente.rutCliente='987456321';
*/


const cuentaDeLeonardo = new CuentaCorriente(cliente, '654987', '01');
/*
cuentaDeLeonardo.numero='654987';
cuentaDeLeonardo.agencia='01';
cuentaDeLeonardo.cliente= cliente;
*/

let saldo = cuentaDeLeonardo.verSaldo();

saldo = cuentaDeLeonardo.depositoEnCuenta (100);
/*console.log('El saldo actual es (CuentaLeonardo)'+ saldo);*/

/*******************CLIENTE MARIA****************/

const cliente2 = new Cliente('Maria','1234577','654123789');
console.log(cliente2);
/*
cliente2.nombreCliente ='Maria';
cliente2.dniCliente='1234577';
cliente2.rutCliente='654123789';
*/

const cuentaDeMaria = new CuentaCorriente(cliente2, '654987','002');
/*
cuentaDeMaria.numero='654987';
cuentaDeMaria.agencia='02';
cuentaDeMaria.setCliente= cliente2;
*/

/*Mantiene ocultos los datos privados*/
/*
if (cuentaDeMaria.cliente)
console.log(cuentaDeMaria.cliente)
else
console.log(cuentaDeMaria);
*/

/*Mantiene los datos visibles*/ 
/*console.log(cuentaDeMaria.getCliente);*/
cuentaDeMaria.cliente=0;

let parametroValor= 100;


cuentaDeLeonardo.transferirParaCuenta(parametroValor,cuentaDeMaria);

const saldoMaria = cuentaDeMaria.verSaldo ();


console.log(CuentaCorriente.cantidadCuentas);

/*
console.log('Cuenta de Maria', cuentaDeMaria);
*/
/*
const saldoMaria = cuentaDeMaria.verSaldo ();

console.log('El saldo actual es (CuentaMaria)'+ saldoMaria);

const saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log('El saldo actual es (CuentaLeonardo)'+ saldoLeonardo);
*/

/*
const cliente1 = new Cliente ();

cliente1.nombreCliente="José";
cliente1.dniCliente="45612987";

const cuentaCorriente1 = new CuentaCorriente();
cuentaCorriente1.numero="8989898"
cuentaCorriente1.saldo=50000;
cuentaCorriente1.agencia="Suc.20"

const cliente2 = new Cliente ();

cliente2.nombreCliente ="Leonardo";
cliente2.dniCliente="13804050";

const cuentaCorriente2 = new CuentaCorriente();
cuentaCorriente2.numero="123456789";
cuentaCorriente2.saldo="1000";
cuentaCorriente2.agencia="Central"

cuentaCorriente2.depositoEnCuenta(200);
console.log(cuentaCorriente2.saldo);
*/

