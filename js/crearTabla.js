//Crear una tabla con los datos de forma dinámica

export const crearTabla = (data) => {
    //cargo el thead
    const tabla = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const cabecera = document.createElement('tr');
    for (const key in data[0]) {

        if (key !== "id") { // Si la key es diferente a id, la añadimos a la cabecera   
            const th = document.createElement('th');
            const contenido = document.createTextNode(key);
            th.appendChild(contenido);
            cabecera.appendChild(th);
        }
    }
    thead.appendChild(cabecera);
    tabla.appendChild(thead);
    //cargo el tbody
    data.forEach(element => {
        const tr = document.createElement('tr');
        for (const key in element) {
            if (key === "id") {
                tr.setAttribute("data-id", element[key]);
            } else {
                const td = document.createElement('td');
                // td.addEventListener('click', handleclick);
                td.textContent = element[key];
                //td.innerText = element[key];   <-- Esto es lo mismo que el anterior
                tr.appendChild(td);
            }
        }
        tbody.appendChild(tr);
    });

    tabla.appendChild(tbody);

    modificarThead(tabla);
    return tabla;
}

//modificar el innerHtml de los thead de la tabla
function modificarThead(tabla) {
    const thead = tabla.querySelector('thead');
    const th = thead.querySelector('tr');
    th.innerHTML = '<th>Titulo</th><th>Transaccion</th><th>Descripcion</th><th>Precio</th><th># Puertas</th><th># KMs</th><th>Potencia</th>';
}