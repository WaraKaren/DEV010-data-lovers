import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

document.addEventListener('DOMContentLoaded', function () {
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
});
  