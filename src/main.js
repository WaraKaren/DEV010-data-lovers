import { filterRick,cardRandom,ordenA,buscador } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

//para los personajes
const funFilRick = document.getElementById("personajesRm")
const ricks = document.querySelector('.container');
//para el personaje aleatorio
const sorteo = document.querySelector("#myButton")
const respSorteo = document.getElementById("cardsAleatorio")//div para mostrar el resultado de sorteo
//para la ver perosnajes segun dimension
const dimensiones = document.getElementById("dimension")
//plantilla de cartas
const dibujarPersonaje = function(personajes){
  const cards = personajes.map(function(character) {
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

  ricks.innerHTML = cards;
};
//botón de sorteo
sorteo.addEventListener("click", function() {
  const character = cardRandom(data);
  ricks.innerHTML=""
  const rickCard = `
    <div class="card">
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
    </div>
  `;
  
  respSorteo.innerHTML = rickCard; // Actualizar el contenido en el DOM
});

funFilRick.addEventListener("change", function() {
  respSorteo.innerHTML="";// se tiene que limpiar para que no cargue con el boton con las anteriores cartas del filtro
  if (funFilRick.value === "rick") { 
    const resultado = filterRick(data.results,'Rick'); //recomendacion utilizar funFilRick.value pero se podria realizar sin un if o else
    //console.log (resultado);
    dibujarPersonaje(resultado);
  }
  else if (funFilRick.value === "morty"){ //evalua morty en las opciones
    const resultadoM = filterRick(data.results,'Morty');
    dibujarPersonaje(resultadoM);
  }
  else if (funFilRick.value === "summer"){ //para evaluar summer
    const resultadoS = filterRick(data.results,'Summer');
    dibujarPersonaje(resultadoS);
  }
  else if (funFilRick.value === "beth"){ //para evaluar beth
    const resultadoB = filterRick(data.results,'Beth');
    dibujarPersonaje(resultadoB);
  }
  else if (funFilRick.value === "jerry"){ //para evaluar jerry
    const resultadoJ = filterRick(data.results,'Jerry');
    dibujarPersonaje(resultadoJ);
  }
  else if (funFilRick.value === "todo") {
    const resultadoJ = filterRick(data.results,'');
    dibujarPersonaje(resultadoJ);
  /*const container = document.querySelector('.container');
    data.results.forEach(function(character) {
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
    }); */
  }
});

//Para buscar por nombre
dimensiones.addEventListener("input", function() {
  respSorteo.innerHTML="";
  const textMenor = buscador(dimensiones);
  const resultadoFiltrado = filterRick(data.results, textMenor);
  dibujarPersonaje(resultadoFiltrado);
});

//para ordenar por los nombres
const ordenar = document.querySelector('#ordenPersonajes');
ordenar.addEventListener('change', function() {
  if (ordenar.value === "az") {
    const resultadOrden = ordenA(data, 'name');
    dibujarPersonaje(resultadOrden);
  } else if (ordenar.value === "za") {
    const resultadOrden= ordenA(data, 'name');
    const finalZ = resultadOrden.reverse();
    dibujarPersonaje(finalZ);
  }
});

