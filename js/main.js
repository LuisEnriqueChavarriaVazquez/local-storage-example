let pelicula = document.getElementById("peli");
let lista = document.getElementById("pelisListas");
let buttonAgregar = document.getElementById('agregar');
var texto, elementoPeli;

buttonAgregar.addEventListener('click', function() {
    if (pelicula.value == "") {
        alert("Debe ingresar algun valor");
    }
    localStorage.setItem(pelicula.value, pelicula.value);
    pelicula.value = "";
});


for (i in localStorage) {
    if (typeof localStorage[i] == "string") {
        elementoPeli = document.createElement("div");
        elementoPeli.append(localStorage[i]);
        lista.append(elementoPeli);
    }
}

/*for (i in localStorage) {
    if (typeof localStorage[i] == "string") {
        elementoPeli.addEventListener('click', function() {
            localStorage.removeItem(localStorage[i]);
        });
    }
}*/