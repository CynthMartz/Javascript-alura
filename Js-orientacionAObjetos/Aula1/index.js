/*Definicion de clases*/

class Cliente {
    nombreCliente;
    dniCliente;
    rutCliente;
}

class CuentaCorriente {
    numero;
    #saldo;
    agencia;

    /*El saldo siempre empezará en 0*/
    constructor() {
        this.#saldo = 0;
        this.numero = '';
        this.agencia = '';
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }
    retirarEnCuenta(valor) {
        if (valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;    
    }
    verSaldo(){
        return this.#saldo;
    }
}

cuentaDeLeonardo = new CuentaCorriente();

let saldo = cuentaDeLeonardo.verSaldo();

console.log('El saldo actual es '+ saldo);



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

