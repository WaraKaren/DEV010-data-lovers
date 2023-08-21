/* Recomendamos usar src/main.js para todo tu código que
tenga que ver con mostrar los datos en la pantalla.
Con esto nos referimos básicamente a la interacción con
el DOM. Operaciones como creación de nodos, registro
de manejadores de eventos (event listeners o event handlers) */
import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

/* console.log(data.location); // de aquí sacamos los personajes
const cartasrm = document.getElementById('cartasrm');
cartasrm.innerHTML = data.location[0].name;
console.log(document.getElementById('cartasrm'));  */

/* const container = document.querySelector('.container');
for (let i = 0; i < data.results.length; i++) {
  //console.log(data.results[i]);

  container.innerHTML +=
   `<div class="card">
    <div class="imgBox">
        <img src="${data.results[i].image}"
          alt="${data.results[i].name}">
    </div>
    <div class="content">
    <h2>${data.results[i].name}</h2>
      <p>
      ${data.results[i].status}
      ${data.results[i].species}
      ${data.results[i].type}
      ${data.results[i].gender}
      ${data.results[i].origin}
      ${data.results[i].location}
      ${data.results[i].episode}
      </p>
    </div>
  </div>`
} */

/* const container = document.querySelector('.container');

for (let i = 0; i < data.results.length; i++) {
  const character = data.results[i];
  // const originName = character.origin.name;

  container.innerHTML +=
    `<div class="card">
      <div class="imgBox">
        <img src="${character.image}" alt="${character.name}">
      </div>
      <div class="content">
        <h2>${character.name}</h2>
        <p>
          Status: ${character.status}<br>
          Species: ${character.species}<br>
          Type: ${character.type}<br>
          Gender: ${character.gender}<br>
          Origin: ${character.origin.name}<br>
          Location: ${character.location.name}<br>
          Episodes: ${character.episode.length}<br>
        </p>
      </div>
    </div>`;
} */

const ricks = document.querySelector('.container');

const rickCards = data.results
  .filter(function(character) {
    return character.name.includes("Rick");
  })
  .map(function(character) {
    return `<div class="card">
              <div class="imgBox">
                <img src="${character.image}" alt="${character.name}">
              </div>
              <div class="content">
                <h2>${character.name}</h2>
                <p>
                  Status: ${character.status}<br>
                  Species: ${character.species}<br>
                  Type: ${character.type}<br>
                  Gender: ${character.gender}<br>
                  Origin: ${character.origin.name}<br>
                  Location: ${character.location.name}<br>
                  Episodes: ${character.episode.length}<br>
                </p>
              </div>
            </div>`;
  })
  .join(""); //para unir las cadenas

ricks.innerHTML = rickCards;

