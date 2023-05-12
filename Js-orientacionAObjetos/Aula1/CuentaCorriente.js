import {Cliente} from "./Cliente.js";

export class CuentaCorriente 
{
    #cliente;
    numero;
    agencia;
    #saldo;

    /*set y get protegen los datos privados*/ 
    set setCliente (valor){
        if(valor instanceof Cliente)
            this.#cliente = valor;
    }

    get getCliente(){
        return this.#cliente;
    }
    /*El saldo siempre empezará en 0*/
    constructor() {
        this.#cliente= null;
        this.numero = '';
        this.agencia = '';
        this.#saldo = 0;
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
    transferirParaCuenta(valor,cuentaDestino){
        this.retirarEnCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }
}