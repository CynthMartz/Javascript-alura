import {Cliente} from "./Cliente.js";

export class CuentaCorriente 
{
    #cliente;
    numero;
    agencia;
    #saldo;
    static cantidadCuentas=0;

    /*set y get protegen los datos privados*/ 
    set cliente (valor){
        if(valor instanceof Cliente)
            this.#cliente = valor;
    }

    get cliente(){
        return this.#cliente;
    }
    /*El saldo siempre empezará en 0*/
    constructor(cliente, numero, agencia) {
        this.cliente=cliente;
        /* this.#cliente= null;*/
        this.numero = numero;
        this.agencia = agencia;
        this.#saldo = 0;
        CuentaCorriente.cantidadCuentas++;
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