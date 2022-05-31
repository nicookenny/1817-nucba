const API_URL = `https://pokeapi.co/api/v2/pokemon/`;

const input = document.getElementById('search');
const render = document.getElementById('render');
const form = document.getElementById('form');
//<div class="card"></div>

let next = null;

document.addEventListener('DOMContentLoaded', async () => {
	const response = await fetch(`${API_URL}?limit=20&offset=0`);
	const JSONResponse = await response.json();
	next = JSONResponse.next;

	console.log(JSONResponse);
	render.innerHTML = '';

	const eachPokemon = await Promise.all(
		JSONResponse.results.map(async (element) => {
			const el = await fetch(element.url);
			const elJSON = await el.json();
			return elJSON;
		}),
	);

	eachPokemon.forEach(async (element) => {
		const { id, name, weight, height, sprites, types, stats, abilities, ...rest } = element;
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
});

render.addEventListener('scroll', async (e) => {
	if (render.offsetHeight + render.scrollTop > render.scrollHeight) {
		const r = await fetch(next);
		const JSONResponse = await r.json();

		next = JSONResponse.next;

		const eachPokemon = await Promise.all(
			JSONResponse.results.map(async (element) => {
				const el = await fetch(element.url);
				const elJSON = await el.json();
				return elJSON;
			}),
		);

		eachPokemon.map(async (element) => {
			const { id, name, weight, height, sprites, types, stats, abilities, ...rest } = element;

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
	}
});
