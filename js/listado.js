import { crearListadoIndex } from "./indexListado.js";

const $divTablaIndex = document.getElementById("divTablaIndex");
const anuncios = JSON.parse(localStorage.getItem('transacciones')) || [];
generarListado();

function generarListado() {
    if (anuncios.length > 0) {
        $divTablaIndex.appendChild(crearListadoIndex(anuncios));
    } else {
        $divTablaIndex.innerHTML = "<p>Por el momento no hay autos</p>"
    }

}