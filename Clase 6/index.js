// Repaso - Ejercicio par impar

const FRUTAS = [
	'Banana',
	'Manzana',
	'Durazno',
	'Pera',
	'Frutilla',
	'Naranja',
	'Melon',
	'Frambuesa',
	'Mora',
	'Banana',
	'Anana',
	'Sandia',
	'Kiwi',
	'Granada',
	'Maracuya',
	'Mango',
];

const VERDURAS = [
	'Banana',
	'Manzana',
	'Durazno',
	'Pera',
	'Frutilla',
	'Naranja',
	'Melon',
	'Frambuesa',
	'Maracuya',
	'Mango',
];

// TODO: Desarrollar una funcion que reciba un array de strings como parámetro y devuelva dos arrays, uno con los strings de longitud par y uno con los strings de longitud impar. Posteriormente, mostrar en pantalla ambos arrays de manera user friendly

//ej: ['Hola','Chau','Sol','Anana','Sal'] => [Hola, Chau] [Sol, Anana, Sal]
const parImpar = (array) => {
	const pares = [];
	const impares = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i].length % 2 === 0) {
			pares.push(array[i]);
		} else {
			impares.push(array[i]);
		}
	}

	// return console.log(`Los ingredientes pares son: ${pares}`, `Los ingredientes impares son: ${impares}`);
	return [pares, impares];
};

// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// ];

const [asd, das] = parImpar(VERDURAS);

const array = [false, 'tigre', 'puma'];

// const felino = array[0];
// const can = array[1];
// const ave = array[2];
const [hola, chau, bueno] = array;
// const perro = array[1];
// console.log(perro);

// console.log(`Los ingredientes pares son: ${pares}`, `Los ingredientes impares son: ${impares}`);
//EJ 2:
/*

-Crear la clase constructora "Zapatillas". Debe aceptar como parámetros Marca, color y talle. 
-Crear, como mínimo, 5 objetos con esta clase. 
-Crear una función que acepte como parámetro un objeto. Esa función debe imprimir en consola la marca, el color y el talle del objeto que le pasamos. 
-La impresión en consola debe ser friendly para el usuario, no solo los datos sueltos.
*/

class CarritoCompras {
	constructor() {
		this.carrito = [];
	}
}

// 	agregarProducto = (producto) => this.carrito.push(producto);
// }

// const nuevoCarrito = new CarritoCompras();
// nuevoCarrito.agregarProducto('Coca Cola');
// console.log(nuevoCarrito);

//CLASE 6

//console.log(String)
const string = '  Hola, soy de boca, me gusta el cafe    ';

// console.log(string.indexOf('Hola', 8));
console.log(string.toUpperCase());
console.log(string.toLowerCase());

// soy de boca => Soy de boca

const fecha = new Date().toISOString(); //YYYY-MM-DD[T]HH:mm:ss.zzzZ
const [solofecha, solohorario] = fecha.split('T');
console.log(solohorario);
// console.log(solofecha.replaceAll('-', '/'));
console.log(solofecha.split('-').reverse().join('/')); //yyyy-mm-dd => dd/mm/yyyy
//[1,2,3] => reverse => [3,2,1]

// console.log(string.trim);

const array3 = [1, 2, 3, 4, 5];
console.log(array3);
const arraynuevo = array3.slice(1, 3);
