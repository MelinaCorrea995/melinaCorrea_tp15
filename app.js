
const cinPeliculas = require("./peliculas");
const fs = require("fs");
const mensj = fs.readFileSync("mensaje.txt", "utf-8");

for (let i = 0; i < cinPeliculas.length; i++) {
    console.log("Id de pelicula:",cinPeliculas[i].id);
    console.log("Titulo de la pelicula:",cinPeliculas[i].titulo);
    console.log("Calificacion de la pelicula:",cinPeliculas[i].calificacion);
    console.log("Premios:",cinPeliculas[i].premios);
    console.log("Duracion de pelicula:",cinPeliculas[i].duracion);
    console.log("Precio de la pelicula:",cinPeliculas[i].precio);
    console.log("Genero de la pelicula:",cinPeliculas[i].genero);
}


console.log(mensj);