//para filtar los personajes
export const filterRick =(rickCards, name = 'Ryck') =>{
  return rickCards.filter(function(character) {
    return character.name.includes(name);
  });
};
//cartas aleatorias
export const cardRandom = (data) => {
  const base = data.results;
  const indiceAleatorio = Math.floor(Math.random() * base.length);
  return base[indiceAleatorio];
};
//orden de A-Z
export const ordenA = (data) => {
  // Copia superficial para no modificar los datos originales
  const clonedArray = [...data.results];
  // Ordena por el nombre
  clonedArray.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });

  return clonedArray;
};


//buscador por texto
export const buscador = (dimensiones) => {
  const texIngresado = dimensiones.value.toLowerCase();
  //toUpperCase() mayusculas
  return texIngresado;
};


//falta el test del buscador y que sea responsivo
 
