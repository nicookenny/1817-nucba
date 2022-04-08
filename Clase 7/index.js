/*
let dias= "lunes, martes, miércoles, jueves, viernes" 

-Partiendo de la variable días, utilizando los métodos vistos en clase imprimir en consola:
a): Longitud del string. 
b): String en mayúsculas.
c): Reemplazar TODAS las comas por guion medio.
d): Mediante un método de los strings, devolver un array. Cada elemento del array, debe ser un día de la semana.﻿
﻿

a) Siempre utilizando métodos, devolver un array que contenga los 12 meses del año. 
b) Utilizando mes1, devolver un array que contenga solo desde "febrero" hasta "abril", inclusive. 
c) Utilizando mes1, devolver un array que contenga solo los meses que tienen mas de 4 letras en su nombre.
-Aprovechando la función constructora "Zapatillas" desarrollada en el ejercicio anterior, crear un array de objetos que contenga las zapatillas que construimos anteriormente. (Si es necesario, puede copiar y pegar la función constructora y los objetos). 
No crear el array de manera manual, hacerlo con las herramientas que nos provee JS (bucles, push, etc).
 */

// let mes1 = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio'];
// let mes2 = ['agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

// class Zapatillas {
// 	static almacen = [];
// 	constructor(marca, color, talle) {
// 		this.marca = marca;
// 		this.color = color;

// 		this.talle = talle;

// 		if (Zapatillas.cantidad !== undefined) {
// 			Zapatillas.cantidad++;
// 		} else {
// 			Zapatillas.cantidad = 1;
// 		}
// 	}

// 	pintar = (color) => {
// 		this.color = color;
// 	};
// }

// const a = [];

// const nike = new Zapatillas('nike', 'rojo', 40);
// const adidas = new Zapatillas('adidas', 'verde', 40);
// const adidas1 = new Zapatillas('adidas', 'verde', 40);
// const adidas2 = new Zapatillas('adidas', 'verde', 40);
// const adidas3 = new Zapatillas('adidas', 'verde', 40);
// const adidas4 = new Zapatillas('adidas', 'verde', 40);
// const adidas5 = new Zapatillas('adidas', 'verde', 40);

// a.push(nike);

// console.log(Zapatillas.almacen.length);

// for (let i = 0; i < ingredientes.length; i++) {
// 	const ingrediente = ingredientes[i];
// 	console.log(ingrediente);
// }

// for (const ingrediente of ingredientes) {
// 	console.log(ingrediente);
// 	if (ingrediente === 'Sal') {
// 		break;
// 	}
// }
const ingredientes = ['Harina', 'Levadura', 'Sal', 'Agua'];

const obj = {
	//key: value
	nombre: 'Nico',
	apellido: 'Kenny',
	vari: undefined,
	// 0: undefined,
};
// console.log(obj.nombre);
const vari = 'nombre';
// console.log(obj[vari]); // obj['nombre'] => obj.nombre

console.log(obj[0]);
// for (index in ingredientes) {
// 	ob
// }

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const dividir = (a, b) => a / b;
const multiplicar = (a, b) => a * b;



const ejecutarOperacion = (a, b, operacion) => {
	return operacion(a, b);
};

console.log(ejecutarOperacion(4, 8, dividir));
console.log(ejecutarOperacion(4, 8, multiplicar));
console.log(ejecutarOperacion(4, 8, sumar));
console.log(ejecutarOperacion(4, 8, restar));
console.log(
	ejecutarOperacion('Hola', 'Fernando', (a, b) => {
		return `${a} ${b}`;
	}),
);


//map find filter reduce foreach, {...}  {} Object
// FIND
const frutas = ["Manzana","Naranja","Pera"]

const personas = [{
  nombre:"Nicolas",
  apellido:"Kenny",
  empleo:"dev"
},{
  nombre:"Juan",
  apellido:"Kenny",
  empleo:"Abogado"
},{
  nombre:"Fernando",
  apellido:"Kenny",
  empleo:"Desempleado"
},{
  nombre:"Fernando",
  apellido:"Fernandez",
  empleo:"Desempleado"
},]

const buscar = (array,valor)=>{
  for(const item of array){
    if(item === valor){
      return item
    }
	}
}

// ["Manzana","Naranja","Pera"]
// console.log(frutas.find((parametro) => parametro === 'Pera'))

// console.log(personas.find(parametro => parametro.empleo === 'Desempleado'))

// const nums = [1,2,3,4,5,6]
// console.log(nums.find(numero=>numero === 4))
// console.log(nums.filter(numero=>numero >= 4))

// // FILTER
// console.log(personas.filter(parametro => parametro.empleo === 'Desempleado'))

let carrito = [{ID:1,nombre:'Coca'},{ID:2,nombre:"Papas"},{ID:3,nombre:'Arroz'}]

// carrito = carrito.filter((producto)=> producto.ID !== 2)

// console.log(carrito)

// this.productos = this.productos.filter(.....)

//FOR EACH

// for(blabla of blba)
// const x = personas.forEach(persona=>{
//   console.log(persona)
// })
// console.log(x)

// MAP

// const numeros = [1,2,3,4,5,6,7,9]
// const nuevoArray = numeros.map(numero => numero * 2)
const nuevasPersonas = personas.map(persona=>{
  
  return {
   	...persona,
    empleo: 'Desempleado',
  }
})

console.log(nuevasPersonas)


// SPREAD OPErATOR
// DESTRUCTURING
