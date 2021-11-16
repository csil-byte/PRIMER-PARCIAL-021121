import { transacciones as trans } from "./Anuncio.js";
import { Anuncio_Objeto } from "./Anuncio_Objeto.js";
import { crearTabla } from "./crearTabla.js"; //Importamos la función crearTablacc
import { getMaxId } from "./Anuncio.js"; //devuelve el id más grande
localStorage.setItem('transacciones', JSON.stringify(trans));

const $formulario = document.forms[0];
const $divTabla = document.getElementById("divTabla");
const transacciones = JSON.parse(localStorage.getItem("transacciones")) || [];
const $divAlert = document.getElementById("divAlert");

//localStorage.setItem('transacciones', JSON.stringify(trans));


actualizarTabla(transacciones);

//Devuelve ID al hacer click en elemento de la tabla
window.addEventListener("click", (e) => {
    if (e.target.matches("td")) {
        const id = e.target.parentElement.dataset.id;
        const transaccionElegida = transacciones.find((transaccion) => transaccion.id == id);
        cargarFormulario(transaccionElegida);
    } else if (e.target.matches("#btnEliminar")) {
        handlerEliminar(parseInt($formulario.txtId.value));
        $formulario.reset();
    }
});


//previene el comportamiento por defecto del formulario
$formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const {
        txtId,
        txtTitulo,
        F_transaccion,
        txtDescripcion,
        txtPrecio,
        txtPuertas,
        txtKms,
        txtCantidadPotencia,
    } = $formulario;

    //Debe estar tal cual el HTML
    const form_anuncio = new Anuncio_Objeto(txtId.value, txtTitulo.value,
        F_transaccion.value, txtDescripcion.value, txtPrecio.value,
        txtPuertas.value, txtKms.value, txtCantidadPotencia.value);
    console.log(form_anuncio);

    const id = getMaxId(transacciones);

    if (form_anuncio.id === "") { //alta}
        form_anuncio.id = id + 1;
        handlerCrear(form_anuncio);
    } else { //modificacion 
        handlerModificar(form_anuncio);
    }
    $formulario.reset();

})

//carga el formulario con los datos de la transaccion
function cargarFormulario(transaccion) {
    const {
        txtId,
        txtTitulo,
        F_transaccion,
        txtDescripcion,
        txtPrecio,
        txtPuertas,
        txtKms,
        txtCantidadPotencia,

    } = $formulario;

    txtId.value = transaccion.id;
    txtTitulo.value = transaccion.titulo;
    F_transaccion.value = transaccion.F_transaccion;
    txtDescripcion.value = transaccion.descripcion;
    txtPrecio.value = transaccion.precio;
    txtPuertas.value = transaccion.puertas;
    txtKms.value = transaccion.kms;
    txtCantidadPotencia.value = transaccion.potencia;


}

//hide delete button if table is empty or if form is empty, else show button normally
function hideDeleteButton() {
    if (transacciones.length === 0 || $formulario.txtTitulo.value === "") {
        $formulario.btnEliminar.style.display = "none";
    } else {
        $formulario.btnEliminar.style.display = "block";
    }
}

function alerta(texto) {


    $divAlert.innerHTML = "<div id='textoAlerta'>" + texto + "</div>";

    setTimeout(() => {
        $divAlert.innerHTML = "";
    }, 2000);

}


//agrega elemento a la tabla
const handlerCrear = (nuevaTransaccion) => {
    transacciones.push(nuevaTransaccion);
    actualizarStorage(transacciones);
    actualizarTabla();
}

//modifica elemento de la tabla
const handlerModificar = (transaccionModificada) => {

    if (confirm("¿Está seguro que desea modificar? \n Esta operación es irreversible")) {
        //usar filter para filtrar el elemento que se quiere modificar
        let indice = transacciones.findIndex((transaccion) => { //findIndex devuelve el indice del elemento que se encuentra en el array
            return transaccion.id == transaccionModificada.id;
        });
        transacciones.splice(indice, 1); //elimina el elemento del array
        transacciones.push(transaccionModificada); //agrega el elemento modificado

        actualizarStorage(transacciones); //actualiza el storage
        actualizarTabla();

        alerta("Elemento modificado");
    }
}

//elimina elemento de la tabla
const handlerEliminar = (id) => {
    if (confirm("¿Está seguro que desea eliminar? \n Esta operación es irreversible")) {
        let indice = transacciones.findIndex((transaccion) => { //findIndex devuelve el indice del elemento que se encuentra en el array
            return transaccion.id == id;
        });
        transacciones.splice(indice, 1); //elimina el elemento del array

        actualizarStorage(transacciones); //actualiza el storage
        actualizarTabla();
        $formulario.reset();

        alerta("Elemento eliminado");
    }
}
const actualizarStorage = (data) => {
    (localStorage.setItem("transacciones", JSON.stringify(data)));
}

//actualiza la tabla
function actualizarTabla() {

    if (localStorage.length !== 0) {
        while ($divTabla.hasChildNodes()) {
            $divTabla.removeChild($divTabla.firstElementChild);
        }
        const data = JSON.parse(localStorage.getItem("transacciones"));
        $divTabla.appendChild(crearSpinner());
        setTimeout(() => {
            while ($divTabla.hasChildNodes()) {
                $divTabla.removeChild($divTabla.firstElementChild)
            }

            const data = JSON.parse(localStorage.getItem("transacciones"));
            if (data) {
                $divTabla.appendChild(crearTabla(data));
            }

        }, 5000);
    }
};

// creación de spinner para cargar
function crearSpinner() {
    const spinner = document.createElement("img");
    spinner.width = 300;
    spinner.src = "./resources/wheelspin.gif";
    spinner.alt = "loading";
    return spinner;
};

//evento para buscar item en la tabla

searchBar.addEventListener('keyup', (ev) => {
    const input = document.getElementById("searchBar");
    const filter = input.value.toUpperCase();
    const table = $divTabla;
    const tr = table.getElementsByTagName("tr");
    for (let i = 1; i < tr.length; i++) {
        // Hide the row initially.
        tr[i].style.display = "none";

        let td = tr[i].getElementsByTagName("td");
        for (let j = 0; j < td.length; j++) {
            let cell = tr[i].getElementsByTagName("td")[j];
            if (cell) {
                if (cell.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                    break;
                }
            }
        }
    }
});