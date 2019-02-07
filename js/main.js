let pelicula = document.getElementById("peli");
let genero = document.getElementById("genero");
let buttonAgregar = document.getElementById('agregar');

document.write(genero);

function agregar() {
    var gustosPeli = {
        nombre: pelicula.value,
        tipo: genero.value
    }

    localStorage.setItem("Peliculas", JSON.stringify(gustosPeli));
    var userObject = JSON.parse(localStorage.getItem(gustosPeli));

    var lista = document.getElementById('pelisListas');
    var elemento = document.createElement("div");
    elemento.createTextNode(gustosPeli.nombre + " y el genero es " + gustosPeli.tipo);
    lista.appendChild(elemento);
}


buttonAgregar.addEventListener('click', agregar);