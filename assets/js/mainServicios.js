function buscarPorId() {
    document.querySelector('#contenedor').textContent=" ";
    var input = document.getElementById("buscarPorId");
    fetch('http://localhost:3000/servicio_por_id_vehiculo/?id_vehiculo='+ input.value, {
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

function editServ() {
    var inputId = document.getElementById("idServ");
    var inputD = document.getElementById("descServ");

    fetch('http://localhost:3000/editServicio/?id_servicio='+ inputId.value + '&descripcion='+ inputD.value, {
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