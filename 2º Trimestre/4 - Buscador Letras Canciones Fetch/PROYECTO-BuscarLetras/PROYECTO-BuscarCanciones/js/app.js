import * as UI from './interfaz.js';
import API from './api.js';

console.log(UI);

//Utilizamos el formulario buscar:

UI.formularioBuscar.addEventListener('submit', buscarCancion);

function buscarCancion(e) {
    e.preventDefault();

    const artista = document.querySelector("#artista").value;
    const cancion = document.querySelector("#cancion").value;

    //Validamos los datos

    if (artista == "" || cancion == "") {
        //El usuario dejó un campo vacío, mostrar mensaje de error

        UI.divMensajes.textContent = "Error: todos los campos son obligatorios";
        UI.divMensajes.classList.add("error");

        setTimeout(() => {
            UI.divMensajes.innerHTML = '';
            UI.divMensajes.classList.remove('error');
        }, 3000);
    } else {
        //Consultamos la API
        console.log('Consultando la API');
        const busqueda = new API(artista, cancion);

        busqueda.consultarAPI();
        console.log(busqueda);
    }
}