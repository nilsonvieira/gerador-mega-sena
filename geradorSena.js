// DEZENAS DE DEZEMBRO DE 2021
var listaGeral = [53, 10, 5, 42, 4, 33, 37, 27, 23, 30];
var newListGeral = [];
var listaVirada = [
  10, 3, 5, 20, 36, 2, 11, 17, 18, 22, 33, 34, 35, 37, 38, 40, 41, 42, 51, 53,
  56, 58, 22, 1, 4, 6, 12, 14, 16, 24, 25, 27, 29, 30, 31, 32, 43, 45, 46, 47,
  49, 50, 52, 55, 57,
];
var newListVirada = [];

console.log(" ------------------ LISTA GERAL ------------------ ");
  for (var i = 0; i < 6; i++) {
    var geral = Math.floor(Math.random() * listaGeral.length);
    newListGeral.push(listaGeral[geral]);
    listaGeral.splice(geral, 1);
  }
  console.log(newListGeral);

  console.log(" ------------------ LISTA VIRADA ------------------ ");
  for (var i = 0; i < 6; i++) {
    var virada = Math.floor(Math.random() * listaVirada.length);
    newListVirada.push(listaVirada[virada]);
    listaVirada.splice(virada, 1);
  }
  console.log(newListVirada);