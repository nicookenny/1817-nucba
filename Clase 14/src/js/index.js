class Database {
	constructor() {
		this.users = [];
		this.products = [];
	}

	addProduct(...products) {
		this.products.push(...products);
	}

	addUser(user) {
		this.users.push(user);
	}
}
const database = new Database();

class Cart {
	constructor({
		ID = Date.now().toString(36) + Math.random().toString(36).substring(2),
		products = [],
		subtotal = 0,
		owner,
	}) {
		this.ID = ID;
		this.owner = owner;
		this.products = products;
		this.subtotal = subtotal;
	}

	addProduct(ID, quantity) {
		const product = database.products.find((product) => product.ID === ID);

		if (!product) {
			return alert('Che, el producto que estás agregando no existe, Ash.');
		}

		if (product.stock > quantity) {
			const price = quantity * product.price;

			this.subtotal = this.subtotal + price;

			product.stock = product.stock - quantity;
			//TODO
			//Validar si ya existe el producto en mi carrito, si existe quantity++, sino push
			this.products.push({
				ID,
				quantity,
			});
		} else {
			alert('No hay mas stock, maestro, jajode.');
		}
	}

	removeProduct(ID) {
		const product = this.products.find((p) => p.ID === ID);
		const productdb = database.products.find((p) => p.ID === ID);

		if (!product) {
			return alert('Che, el producto que estás intentando eliminar no existe en tu carrito, Brook.');
		}

		productdb.stock++;
		this.subtotal = this.subtotal - productdb.price;

		if (product.quantity > 1) {
			product.quantity--;
		} else {
			this.products = this.products.filter((product) => product.ID !== ID);
		}
	}
}

class Product {
	static currentID = 1;

	constructor({ price, stock = 0, name, description, image }) {
		this.ID = Product.currentID;
		this.price = price;
		this.stock = stock;
		this.name = name;
		this.description = description;
		this.image = image;

		Product.currentID++;
	}

	update({ price, stock, name = this.name, description = this.description, image = this.image }) {
		// ?? null o undefined => valor de la derecha, sino asignale el valor de la izquierda -
		this.price = price ?? this.price;
		this.stock = stock ?? this.stock;
		this.name = name;
		this.description = description;
		this.image = image;
	}
}

const Pikachu = new Product({
	price: 500,
	stock: 50,
	name: 'Pikachu',
	description: 'Pika Pika',
	image: 'https://i.pinimg.com/550x/dd/20/84/dd208480c6937eb68a91f73df5ca904a.jpg',
});

const Charmander = new Product({
	price: 900,
	stock: 25,
	name: 'Charmander',
	description: 'Se prendió fuego',
	image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
});

const Charizard = new Product({
	price: 900,
	stock: 25,
	name: 'Charizard',
	description: 'Se prendió fuego, pero más grande',
	image: 'https://i.pinimg.com/originals/e8/6b/86/e86b867b6369be2d0ea8d9024431f5b2.png',
});

// const Chicorita = new Product({
// 	price: 1200,
// 	stock: 15,
// 	name: 'Chicorita',
// 	description: 'El pokemon vegano',
// 	image: 'https://static.wikia.nocookie.net/espokemon/images/4/4e/Chikorita.png/revision/latest/scale-to-width-down/1200?cb=20140206203521',
// });

// const Alakazam = new Product({
// 	price: 2500,
// 	stock: 15,
// 	name: 'Alakazam',
// 	description: 'El doblacucharas',
// 	image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png',
// });

database.addProduct(Pikachu, Charmander, Charizard);
