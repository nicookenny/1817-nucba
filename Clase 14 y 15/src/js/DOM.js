const productList = document.getElementById('list-products');
const cartContainer = document.getElementById('cartWrapper');
const finalPrice = document.getElementById('totalProducts');
const finish = document.getElementById('finish');

/**
 * 
 *          <div class="cart-item">
                <div class="cart-item-content">
                    <span>${product.product}</span>
                    <span>Count: ${product.count}</span>
					</div>
                    <div>
                        <span>$ ${product.price}</span>
                    </div>
                </div>
            </div>          
 */

const renderizarCarrito = (carrito) => {
	while (cartContainer.firstChild) {
		cartContainer.removeChild(cartContainer.firstChild);
	}

	while (finalPrice.firstChild) {
		finalPrice.removeChild(finalPrice.firstChild);
	}

	if (!carrito.products.length) {
		finish.classList.add('disabled-button');
		finish.setAttribute('disabled', true);
		finish.textContent = 'Tu carrito esta vacio';
	} else {
		finish.classList.remove('disabled-button');
		finish.removeAttribute('disabled');
		finish.textContent = 'Finalizar compra';
	}

	const finalPriceText = document.createTextNode(carrito.subtotal);
	finalPrice.appendChild(finalPriceText);

	//!0 => truthy
	if (!carrito.products.length) {
		const msgCarritoVacio = document.createElement('div');
		msgCarritoVacio.classList.add('emptyProductsMessage');
		const msgCarritoVacioText = document.createTextNode('No tienes productos seleccionados');
		msgCarritoVacio.appendChild(msgCarritoVacioText);
		cartContainer.appendChild(msgCarritoVacio);
		return;
	}

	carrito.products.forEach((product) => {
		const DatabaseProduct = database.products.find((p) => p.ID === product.ID);

		const cartItem = document.createElement('div');
		cartItem.classList.add('cart-item');

		const cartItemContent = document.createElement('div');
		cartItemContent.classList.add('cart-item-content');
		const itemPrice = document.createElement('div');

		const productName = document.createElement('span');
		const productNameText = document.createTextNode(DatabaseProduct.name);
		productName.appendChild(productNameText);

		const price = document.createElement('span');
		const priceText = document.createTextNode(`$${DatabaseProduct.price} x ${product.quantity}`);
		price.appendChild(priceText);

		const containerButton = document.createElement('div');

		const botonDisminuir = document.createElement('button');
		const botonTextDisminuir = document.createTextNode('-');

		botonDisminuir.appendChild(botonTextDisminuir);

		botonDisminuir.addEventListener('click', (e) => carrito.removeProduct(product.ID));

		const botonAumentar = document.createElement('button');
		const botonTextAumentar = document.createTextNode('+');
		botonAumentar.appendChild(botonTextAumentar);
		botonAumentar.addEventListener('click', (e) => carrito.addProduct(product.ID));
		containerButton.appendChild(botonDisminuir);
		containerButton.appendChild(botonAumentar);
		// const quantity = document.createElement('span');
		// const quantityText = document.createTextNode(`Cantidad: `);
		// quantity.appendChild(quantityText);

		cartItemContent.appendChild(productName);
		// cartItemContent.appendChild(quantity);

		itemPrice.appendChild(price);

		cartItem.appendChild(cartItemContent);
		cartItem.appendChild(itemPrice);
		cartItem.appendChild(containerButton);

		cartContainer.appendChild(cartItem);
	});
};

const renderizarProductos = (carrito) => {
	while (productList.firstChild) {
		productList.removeChild(productList.firstChild);
	}

	database.products.forEach((product) => {
		const item = document.createElement('li');

		const image = document.createElement('img');
		image.setAttribute('src', product.image);

		const name = document.createElement('span');
		const textname = document.createTextNode(product.name);
		name.appendChild(textname);

		const description = document.createElement('span');
		const textdescription = document.createTextNode(product.description);
		description.appendChild(textdescription);

		const price = document.createElement('span');
		const textprice = document.createTextNode(`$${product.price} - stock: ${product.stock}`);

		price.appendChild(textprice);

		const button = document.createElement('button');
		const textbutton = document.createTextNode('Agregar al carrito');

		if (product.stock === 0) {
			button.classList.add('disabled-button');
			button.setAttribute('disabled', true);
			textbutton.textContent = 'No hay mas stock';
		}

		button.appendChild(textbutton);

		button.addEventListener('click', (e) => {
			carrito.addProduct(product.ID, 1);

			console.log(carrito);
		});

		item.appendChild(image);
		item.appendChild(name);
		item.appendChild(description);
		item.appendChild(price);
		item.appendChild(button);
		productList.appendChild(item);
	});
};

document.addEventListener('DOMContentLoaded', (e) => {
	const carritoExistente = localStorage.getItem('cart');

	const carrito = carritoExistente ? new Cart(JSON.parse(carritoExistente)) : new Cart({ owner: '' });

	localStorage.setItem('cart', JSON.stringify(carrito));

	renderizarCarrito(carrito);
	renderizarProductos(carrito);

	finish.addEventListener('click', () => {
		carrito.endShopSpree();
	});
});
