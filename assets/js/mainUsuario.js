window.onload = function () {
    fetch('http://localhost:3000/', {
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