import { Pokemon, PokemonDetail, PokemonResponse } from "../../Interfaces/PokemonInterfaces";


/**
 * 
 * @returns {Promise<{error: Error?, result?: Pokemon[]?}>}
 */
export async function getPokemons(): Promise<{error?: Error | null, result?: Pokemon[] | null} > {

  const data: Pokemon[] = [];

  try {

    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
    const pokemons = await response.json();

    pokemons.results.map((result: PokemonResponse) => data.push({ id: result.url.split("pokemon/")[1].replace("/", ""), name: result.name }));

    return Promise.resolve({ error: null, result: data })

  } catch (error: any) {

    return Promise.resolve({ error: error.message, result: null })

  }

}

/**
 * 
 * @param {string} id 
 * @returns {Promise<{error: Error?, result?: PokemonDetail?}>}
 */
export async function getPokemon(id: string) : Promise<{error?: Error | null, result?: PokemonDetail | null}>{

  let data: PokemonDetail = {};

  try {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await response.json();

    data = { id: pokemon.id, name: pokemon.name, image: pokemon.sprites.other.home.front_default, abilities: pokemon.abilities }

    return Promise.resolve({ error: null, result: data })

  } catch (error: any) {
    return Promise.resolve({ error: error.message, result: null })
  }

}

