import { filterRick, cardRandom, ordenA, buscador } from "../src/data.js";

describe("filterRick", () => {
  it("se espera que filtre por nombre y que no incluya otros nombres", () => {
    const lista = [
      { name: "Kevin" },
      { name: "Eri" },
      { name: "Carlos" },
      { name: "Carlitos" },
    ];
    const listaResultado = [{ name: "Carlos" }, { name: "Carlitos" }];
    expect(filterRick(lista, "Car")).toEqual(listaResultado);
  });
});

describe("cardRandom", () => {
  it("debería devolver una tarjeta aleatoria", () => {
    const lista = [
      { name: "Kevin" },
      { name: "Eri" },
      { name: "Carlos" },
      { name: "Carlitos" },
    ];
    const cartaAleatoria = cardRandom({ results: lista });
    expect(typeof cartaAleatoria).toBe("object");
  });
});
//faltan test de orden de A-Z y el buscador de texto :D
describe("ordenA", () => {
  it("el orden de las cartas tiene que ser por nombre de la A-Z", () => {
    const lista = {
      results: [
        { name: "Kevin" },
        { name: "Eri" },
        { name: "Carlos" },
        { name: "Carlitos" },
      ],
    };

    const resultadoOrdenado = ordenA(lista); // Almacena el resultado ordenado en una variable

    const listaOrdenada = [
      { name: "Carlitos" },
      { name: "Carlos" },
      { name: "Eri" },
      { name: "Kevin" },
    ];

    expect(resultadoOrdenado).toEqual(listaOrdenada); // Compara el resultado ordenado con la listaOrdenada
  });
});
//buscador

describe("buscador", () => {
  it("la busqueda debe ser por nombre y en minusculas", () => {
    const lista = {
      value: "Kevin"
    };
    const resultado = buscador(lista); //se llama la fncon con el obj
    expect(resultado).toBe("kevin");
  });
});



