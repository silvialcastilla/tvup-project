/**
 * 
 * @param {{PokemonRepository: {getPokemons: () => {result:any, error: Error?}}}} param 
 * @returns {{execute: () => Promise<{result: any, error: Error?}>}}
 */
export function GetPokemonsUseCase({ PokemonRepository }:  {PokemonRepository: any}) {
    return {
        async execute() {
            const { result, error } = await PokemonRepository.getPokemons()
            return { result, error }
        }
    }
}