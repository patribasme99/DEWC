document.addEventListener('DOMContentLoaded', configureAjaxCalls);

    function configureAjaxCalls() {
        document.getElementById('txtBtn').addEventListener('click', function() {
            fetch('datos.txt')
            .then(mostrarTexto)
            .catch(showErrorTexto);
        });

        function mostrarTexto(response) {
            console.log('response.ok: ', response.ok);
            if (response.ok) {
                response.text().then(showResult);
            } else {
                showError('status code: ' + response.status);
            }
        }

        function showResult(txt) {
            console.log('muestro respuesta: ', txt);
            document.getElementById("resultado").innerHTML = "<br>" + txt;
        }

        function showErrorTexto(err) {
            console.log('muestor error', err);
            document.getElementById("resultado").innerHTML = "<br>Error " + err;
        }

        document.getElementById('jsonBtn').addEventListener('click', function() {
            document.getElementById('resultado').innerHTML = '';
            datos = fetch('empleados.json')
            .then(respuesta => respuesta.json())
            .then(empleado => {
                empleado.forEach(empleado => {
                    document.getElementById('resultado').innerHTML += '<p><b>Nombre: </b>' + empleado.nombre + '</p><p><b>Puesto: </b>' + empleado.puesto + '</p><br>'
                })
            })
        });

        document.getElementById('apiBTN').addEventListener('click', function() {
            document.getElementById('resultado').innerHTML = '';
            fetch('https://picsum.photos/list')
            .then(respuesta => respuesta.json())
            .then(dato => {
                dato.forEach(dato => {
                    document.getElementById('resultado').innerHTML += '<p><b>Formato de la imagen: </b>' + dato.format + '</p><p><b>Ancho de la imagen: </b>' + dato.width + '</p><p><b>Alto de la imagen: </b>' + dato.height + '</p><p><b>Autor de la imagen: </b>' + dato.author + '</p>'
                })
            })
        })
    }