/* Recomendamos usar src/main.js para todo tu código que
tenga que ver con mostrar los datos en la pantalla.
Con esto nos referimos básicamente a la interacción con
el DOM. Operaciones como creación de nodos, registro
de manejadores de eventos (event listeners o event handlers) */
import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

const prueba = document.querySelector('.container')
for(let i=0 ; i< data.info.length; i++){
  console.log(data.info[i]);
  prueba.innerHTML += `<figure>
  <img src="${data.info[i].image}"
    alt="personaje de rick and morty"> <!-- introducir imagen -->
</figure>
</div>`
}


/* const searchTitle = 'rick and morty';
const foundFilm = data.films.find((film) => film.title === searchTitle);
const container = document.querySelector('todomenu')
for (let i = 0; i < data.films.length; i++) {
    console.log(data.films[i]);
    container.innerHTML += `<figure>
    <img
    src=" ${data.films[i].poster}"
    alt= "${data.films[i].title}"
    <figcaption>${data.films[i].title} <figcaption>
    </figure>` */

/* document.addEventListener('DOMContentLoaded', function () {
  function printdata(array) {
    const container = document.querySelector('.movie-grid');
    let html = ''; // Variable para almacenar el HTML
  
    for (let i = 0; i < array.length; i++) {
      html += ` <figure>
          <img
            src="${array[i].poster}"
            alt="${array[i].title}"
          />
          <figcaption>${array[i].title}</figcaption>
        </figure>`;
    }
    container.innerHTML = html; // Agregar el HTML al contenedor
  }
  
  // Llamar a la función printdata() después de que el DOM esté cargado
  printdata(data.films);
}); */
  