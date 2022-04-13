/*yo tengo un pedido! si lo podemos aplicar con ejemplos mas practicos.
 Porque a veces no logro imaginarme en q se aplica cada cosa (mas alla de q sea una lista por ejemplo)
 */

// CONDICIONALES
// const USUARIOS = [
// 	{
// 		username: 'nkenny',
// 		password: '123456',
// 	},
// 	{
// 		username: 'rsabbadin',
// 		password: 'boca123',
// 	},
// 	{
// 		username: 'afetner',
// 		password: 'adel123',
// 	},
// ];

// /*

// - usuario contra

// - validar usuario
// -> no existe

// - validar contrasena
// ->

// */

// let username = prompt('Ingresa tu nombre de usuario');
// const condicionFind = (usuario) => {
// 	return usuario.username === username;
// };
// let usuarioExistente = USUARIOS.find(condicionFind);

// while (!usuarioExistente) {
// 	username = prompt('Ingresa tu nombre de usuario');
// 	usuarioExistente = USUARIOS.find(condicionFind);
// }

// /*
// let usuarioExistente;
// do {
// 	let username = prompt('Ingresa tu nombre de usuario');
// 	const condicionFind = (usuario) => {
// 		return usuario.username === username;
// 	};
// 	usuarioExistente = USUARIOS.find(condicionFind);
// } while (!usuarioExistente);

// */

// if (usuarioExistente) {
// 	const password = prompt('Ingresa tu password');
// 	if (password === usuarioExistente.password) {
// 		console.log(`Bienvenido a NUCBA, ${usuarioExistente.username}`);
// 	} else {
// 		console.log('La contraseña ingresada es invalida');
// 	}
// } else {
// 	console.log('El usuario ingresado es invalido');
// }

// /**
//  *
//  * <div id='tabla'>
//  *  1
//  *
//  *  2
//  *
//  *  3
//  *
//  * </div>
//  *
//  *
//  *
//  */

//CLASES

class Persona {
	constructor({ nombre, edad, domilicio, pelo }) {
		this.nombre = nombre;
		this.edad = edad;
		this.mascotas = [];
		this.tieneTrabajo = false;
		this.domilicio = domilicio;
		this.pelo = pelo;
	}

	saludar = () => {
		console.log(nombre1);
		return `Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años. Mi pelo es de color ${this.pelo}`;
	};
}

const Persona1 = new Persona({
	pelo: 'Marron',
	edad: 23,
	domilicio: {
		calle: 'Pin',
		altura: 123,
	},
	nombre: 'Juan',
});

const Persona2 = new Persona({
	nombre: 'Pedro',
	edad: 25,
	domilicio: {
		calle: 'Pin',
		altura: 123,
	},
	pelo: 'Rubio',
});

console.log(Persona2.saludar());
