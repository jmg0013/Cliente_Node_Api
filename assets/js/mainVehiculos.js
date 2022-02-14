function buscarPorId() {
    var input = document.getElementById("buscarPorId");
    fetch('http://localhost:3000/vehiculo_por_id_usuario/?id_usuario='+ input.value, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(result => result.json())
    .then(data => {
        for (const clave of data) {
            var div = document.createElement('div');
            for (const claveInterna in clave) {
                var parrafo = document.createElement('p')
                var nodoTexto = document.createTextNode(claveInterna+" : " + clave[claveInterna]);
                parrafo.appendChild(nodoTexto);
                div.appendChild(parrafo);
            }
            document.querySelector('#contenedor').appendChild(div);
        }
    })
}

function editVehi() {
    var inputId = document.getElementById("idVehi");
    var inputM = document.getElementById("marcaUsu");

    fetch('http://localhost:3000/editVehiculo/?id_vehiculo='+ inputId.value + '&marca='+ inputM.value, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .catch(error => console.error("error"))
    .then(res => console.log("bien"))
}

function crearVehi() {
    var inputM = document.getElementById("marcaUsu");
    var inputId = document.getElementById("idVehi");

    fetch('http://localhost:3000/crearVehiculo/?id_vehiculo='+ inputId.value + '&marca='+ inputM.value, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .catch(error => console.error("error"))
    .then(res => console.log("bien"))
}