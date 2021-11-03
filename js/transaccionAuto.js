import Transaccion from "./transaccion.js";

export class
TransaccionAuto
extends Transaccion {
    constructor(id, titulo, transaccion, descripcion, precio, puertas, kms, potencia) {
        super(id, titulo, transaccion, descripcion, precio);
        this.puertas = puertas;
        this.kms = kms;
        this.potencia = potencia;
    }
}