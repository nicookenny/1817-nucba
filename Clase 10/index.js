// const BotonAlert = document.querySelector('button');

// // Forma 2:
// const alertBoca = () => {
// 	alert('Hola soy de boca');
// };

// // Forma 3:

// BotonAlert.addEventListener('click', () => {
// 	alert('Hola soy de boca');
// });

// const usuarios = [];

// const butt1 = document.getElementById('button1');
// const butt2 = document.getElementById('button2');
// const butt3 = document.getElementById('button3');

// const inp1 = document.querySelector('#input1');
// const inp2 = document.querySelector('#input2');

// inp1.addEventListener('blur', () => {
// 	console.log('Hola dejaste el foco en el input 1');
// });

// butt1.addEventListener('click', () => {
// 	usuarios.push(inp1.value);
// 	console.log(usuarios);
// });
// butt1.addEventListener('focus', () => {
// 	console.log('Hiciste focus en el boton 1');
// });

// inp2.addEventListener('change', (event) => {
// 	console.log(event);
// });
// inp2.addEventListener('input', (parametro) => {
// 	console.log(parametro);
// });

const content = document.querySelector('#content');

// console.log(content.innerHTML);

// content.innerHTML = '<b>Hola como estas</b>';
// content.innerText = '<b>Hola como estas</b>';

/*
 
       ELEMENTO
             | 
             V
            TEXTO

*/
const spanNuevo = document.createElement('span');
const parrafoNuevo = document.createElement('p');
const textoParrafo = document.createTextNode('Hola soy de boca');
parrafoNuevo.appendChild(textoParrafo);
textoParrafo.nodeValue = 'Hola soy de river';

content.appendChild(parrafoNuevo);

//BREAKOUT ROOMS

// Declarar un array de USUARIOS  vacio.

// Crear un campo de texto USERNAME, detectar cuando ocurre un cambio y mostrar en consola el texto ingresado.

// Crear un campo de texto PASSWORD, detectar cuando ocurre un cambio y mostrar en consola el texto ingresado.

// Crear un botón de REGISTRARSE que, cuando lo toco, cree un usuario con la estructura {username, password} y lo guarde en el array usuarios.

//Crear un boton que diga LOGIN, que cuando lo toco tome los valores de username y password, valide si existe un usuario con ese username en mi array de usuarios. Si existe, validar que la contraseña coincida con el usuario, si la contraseña es incorrecta mostrar en pantalla La contraseña ingresada es incorrecta.  Si no existe, escribir en pantalla El usuario ignresado es invalido y limpiar los campos de texto.

//Si el usuario y la contrasenia son correctas, limpiar el HTML de input y botones y mostrar el texto Hola {username}, junto con un input que detecte en tiempo real los cambios e imprima en pantalla el texto ingresado.

//EXTRA, detectar si el username existe en el array de usuarios al perder foco del input en lugar de hacerlo cuando se toca el boton.
