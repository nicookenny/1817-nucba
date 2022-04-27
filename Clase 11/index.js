const content = document.getElementById('content');

// // Crear dos contenedores (contenedor1 y contenedor2)
// // Crear 2 h3 en el contenedor1 con Hola y Chau, crear 1 h1 en el contenedor2
// // Crear un input de tipo texto en el contenedor1
// // Crear un boton en el contenedor2, el cual al tocarlo muestre el contenido del input dentro del h1

// //Dos contenedores creados
// const contenedor1 = document.createElement('div');
// const contenedor2 = document.createElement('div');

// //Creamos los h3, creamos los nodos de texto y metimos el texto en cada h3
// const primerh3 = document.createElement('h3');
// const texto1h3 = document.createTextNode('Hola');
// primerh3.appendChild(texto1h3);
// const segundoh3 = document.createElement('h3');
// const texto2h3 = document.createTextNode('Chau');
// segundoh3.appendChild(texto2h3);

// //Creamos elh1
// const h1 = document.createElement('h1');

// //Creamos el input
// const input = document.createElement('input');

// //Creamos el button
// const button = document.createElement('button');
// const textoButton = document.createTextNode('Escribir');
// // button.appendChild(textoButton);

// contenedor1.appendChild(primerh3);
// contenedor1.appendChild(segundoh3);
// contenedor1.appendChild(input);

// contenedor2.appendChild(h1);
// contenedor2.appendChild(button);

// content.appendChild(contenedor1);
// content.appendChild(contenedor2);

// input.addEventListener('input', (e) => {
// 	h1.innerText = e.target.value;
// });

const parrafo = document.querySelector('p');

document.body.classList.add('light');

// document.querySelector('input').setAttribute('type', 'password');
// document.querySelector('input').setAttribute('placeholder', 'Ingresa tu contraseña del banco gato');

document.querySelector('button').addEventListener('click', () => {
	const img = document.querySelector('img');

	img.setAttribute('onclick', "console.log('hola')");

	if (img.src === 'https://www.w3.org/Icons/w3c_home') {
		img.setAttribute('src', 'https://www.wikihow.com/images/4/47/769114-10.jpg');
	} else {
		img.setAttribute('src', 'https://www.w3.org/Icons/w3c_home');
	}
});

console.log(JSON.stringify(null));
// console.log(JSON.parse(`asdfsadfsadfasdf`));

//JSON.stringify
//JSON.parse
// const objParsed = JSON.parse(str);
// console.log(objParsed.bool);
const str = [
	{
		name: 'Nicolas',
	},
	{
		name: 'Juan',
	},
];
// localStorage.setItem('str', 'hola');
// sessionStorage.setItem('string', 'hola');

// console.log(localStorage.getItem('str'));
