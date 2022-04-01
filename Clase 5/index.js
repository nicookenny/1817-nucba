// Objetos => { key: value, key1: value }
//values => cualquier tipo de dato, otro objeto

// un objeto aunque tenga las mismas propiedades que otro, no es el mismo objeto obj1===obj2 = false

// const PAISES = ['Argentina', 'Peru'];

// const miPerro = {
// 	nombre: 'Nicolas',
// 	edad: 23,
// 	esAlto: false,
// 	vehiculos: [],
// 	direccion: null,
// 	cualquiercosa: 'ASDADS',
// 	// prop: "asdasd"
// 	0: 'perro',
// };

// console.log(miPerro.edad);

// console.log(miPerro['edad']);

// let prop = 'edad';
// console.log(miPerro[prop]); // miPerro['edad']
// prop = 'edad';
// console.log(miPerro[prop]); // miPerro['edad']
// miPerro[0];

// const props = ['nombre', 'edad', 'esAlto', 'vehiculos', 'direccion', 'cualquiercosa',asdasdas];

// for (let i = 0; i < props.length; i++) {
// 	console.log('Propiedad', props[i]);
// 	console.log('Valor', miPerro[props[i]]);
// }

// Objetos tienen propiedades y metodos

// const saludar = (palabra) => `Hola ${palabra}`;

// const nombre = 'Nicolas';
// const Nico = {
// 	nombre: 'Nico',
// 	// saludar, //saludar: saludar
// };
// console.log(Nico);
// Nico.nombre = 'Juan';
// Nico['nombre'] = 'Juan';
// console.log(Nico);

// const Juan = {
// 	nombre: 'Juan',
// 	saludar,
// };

// console.log(Nico.saludar('Juan'));
const obj = {};
obj.nombre = 'Nicolas';
obj.edad = 23;
//CLASES

class Persona {
	constructor(name, edad, empleo) {
		this.nombre = name;
		this.edad = edad;
		this.empleo = empleo;
		this.vehiculos = [];
	}

	saludar = (name) => {
		console.log('this', this);
		console.log(`Hola ${name}`);
	};

	comprarVehiculo = (vehiculo) => {
		this.vehiculos.push(vehiculo);
	};

	presentarse = () => {
		return `Hola soy ${this.nombre} y tengo ${this.edad} años`;
	};
}

const NicolasKenny = new Persona('Nicolas', 23, 'Desarrollador');
const JuanPerez = new Persona('Juan', 25, 'Desarrollador');
console.log(NicolasKenny);

NicolasKenny.saludar('JuanPerez.nombre');

NicolasKenny.comprarVehiculo({ nombre: 'Supra', velocidadMaxima: 258958 });

console.log(JuanPerez.presentarse());
console.log(NicolasKenny.presentarse());
