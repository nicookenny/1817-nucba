const API_URL = `https://pokeapi.co/api/v2/pokemon/`;

const input = document.getElementById('search');
const render = document.getElementById('render');
const form = document.getElementById('form');
//<div class="card"></div>

form.addEventListener('submit', async (e) => {
	e.preventDefault();

	const pokemon = input.value;
	e.target.reset();
	//TAREA: estilos lindos a las card
	// buscar otra forma de hacer la peticion en pokeapi para que renderice multiples cards (por ej, buscar por type y mostrar todos los pokemon de ese type)
	try {
		const response = await fetch(`${API_URL}${pokemon.toLowerCase()}`);
		const JSONResponse = await response.json();
		const { id, name, weight, height, sprites, types, stats, abilities, ...rest } = JSONResponse;

		const { front_default: image } = sprites;

		render.innerHTML = `<div class="card">
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
	} catch (error) {
		render.innerHTML = `<h1>El pokemon q tas buscando capo, NO EXISTE!!!</h1>`;
	}
});

/**
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
