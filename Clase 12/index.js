/*
Desarrollar un sistema que permita al usuario realizar un seguimiento de sus ingresos y egresos monetarios.
    Para esto, el usuario debe poder seleccionar si el dato que está cargando es un INGRESO o un EGRESO. Seguidamente, debe poder ingresar una descripción del movimiento que está ingresando (ej. honorarios, sueldo, comprar milanesas, etc). Por último, debe poder cargar el importe del movimiento.

    Al final, debe tocar un botón que guardará la información.

    Al tocar el botón, se mostrarán en pantalla los movimientos en forma de tabla. Los movimiento del tipo INGRESO deben tener un fondo de color verde (#4cd463) y los de EGRESO, color rojo (#e8574d).

    En el pie de la tabla, se debe mostrar un resumen de la tabla, sumando todos los ingresos y restandole los egresos. Si el monto final es > 0, debe tener el color rojo y si es mayor, el verde.
*/

const typeField = document.querySelector('#type');
const descriptionField = document.querySelector('#description');
const amountField = document.querySelector('#amount');
const dateField = document.querySelector('#date');

const submitButton = document.querySelector('button');

const tbody = document.querySelector('tbody');
const finalamount = document.querySelector('#finalamount');

const movimientos = [];

const mostrarImporteFinal = () => {
	let monto = 0;
	movimientos.forEach((movimiento) => {
		if (movimiento.type === 'INGRESO') {
			monto += movimiento.amount;
		} else {
			monto -= movimiento.amount;
		}
	});
	const value = document.createTextNode(`$${monto}`);
	finalamount.removeChild(finalamount.firstChild);
	finalamount.appendChild(value);
};

const limpiarFormulario = () => {
	[descriptionField, amountField, dateField].forEach((input) => {
		input.value = '';
	});
};

const generarMovimiento = () => {
	const objeto = {
		description: descriptionField.value,
		type: typeField.value,
		date: dateField.value.split('-').reverse().join('/'),
		amount: Number(amountField.value),
	};

	if (!objeto.description.trim() || !objeto.date || objeto.amount <= 0) {
		return null;
	}

	return objeto;
};

const imprimirColeccionMovimientos = (array, target) => {
	array.forEach((movimiento) => {
		const row = document.createElement('tr');
		//bg-white border-b dark:bg-gray-800 dark:border-gray-700
		row.classList.add('border-b', 'dark:bg-gray-800', 'dark:border-gray-700');

		console.log(movimiento);

		if (movimiento.type === 'INGRESO') {
			row.classList.add('income');
		} else {
			row.classList.add('outcome');
		}

		const keys = Object.keys(movimiento);
		console.log(keys);
		keys.forEach((key) => {
			const td = document.createElement('td');
			//px-6 py-4
			td.classList.add('px-6', 'py-4');
			const text = document.createTextNode(key === 'amount' ? `$${movimiento[key]}` : movimiento[key]);
			td.appendChild(text);

			row.appendChild(td);
		});

		target.appendChild(row);
	});
};

const limpiarTabla = () => {
	while (tbody.firstChild) {
		tbody.removeChild(tbody.firstChild);
	}
};

submitButton.addEventListener('click', (e) => {
	const nuevoMovimiento = generarMovimiento();
	if (!nuevoMovimiento) return alert('Compelta todos los datos adel gato');
	limpiarTabla();
	movimientos.push(nuevoMovimiento);
	imprimirColeccionMovimientos(movimientos, tbody);
	mostrarImporteFinal();
	limpiarFormulario();
});

// Guardar los movimientos en el local storage, y cuando se carga la pagina de 0 validar si tengo movimientos en el LS. Si tengo movimentos, completar la tabla como corresponde, sino dejar la tabla vacia.
