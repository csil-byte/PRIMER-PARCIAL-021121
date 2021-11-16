export const transacciones = [{ "id": 1, "titulo": "Bonneville", "transaccion": "venta", "descripcion": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.", "precio": 85375649, "puertas": 1, "kms": 5829468, "potencia": 4165 },
    { "id": 2, "titulo": "Savana", "transaccion": "alquiler", "descripcion": "Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.", "precio": 65071472, "puertas": 3, "kms": 1932853, "potencia": 1585 },
    { "id": 3, "titulo": "Esprit", "transaccion": "alquiler", "descripcion": "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.", "precio": 89170944, "puertas": 2, "kms": 8963416, "potencia": 1888 },
    { "id": 4, "titulo": "Scirocco", "transaccion": "alquiler", "descripcion": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.", "precio": 502455, "puertas": 3, "kms": 6738400, "potencia": 4801 },
    { "id": 5, "titulo": "Century", "transaccion": "venta", "descripcion": "Fusce consequat. Nulla nisl. Nunc nisl.", "precio": 9370169, "puertas": 5, "kms": 2210169, "potencia": 1235 },
    { "id": 6, "titulo": "W201", "transaccion": "permuta", "descripcion": "In sagittis dui vel nisl.", "precio": 2898481, "puertas": 4, "kms": 7297475, "potencia": 2612 }
];

export default class Anuncio {
    constructor(id, titulo, F_transaccion, descripcion, precio, ) {
        this.id = id;
        this.titulo = titulo;
        this.F_transaccion = F_transaccion;
        this.descripcion = descripcion;
        this.precio = precio;

    }
}
export function getMaxId() {
    if (transacciones.length == 0) {
        return 0;
    } else {
        return transacciones.reduce((prev, current) => (prev.id > current.id) ? prev : current).id;
    }
}