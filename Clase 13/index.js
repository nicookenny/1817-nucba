const formulario = document.querySelector('form');
/*

const array = [1,2,3,4,5,6,7,8,9]
const sumatoria = array.reduce((acumulador,valor)=>{
  
  if(acumulador['perro']){
    acumulador['perro'] = [...acumulador['perro'], valor]
  }else{
    acumulador['perro'] = [valor]
  }
  
  return acumulador
},{})
console.log(sumatoria)

const array = [1,2,3,4,5,6,7,8,9]
const sumatoria = array.reduce((acumulador,valor)=>{
  acumulador[valor] = valor
  return acumulador
},{})
console.log(sumatoria)


*/

const handleSubmit = (e) => {
	e.preventDefault();

	const data = [...e.target.elements]
		.filter((element) => element.type !== 'submit')
		.reduce((acc, element) => {
			if (element.type === 'checkbox') {
				acc[element.getAttribute('name')] = element.checked;
			} else {
				acc[element.getAttribute('name')] = element.value;
			}
			return acc;
		}, {});

	/*"name": "Nicolas",
    "lastname": "",
    "email": "nicolasdkenny@gmail.com",
    "password": "hola123",
    "phone": "1161171314",
    "dni": "",
    "birthdate": "1998-08-08",
    "tyc": false */

	// correo electronico: que sea un correo electronico / [cualquiercosa]@[cualquiercosa].[cualquierocosa]
	//contraseña: 1 mayuscula, 1 minuscula, 2 numeros, 8 caracteres, 1 caracter especial, maximo 10 //
	//DNI minimo 6 maximo 11
	// Telefono: tiene q ser numeros (no letras, no simbolos, no nada)
	// Fecha de nacimiento: mayor de edad y no haber nacido en el futuro

	// TERMINAR VALIDACIONES
	// TAREA: no puede tener 2 o mas numeros iguales o (consecutivos)  - 11111 \ 1234

	const keys = Object.keys(data);

	const validations = keys.map((key) => validateField(key, data[key]));

	console.log(validations);

	const reduced = validations.reduce((acumulador, valor) => {
		const [key] = Object.keys(valor);
		acumulador[key] = valor[key];
		return acumulador;
	}, {});

	console.log(reduced);

	console.log(data);
};

const translation = {
	name: 'nombre',
	lastname: 'apellido',
};

const validateField = (field, value) => {
	const error = {};
	error[field] = [];

	//Nombre: que no tenga simbolos o numeros, que no este vacio
	if (['name', 'lastname'].includes(field)) {
		if (!value.trim()) {
			error[field].push(`Ingresa un ${translation[field]}`);
		}

		if (value.includes('@')) {
			error[field].push(`Ingresa un ${translation[field]} valido`);
		}
	}

	if (field === 'email') {
		const matches = value.match(/\S+@\S+\.\S+/);

		//expresion que busca palabras que terminan con o
		// 'Hola como estas' => ['como']
		// 'Hola  estas' => null
		if (!matches) {
			error[field].push('El correo electronico es invalido');
		}
	}

	// correo electronico: que sea un correo electronico / [cualquiercosa]@[cualquiercosa].[cualquierocosa]

	return error;
	/*
    const obj = {
        name: !value.includes('@)
    }
    obj[field]
    */
};

// Nombre, apellido, correo, contraseña, DNI, Telefono, Fecha de nacimiento

formulario.addEventListener('submit', handleSubmit);
