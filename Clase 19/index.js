/*

CONSIGNA:

Crear una funcion que consulte la API de PokeAPI (https://pokeapi.co/api/v2/pokemon?limit=50&offset=0) y, tomando la propiedad next, realizar 5 consultas concatenadas. El resultado de dicha funcion debe ser un array con 250 pokemones. 
Realizar esta funcion con promesas y con async/await. Manejar los errores en ambos casos.

Crear una segunda funcion que, con el resultado de la funcion 1, elija 5 pokemones al azar y utilice la propiedad url de cada uno. Devolver un objeto con la estructura:

{
    name: Nombre del pokemon,
    weight,
    abilities: [array de strings con el nombre de sus habilidades]
    moves: [array de strings con el nombre de sus  movimientos]
    random: un numero random generado 
}
 */

// fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
// 	.then((res) => {
// 		return res.json();
// 	})
// 	.then((res) => {
// 		console.log(res);
// 	});

const getPokemon = async () => {
	try {
		const response = await fetch(`https://pokeaasdasdpi.co/api/v2/pokemon/ditto`);
		const data = await response.json();

		return {
			error: null,
			data,
		};
	} catch (error) {
		return {
			error: 'Hubo un error',
		};
	}
	// const response = await (await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)).json();
};

