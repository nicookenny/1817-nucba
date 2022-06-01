const API_URL = `https://pokeapi.co/api/v2/pokemon/`;

const input = document.getElementById('search');
const render = document.getElementById('render');
const form = document.getElementById('form');

const params = {
	next: null,
};

const renderItems = (array) => {
	array.forEach(async (pokemon) => {
		const { id, name, weight, height, sprites, types, stats, abilities, ...rest } = pokemon;
		const { front_default: image } = sprites;

		render.innerHTML += `<div class="card">
					<img src="${image}" />
					<div>
						<h3>${id}. ${name}</h3>
						<span>
							<p><span>Peso:</span>${weight}lbs</p>
							<p><span>Altura:</span>${height}"</p>
						</span>
					</div>
					<span>
						<h4>Tipos:</h4>
						<ul>
						${types
							.map((item) => {
								return `<li>${item.type.name}</li>`;
							})
							.join('')}
						</ul>
					</span>
					<span>
						<h4>Stats:</h4>
						<ul>
							${stats
								.map((item) => {
									return `<li>${item.stat.name}:<span>${item.base_stat}</span></li>`;
								})
								.join('')}
						</ul>
					</span>
					<span>
						<h4>Habilidades:</h4>
						<ul>
						${abilities
							.map((item) => {
								return `<li>${item?.ability?.name}</li>`;
							})
							.join('')}
						</ul>
					</span>
				</div>`;
	});
};

document.addEventListener('DOMContentLoaded', async (e) => {
	try {
		const response = await fetch(`${API_URL}?limit=20&offset=0`);
		const { next, results } = await response.json();

		params.next = next;

		render.innerHTML = '';

		const URLS = results.map((pokemon) => pokemon.url);

		console.log(URLS);

		const InfoPokemones = await Promise.all(
			URLS.map(async (url) => {
				const next20 = await fetch(url);
				return await next20.json();
			}),
		);

		renderItems(InfoPokemones);
	} catch (error) {
		render.innerHTML = `<h1>El pokemon q tas buscando capo, NO EXISTE!!!</h1>`;
	}
});

render.addEventListener('scroll', async (e) => {
	const { scrollHeight, scrollTop, offsetHeight } = render;

	const llegoAbajo = offsetHeight + scrollTop + 2 > scrollHeight;

	if (llegoAbajo) {
		const next20 = await fetch(params.next);
		const { next, results } = await next20.json();
		params.next = next;

		const URLS = results.map((pokemon) => pokemon.url);

		console.log(URLS);

		// new Promise(resolve,reject)
		const InfoPokemones = await Promise.all(
			URLS.map(async (url) => {
				const next20 = await fetch(url);
				return await next20.json();
			}),
		);

		renderItems(InfoPokemones);
	}
});

/**
 * render.innerHTML = `<div class="card">
    <img src="${image}" />
    <div>
        <h3>${id}. ${name}</h3>
        <span>
            <p><span>Peso:</span>${weight}lbs</p>
            <p><span>Altura:</span>${height}"</p>
        </span>
    </div>
    <span>
        <h4>Tipos:</h4>
        <ul>
           ${types
				.map((item) => {
					return `<li>${item.type.name}</li>`;
				})
				.join('')}
        </ul>
    </span>
    <span>
        <h4>Stats:</h4>
        <ul>
            ${stats
				.map((item) => {
					return `<li>${item.stat.name}:<span>${item.base_stat}</span></li>`;
				})
				.join('')}
        </ul>
    </span>
    <span>
        <h4>Habilidades:</h4>
        <ul>
        ${abilities
			.map((item) => {
				return `<li>${item?.ability?.name}</li>`;
			})
			.join('')}
        </ul>
    </span>
</div>`;

	<div class="card">
					<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" />
					<div>
						<h3>25. Ditto</h3>
						<span>
							<p><span>Peso:</span>60lbs</p>
							<p><span>Altura:</span>4"</p>
						</span>
					</div>
					<span>
						<h4>Tipos:</h4>
						<ul>
							<li>Eletrico</li>
						</ul>
					</span>
					<span>
						<h4>Stats:</h4>
						<ul>
							<li>HP:<span>50</span></li>
						</ul>
					</span>
					<span>
						<h4>Habilidades:</h4>
						<ul>
							<li>Estatica</li>
						</ul>
					</span>
				</div>
 */

/*
CONSIGNA:

En base al HTML y CSS que esta en el repositorio de la clase 20, realizar una paginacion utilizando las URL NEXT y PREVIOUS (


URL INICIAL: https://pokeapi.co/api/v2/pokemon?offset=0&limit=20

next: url || null
previous: url || null
results:[]

)

Siempre que exista una pagina siguiente, mostrar un boton Siguiente, que lo que haga sea mostrar los 20 siguientes elementos (debe eliminar los que se muestran, ya que no es scroll infinito). Lo mismo con previous, mostrar un boton Anterior.
Si no existe alguna d las propiedades, el boton correspondiente no se debe mostrar.

*/
