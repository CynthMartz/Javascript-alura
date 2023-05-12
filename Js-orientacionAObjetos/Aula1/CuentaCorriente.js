export class CuentaCorriente 
{
    cliente;
    numero;
    agencia;
    #saldo;

    /*El saldo siempre empezará en 0*/
    constructor() {
        this.cliente= null;
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