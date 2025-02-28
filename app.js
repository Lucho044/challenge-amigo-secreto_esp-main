// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = [];

// funcion agregar amigo, validación y guardado en el array
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    if (inputAmigo.value == "") {
        alert("Debes ingresar un nombre");
        return;
    }
    amigo.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    mostrarAmigos();
}

// muestra los nombres ingresados en el array
function mostrarAmigos( ) {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigo.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }   
}

// función que realiza una busqueda aleatoria del amigo secreto
    function sortearAmigo() {    
        if (amigo.length < 3){
        alert("No hay amigos para sortear");
        return;
        }
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El Amigo Secreto es: ${amigoSorteado}`;

// borrado del listado para mostrar el Amigo secreto
   let limpiarLista = document.getElementById("listaAmigos");
   limpiarLista.innerHTML = "";
}
