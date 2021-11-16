export const crearListadoIndex = (data) => {

    const parrafo = document.createElement("p");
    //para generar la tabla con cada elemento del listado
    data.forEach(element => {

        const abrirDiv = "<div id='card'>";
        const titulo = "<h2><p>" + element.titulo + "</p></h2>";
        const descripcion = "<p>" + element.descripcion + "</p>";
        const precio = "<p>Precio: " + element.precio + "$</p>";
        const puertas = "<p>Cantidad Puertas: " + element.nroPuertas + "</p>";
        const km = "<p>Cantidad Km: " + element.km + "</p>";
        const potencia = "<p>Potencia: " + element.potencia + "</p>";
        const cerrarDiv = "</div>";

        parrafo.innerHTML += abrirDiv + titulo + descripcion + precio + puertas + km + potencia + cerrarDiv;

    });

    console.log(parrafo);
    return parrafo;

}