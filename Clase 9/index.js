// Seleccionar parrafos dentro del segundo hijo del section HERO.

const parrafosHijosHero = document.querySelectorAll('#hero .container-paragraph:nth-child(2) p');
console.log(parrafosHijosHero);

//Seleccionar todos los h5 del documento
const todosH5 = document.getElementsByTagName('h5');
console.log(todosH5);

//Mostrar uno por uno todos los h5 del documento
new Array(...todosH5).forEach((elemento) => console.log(elemento));

// Seleccionar los ultimos 2 parrafos del documento
const parrafitos = new Array(...document.querySelectorAll('p'));
console.log(parrafitos.slice(parrafitos.length - 2, parrafitos.length));
// Seleccionar el elemento que tiene Nicolas kenny 1 como contenido
const elementKenny = document.querySelector('h1');
console.log(elementKenny);

// Seleccionar todos los section del documento
const sections = document.getElementsByTagName('section');
console.log(sections);
