const productList = document.getElementById('list-products');

document.addEventListener('DOMContentLoaded', (e) => {
	const carritoExistente = localStorage.getItem('cart');
    // TODO
	//Si el carrito ya esta en el local storage, crear una instancia del carrito con las propiedades del existente, sino crear uno nuevo
	const carrito = carritoExistente ? new Cart(JSON.parse(carritoExistente)) : new Cart({ owner: '' });

	localStorage.setItem('cart', JSON.stringify(carrito));

	console.log(carrito);

	database.products.forEach((product) => {
		const item = document.createElement('li');

		const image = document.createElement('img');
		image.setAttribute('src', product.image);

		const name = document.createElement('span');
		const textname = document.createTextNode(product.name);
		name.appendChild(textname);
		const price = document.createElement('span');
		const textprice = document.createTextNode(`$${product.price} - stock: ${product.stock}`);

		price.appendChild(textprice);

		const button = document.createElement('button');
		const textbutton = document.createTextNode('Agregar al carrito');
		button.appendChild(textbutton);
		button.addEventListener('click', (e) => {
			carrito.addProduct(product.ID, 1);

			console.log(carrito);
		});

		item.appendChild(image);
		item.appendChild(name);
		item.appendChild(price);
		item.appendChild(button);
		productList.appendChild(item);
	});
});
