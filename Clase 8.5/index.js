function getID(length) {
	var result = '';
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

// - Crear una clase Carrito con las propiedades Productos, Dueño, Precio final, DineroDisponible.
// - Crear una clase Producto con las propiedades Precio, Nombre, ID, Stock

// - La clase Carrito debe tener un metodo que le permita agregar Productos a su propiedad Productos (array), asi como tambien eliminarlos. Cuando agrego elementos al carrito, el Importe del mismo aumenta y disminuye el stock del producto.
// Debo poder agregar stock a los productos, cambiarle el precio.
//El carrito debe tener un metodo para finalizar la compra (esto vacia el carrito y deja en 0 el importe)

// || => if (stock === undefined || stock === null || stock === '' || stock === NaN || stock === 0 || stock === false) { this. stock = 0 } else { this.stock = stock }

//  ?? => if (stock === undefined || stock === null) { this. stock = 0 } else { this.stock = stock }

// const array = [];

// const agregarNumero = (numero) => {
// 	array.push(numero);
// };
// //[]
// agregarNumero(3);
// agregarNumero(65);
// agregarNumero(20);
// // [3,65,20]

class Cart {
	constructor({ availableAmount, owner }) {
		this.finalPrice = 0;
		this.products = [];
		this.availableAmount = availableAmount;
		this.owner = owner;
	}

	addProducto = (product) => {
		if (product.stock > 0) {
			const ProductoExistente = this.products.find((producto) => producto.ID === product.ID);

			if (!ProductoExistente) {
				this.products.push({
					...product,
					quantity: 1,
				});
			} else {
				ProductoExistente.quantity += 1;
			}

			this.finalPrice += product.price; // this.finalPrice = this.finalPrice + product.price
			this.availableAmount -= product.price; // this.availableAmount = this.availableAmount - product.price
			product.stock--;
		} else {
			console.log('El producto requerido no tiene stock');
		}
	};
	// [1,2,3,4,5].filter(number=> number !== 4) => [1,2,3,5]
	removeProduct = (ID) => {
		const productoExistente = this.products.find((product) => product.ID === ID); // MAL, deberia buscar el producto dentro de mi base de datos de productos

		//! TODO
		//Validar que el producto ESTE en elcarrito y ADEMAS que el producto EXISTA en la base datos

		if (productoExistente) {
			if (productoExistente.quantity > 1) {
				productoExistente.quantity--;
			} else {
				this.products = this.products.filter((product) => product.ID !== ID);
			}
			productoExistente.stock++;
			this.finalPrice -= productoExistente.price;
			this.availableAmount += productoExistente.price;
		} else {
			console.log('El producto no esta en tu carrito');
		}
	};

	finishBuy = () => {
		console.log('Finalizaste la compra');

		const ProductosComprados = this.products.map((product) => product.name);
		console.log('Comprate los productos: ', ProductosComprados.join(', '));

		console.log(`Te sobraron $${this.availableAmount}`);

		this.products = [];
		this.finalPrice = 0;
	};
}

const CarritoAdel = new Cart({
	availableAmount: 125000,
	owner: 'Adel Fetner',
});

const CarritoKenny = new Cart({
	availableAmount: 5000,
	owner: 'Nicolas Kenny',
});

class Product {
	constructor({ name, stock, price }) {
		this.ID = getID(10);
		this.name = name;
		this.stock = stock || 0;
		this.price = price;
	}

	sayPrice = () => {
		console.log(this.price);
	};

	changePrice = (price) => {
		this.price = price;
	};

	changeStock = (stock, operator) => {
		this.stock = eval(`${this.stock} ${operator} ${stock}`); // '50 + 500' | '50 - 20'
	};
}

const CocaCola = new Product({
	name: 'Coca-Cola 2L',
	price: 150,
	stock: 50,
});

CocaCola.changeStock(500, '+');

const PapasLays = new Product({
	name: 'Aire con un poco de papas Lays',
	price: 500,
	stock: 50,
});

PapasLays.changeStock(20, '-');

CarritoKenny.addProducto(PapasLays);
CarritoKenny.addProducto(PapasLays);
CarritoKenny.addProducto(CocaCola);

CarritoAdel.addProducto(PapasLays);
CarritoAdel.addProducto(CocaCola);

CarritoKenny.removeProduct(PapasLays.ID);
CarritoKenny.removeProduct(PapasLays.ID);

console.log(CarritoAdel);
console.log(CarritoKenny);

//TAREA:
//! TODO

// 1. Validar availableAmount a la hora de agregar productos, si el monto disponible es menor al precio del producto a agregar, NO agregar el producto.

// 2. Validar que la funcionalidad de stock este funcionando correctamente (es decir, ver que los productos tengan el stock actualizado cuando agrego y cuando remuevo productos de los carritos)

// 3. Crear un ARRAY de Productos (nuestra base de datos de productos), y modificar los metodos correspondientes para que busquen los productos ahi y no en this.products
