export class CuentaCorriente {
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