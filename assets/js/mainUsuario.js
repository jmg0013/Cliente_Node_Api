function buscarPorId() {
    document.querySelector('#contenedor').textContent=" ";
    var input = document.getElementById("buscarPorId");
    fetch('http://localhost:3000/usuario/?id_usuario='+ input.value, {
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

function editUsu() {
    var inputN = document.getElementById("nombreUsu");
    var inputId = document.getElementById("idUsu");

    fetch('http://localhost:3000/editUsuario/?nombre='+ inputN.value + '&id_usuario='+ inputId.value, {
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

function crearUsu() {
    var inputN = document.getElementById("nombreUsuCrear");
    var inputApell = document.getElementById("apellUsuCrear");
    var inputDNI = document.getElementById("dniUsuCrear");
    var inputpass = document.getElementById("passUsuCrear");
    var inputtype = document.getElementById("typeUsuCrear");   

    fetch('http://localhost:3000/crearUsuario/?nombre='+ inputN.value + '&apell='+ inputApell.value + '&dni='+ inputDNI.value + '&pass='+ inputpass.value + '&tipo='+ inputtype.value, {
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

function borrarUsu() {
    var inputId = document.getElementById("idUsuBorrar");   

    fetch('http://localhost:3000/eliminarUsuario/?id_usuario='+ inputId.value, {
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