/**
 * 
//  * @returns {Promise<{error: Error?, result: {id:string, name: string}[]?}>}
 */
export async function getPokemons () {

    const data: {id:string, name: string}[] | null = [];

    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
        const pokemons = await response.json();

        pokemons.results.map((result : /* {url: string, name: string}[] */ any) => data.push({id: result.url.split("pokemon/")[1].replace("/", ""), name: result.name }));

        return Promise.resolve({ error: null, result: data })
      } catch (error: any) {
        return Promise.resolve({ error: error.message, result: null })
      }

}

/**
 * 
 * @param {string} id 
 * @returns {Promise<{error: Error?, result: {id:string, name: string, image:string, habilities: string[]}?}>}
 */
export async function getPokemon (id: string) {

    ;

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon = await response.json();

        const data: {id:string, name: string, image: string, abilities: string[]} = {id: pokemon.id, name: pokemon.name, image: pokemon.sprites.other.home.front_default, abilities: pokemon.abilities }

        return Promise.resolve({ error: null, result: data })
      } catch (error: any) {
        return Promise.resolve({ error: error.message, result: null })
      }

}
